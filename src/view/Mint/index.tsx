/* eslint-disable react/no-unescaped-entities */
"use client";
import useWallet, { provider } from "@/web3/Store/useWallet";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/component/Loader";

export default function Mint() {
  const router = useRouter();
  const {
    readContractFunction,
    checkIfWalletIsConnected,
    writeContractFunction,
    setLoadingState,
    loading,
    accounts,
  } = useWallet();

  const intialState = {
    count: 0,
    total: 0,
    totalMinted: 0,
    price: 0,
    remainingMint: 0,
    isVisible: false,
    isOwner: false,
    signer: "",
  };

  const [state, setState] = useState(intialState);

  const { count, total, totalMinted, price, remainingMint, isOwner } = state;

  const fetchSCData = async () => {
    console.log("fetchData called");
    const maxSupply = await readContractFunction("MAX_SUPPLY");

    const supply = await readContractFunction("totalSupply");

    const tokenPrice = await readContractFunction("price");

    const signer = (await provider.getSigner()).address;
    const owner = await readContractFunction("owner");

    const nftOfUser = await readContractFunction("nftOfUser", [signer]);
    let remMint = signer !== owner ? 7 - nftOfUser.length : maxSupply - supply;

    setState((prevState) => ({
      ...prevState,
      total: maxSupply,
      totalMinted: supply,
      price: tokenPrice,
      remainingMint: remMint,
      count: signer === owner || remMint > 0 ? 1 : 0,
      isOwner: signer === owner,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await checkIfWalletIsConnected();
        await fetchSCData();
      } catch (err) {
        // alert(err);
      }
    };

    fetchData();
  }, [accounts]);

  function increment() {
    if (count === 5) {
      toast.warn("You can mint only 5 NFT's at a time.");
      return;
    }
    if (remainingMint === count) {
      toast.warn(`You can't mint more than ${count} NFT's.`);
      return;
    }

    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  }

  function decrement() {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  }

  const mintNow = (e: any) => {
    e.preventDefault();

    setLoadingState(true);
    const result = async () => {
      try {
        return await writeContractFunction(isOwner ? "ownerMint" : "mint", [
          count,
          {
            value: (price * count).toString(),
            gasLimit: 7000000,
          },
        ]);
      } catch (error: any) {
        // alert(error.message);
      }
    };

    result().then(async () => {
      await fetchSCData();
      setLoadingState(false);
      // router.push("/");
    });
  };

  return (
    <>
      <section className="mint-section w-full bg-[url('/images/roadmap_bg.svg')] bg-cover h-screen bg-primary">
        <div className="container">
          <div className="mint-data pt-28 2xl:pt-40" data-aos="fade-up">
            <div className="flex min-h-full flex-1 flex-col justify-center p-4 md:p-12 bg-[#0E0B19] max-w-[684px] m-auto rounded-[14px] border border-[#171227]">
              <div className="text-center">
                <h1 className="text-white ff-orbitron-b drop-shadow-[0px 0px 50px #FFFFFF94] text-[40px] mint-title">
                  MINT NFT
                </h1>
                <p className="mt-2.5 text-xl">
                  {total && totalMinted
                    ? `${total - totalMinted} NFT's left`
                    : "Fetching..."}
                </p>
              </div>

              <div className="mt-10 2xl:mt-[70px]">
                <form
                  className="space-y-6 2xl:space-y-12"
                  action="#"
                  method="POST"
                >
                  <div className="flex justify-between border rounded-[14px] border-[#746DDA] h-[70px] text-xl p-5">
                    <div className="lable ff-inter-l">Amount</div>
                    <div className="amount-data flex">
                      <span onClick={decrement} className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Group_1617"
                          data-name="Group 1617"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="Path_24000"
                            data-name="Path 24000"
                            d="M0,0H24V24H0Z"
                            fill="none"
                          />
                          <rect
                            id="Rectangle_875"
                            data-name="Rectangle 875"
                            width="16"
                            height="16"
                            rx="2"
                            transform="translate(4 4)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1"
                            data-name="Line 1"
                            x2="6"
                            transform="translate(9 12)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </span>
                      <span className="px-4 ff-inter-sb">{count}</span>
                      <span
                        onClick={increment}
                        className={`${remainingMint > 0} && cursor-pointer`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Group_1616"
                          data-name="Group 1616"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="Path_24000"
                            data-name="Path 24000"
                            d="M0,0H24V24H0Z"
                            fill="none"
                          />
                          <rect
                            id="Rectangle_875"
                            data-name="Rectangle 875"
                            width="16"
                            height="16"
                            rx="2"
                            transform="translate(4 4)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1"
                            data-name="Line 1"
                            x2="6"
                            transform="translate(9 12)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_2"
                            data-name="Line 2"
                            y2="6"
                            transform="translate(12 9)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between border rounded-[14px] border-[#746DDA] h-[70px] text-xl p-5">
                    <div className="lable ff-inter-l">Total</div>
                    <div className="total-data flex text-[#746DDA] ff-inter-sb">
                      {price ? (count * price) / 10 ** 18 : "Fetching..."}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      title="MINT NOW"
                      className={`text-primary bg-primary_l xl:text-xl px-5 py-2 xl:px-9 xl:py-4 rounded-lg hover:text-white hover:bg-secondary transition ease-in-out delay-300 ff-exo-sb 2xl:mt-4 ${
                        count === 0 && "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={mintNow}
                      disabled={count === 0}
                    >
                      MINT NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
