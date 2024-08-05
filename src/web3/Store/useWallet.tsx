// import { address, abi } from "@/contract/sc-info";

import { create } from "zustand";
import { ethers } from "ethers";
import { CONTRACTINFO } from "../sc-info";
import { toast } from "react-toastify";
import { errorMSG, successMSG } from "@/constants/toastMessages";

let ethereum: Window["ethereum"];

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}
const provider = new ethers.BrowserProvider(ethereum);

const envData: "dev" | "prod" | "staging" = process.env
  .NEXT_PUBLIC_ENVIRONMENT as any;

interface WalletState {
  signer: ethers.Signer | any;
  readContract: ethers.Contract | null;
  writeContract: ethers.Contract | null;
  accounts: string[];
  chainId: number;
  owner: string;
  loading: boolean;
  connected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  checkIfWalletIsConnected: () => Promise<void>;
  setLoadingState: (isLoading: boolean) => void;
  readContractFunction: (
    funcName: ReadContractFunctionName,
    args?: any[]
  ) => Promise<any>;

  writeContractFunction: (
    funcName: string,
    args?: any[],
    eventName?: EvenProps
  ) => Promise<any>;
}

const useWallet = create<WalletState>((set, get) => {
  const initializeContract = () => {
    const { signer } = get();

    if (provider && signer) {
      const readContract = new ethers.Contract(
        CONTRACTINFO[envData].address,
        CONTRACTINFO[envData].abi,
        provider
      );
      const writeContract = new ethers.Contract(
        CONTRACTINFO[envData].address,
        CONTRACTINFO[envData].abi,
        signer
      );
      set({ readContract, writeContract });
    }
  };

  const isInstalled = async () => {
    if (!ethereum) {
      toast.error(errorMSG.MetamaskNotInsatll);
      return false;
    }
    return true;
  };

  const isConnected = async () => {
    await Promise.resolve();

    return get().connected;
  };

  const connectWallet = async () => {
    try {
      const isMetaMaskInstalled = await isInstalled();
      if (!isMetaMaskInstalled) return;

      const owner = await get().readContractFunction("owner");
      set({
        owner,
      });
      const signer = await provider.getSigner();
      const accounts = await ethereum.request?.({
        method: "eth_requestAccounts",
      });
      const chainId = await ethereum.request?.({ method: "eth_chainId" });

      if (accounts?.length && chainId) {
        set({
          accounts,
          chainId: parseInt(chainId, 16),
          connected: true,
          signer,
        });

        initializeContract();

        ethereum.on("accountsChanged", (newAccounts: string[]) => {
          // toast.info("Account Changed");
          if (get().connected) set({ accounts: newAccounts });
        });

        ethereum.on("chainChanged", (newChainId: string) => {
          // toast.info("chain ID Changed")
          if (get().connected) set({ chainId: parseInt(newChainId, 16) });
        });

        // ethereum.on("disconnect", (something: any) => {
        //   toast.error(errorMSG.WalletDisconnected);
        //   if (get().connected) {
        //     set({ accounts: [], chainId: 0, connected: false });
        //   }
        // });
      }
    } catch (e: any) {
      // toast.error(e.message);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { connectWallet, connected } = get();
    if (connected) return;
    else await connectWallet();
  };

  return {
    signer: null,
    readContract: null,
    writeContract: null,
    accounts: [],
    chainId: 0,
    connected: false,
    owner: "",
    checkIfWalletIsConnected,
    loading: false,
    setLoadingState: (isLoading: boolean) => set({ loading: isLoading }),

    connectWallet,
    disconnectWallet: async () => {
      set({ accounts: [], chainId: 0, connected: false });
    },

    readContractFunction: async (
      funcName: ReadContractFunctionName,
      args: any[] = []
    ) => {
      const { readContract } = get();
      if (readContract) {
        const res = await readContract[funcName](...args);
        if (typeof res == "bigint") return Number(res);
        return res;
      } else {
        // alert("Contract not initialized");
      }
    },

    writeContractFunction: async (
      funcName: string,
      args: any[] = [],
      eventName?: EvenProps
    ) => {
      const { writeContract } = get();
      const signer = await provider!.getSigner();
      let response = {};
      if (signer && writeContract) {
        try {
          // @ts-expect-error
          const res = await writeContract.connect(signer)[funcName](...args);

          if (eventName) {
            const eventFilter = writeContract.filters[eventName!]();
            const eventPromise = new Promise((resolve) => {
              writeContract.on(eventFilter, (res) => {
                resolve(res.args[2]);
              });
            });

            const event = await eventPromise;
            response = { ...response, event };
          }
          const receipt = await res.wait();
          if (receipt.status !== 1) throw new Error(errorMSG.TrnsFailed);
          response = { ...response, receipt };

          toast.success(
            `${args?.[0]} NFT minted successfully. Please check Opensea to check its traits.`
          );
          return { response, success: true };
        } catch (error: any) {
          toast.error(errorMSG.TrnsFailed);
        }
      }
    },
  };
});

export { provider };

export default useWallet;
