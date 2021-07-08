import React from "react";
import { useState, useEffect } from "react";
import Article from "./Article";

export default function PageComponent({ apiFunc }) {
  const [state, setState] = useState([]);

  const getResults = async () => {
    const data = await apiFunc();
    setState(data);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <Article data={state} />
    </>
  );
}
