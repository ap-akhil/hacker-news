import React from "react";
import PageComponent from "../components/PageComponent";

export default function Home() {
  return (
    <>
      <PageComponent endpoint="topstories.json" />
    </>
  );
}
