import React, { useState } from "react";
import { useEffect } from "react";
import { getItem } from "../api";

export default function Articleitem({ id, index }) {
  const [state, setState] = useState({});

  const getlistItem = async () => {
    const itemdata = await getItem(id);
    setState(itemdata);
  };

  const DifferenceDateTime = (timestamp) => {
    let currentdate = new Date();
    let date = new Date(timestamp * 1000);
    let mindiff = (currentdate.getTime() - date.getTime()) / 1000;
    mindiff /= 60;
    mindiff = Math.abs(Math.round(mindiff));
    let hourdiff = Math.floor(mindiff / 60);

    let daydiff = Math.floor(hourdiff / 24);

    let yeardiff = currentdate.getFullYear() - date.getFullYear();

    if (yeardiff) {
      return yeardiff + " years ago";
    }
    if (daydiff) {
      return daydiff + " days ago";
    }
    if (hourdiff) {
      return hourdiff + " hours ago";
    }
    if (mindiff) {
      return mindiff + " minutes ago";
    }
  };

  const ParseURL = (url) => {
    if (!url) {
      return null;
    }
    let index = url.indexOf("/", 9);
    let parseurl = url.substring(0, index);
    return parseurl;
  };

  useEffect(() => {
    getlistItem();
  }, []);

  if (Object.keys(state).length === 0) {
    return null;
  }

  return (
    <>
      <tr className="article-top-item">
        <td className="article-top-item-index">{`${index}.`}</td>
        <td>+</td>
        <td>
          <a className="article-title" href={state.url}>
            {state.title}
          </a>{" "}
          <span>
            {" "}
            {state.url ? (
              <a href={state.url}>{` (${ParseURL(state.url)})`}</a>
            ) : (
              ""
            )}
          </span>
        </td>
      </tr>
      <tr className="article-bottom-item">
        <td colSpan={2}></td>
        <td>
          {state.score} points by {state.by} {DifferenceDateTime(state.time)} |{" "}
          {state.descendants} comments
        </td>
      </tr>
      <tr className="spacer"></tr>
    </>
  );
}
