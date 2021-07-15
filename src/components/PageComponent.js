import React from "react";
import useFetch from "../api/customhook/useFetch";
import Article from "./Article";

export default function PageComponent({ endpoint }) {
  const data = useFetch({ endpoint });

  return <Article data={data} />;
}
