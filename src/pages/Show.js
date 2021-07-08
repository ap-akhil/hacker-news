import React from "react";
import { getShows } from "../api";
import PageComponent from "../components/PageComponent";

export default function Show() {
  return (
    <>
      <PageComponent apiFunc={getShows} />
    </>
  );
}
