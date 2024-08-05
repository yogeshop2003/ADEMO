"use client";

import useWallet from "@/web3/Store/useWallet";
import { ethers, parseEther } from "ethers";
import { useState } from "react";

const Mint = () => {
  const [total, setTotal] = useState(0);
  const [minted, setMinted] = useState(0);
  const [price, setPrice] = useState<any>();

  const [qty, setQty] = useState(1);
  const { readContractFunction, writeContractFunction } = useWallet();

  const getNFTInfo = () => {
    readContractFunction("MAX_SUPPLY")
      .then((res) => {
        setTotal(Number(res));

        return readContractFunction("totalSupply");
      })
      .then((res) => {
        setMinted(Number(res));

        return readContractFunction("price");
      })
      .then((res) => setPrice(res))
      .catch((err) => {
        // alert(err);
      });
  };

  const mintNow = () => {
    const result = async () => {
      try {
        return await writeContractFunction(
          "mint",
          [
            qty,
            {
              value: (price * qty).toString(),
              gasLimit: 500000,
            },
          ],
          "Transfer"
        );
      } catch (error: any) {
        // alert(error.message);
      }
    };
    result().then((res) => console.log(res, "========="));
  };

  return (
    <div>
      <br />
      <hr />
      <br />
      <button onClick={getNFTInfo}>Get NFT Info</button>
      <br />
      <br />
      <p>Total NFT - {total}</p>
      <br />
      <p>Remaining NFT - {(total - minted).toString()} </p>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h2>Buy</h2>
      <label htmlFor="">Qty </label>
      <input
        type="number"
        min={1}
        max={5}
        defaultValue={qty}
        onChange={(e) => {
          setQty(Number(e.target.value));
        }}
      />
      <p>Price - {(qty * price) / 10 ** 18 || 0} ethers</p>
      <button onClick={mintNow}>Mint Now</button>
    </div>
  );
};

export default Mint;
