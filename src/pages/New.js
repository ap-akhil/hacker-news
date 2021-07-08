import React from "react";
import PageComponent from "../components/PageComponent";
import { getNewest } from "../api";

export default function New() {
  return <PageComponent apiFunc={getNewest} />;
}
