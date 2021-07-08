import React from "react";
import { getBest } from "../api";
import PageComponent from "../components/PageComponent";

export default function Best() {
  return (
    <>
      <PageComponent apiFunc={getBest} />
    </>
  );
}
