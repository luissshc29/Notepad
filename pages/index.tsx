import Banner from "components/Banner";
import ContainerEdicao from "components/ContainerEdicao";
import ContainerNotas from "components/ContainerNotas";
import PopUp from "components/PopUp";
import Rodape from "components/Rodape";
import { Toaster } from "components/ui/toaster";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadStorage } from "store/reducers/notas";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(loadStorage(JSON.parse(localStorage.getItem("notas") ?? "[]")));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Notepad</title>
      </Head>
      <Banner />
      <div className="p-8 grid grid-cols-1 h-auto gap-4 lg:grid-cols-2">
        <ContainerEdicao />
        <ContainerNotas />
        <Toaster />
        <Rodape />
      </div>
    </>
  );
}
