import React from "react";
import { getJobs } from "../api";
import PageComponent from "../components/PageComponent";

export default function Jobs() {
  return (
    <>
      <PageComponent apiFunc={getJobs} />
    </>
  );
}
