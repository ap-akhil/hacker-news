import React from "react";
import { useState } from "react";
import Articleitem from "./Articleitem";

export default function Article({ data }) {
  const range = 30;
  const [state, setState] = useState(0);

  const IncreaseLimit = () => {
    setState((prev) => prev + range);
  };
  let SliceData = data.slice(state, state + range);
  return (
    <>
      <tr>
        <td>
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              {SliceData.map((item, index) => {
                return (
                  <Articleitem key={item} id={item} index={index + 1 + state} />
                );
              })}
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={() => IncreaseLimit()}>More</button>
        </td>
      </tr>
    </>
  );
}
