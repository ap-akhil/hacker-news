import React from "react";
import { getTops } from "../api";
import PageComponent from "../components/PageComponent";

export default function Home() {
  return (
    <>
      <PageComponent apiFunc={getTops} />
    </>
  );
}
