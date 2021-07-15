import React from "react";
import useFetch from "../api/customhook/useFetch";

export default function Articleitem({ id, index }) {
  const data = useFetch({ initialState: {}, endpoint: `item/${id}/.json` });

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

  if (Object.keys(data).length === 0) {
    return null;
  }

  return (
    <>
      <tr className="article-top-item">
        <td className="article-top-item-index">{`${index}.`}</td>
        <td>+</td>
        <td>
          <a className="article-title" href={data.url}>
            {data.title}
          </a>{" "}
          <span>
            {" "}
            {data.url ? (
              <a href={data.url}>{` (${ParseURL(data.url)})`}</a>
            ) : (
              ""
            )}
          </span>
        </td>
      </tr>
      <tr className="article-bottom-item">
        <td colSpan={2}></td>
        <td>
          {data.score} points by {data.by} {DifferenceDateTime(data.time)} |{" "}
          {data.descendants} comments
        </td>
      </tr>
      <tr className="spacer"></tr>
    </>
  );
}
