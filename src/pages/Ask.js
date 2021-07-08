import React from "react";
import { getAsks } from "../api";
import PageComponent from "../components/PageComponent";

export default function Ask() {
  return (
    <>
      <PageComponent apiFunc={getAsks} />
    </>
  );
}
