"use client";

import Loader from "@/component/Loader";
import useWallet from "@/web3/Store/useWallet";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Wrapper = ({ children }: any) => {
  const { loading } = useWallet();

  return (
    <>
      {children}
      {loading && <Loader />}
      <ToastContainer />
    </>
  );
};
