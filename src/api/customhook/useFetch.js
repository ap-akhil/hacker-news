import { useState, useEffect, useCallback } from "react";

export default function useFetch({ initialState = [], endpoint }) {
  const base_url = "https://hacker-news.firebaseio.com/v0/";
  const [response, setResponse] = useState(initialState);

  const fetchData = useCallback(async () => {
    console.count("api called");
    const resp = await fetch(`${base_url}/${endpoint}`);
    const data = await resp.json();
    setResponse(data);
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return response;
}
