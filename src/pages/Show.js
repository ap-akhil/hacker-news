import React from "react";
import PageComponent from "../components/PageComponent";

export default function Show() {
  return (
    <>
      <PageComponent endpoint="showstories.json" />
    </>
  );
}
