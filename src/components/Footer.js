import React from "react";

export default function Footer() {
  return (
    <>
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style={{ paddingTop: "15px" }}
      >
        <tbody>
          <tr>
            <td bgcolor="#ff6600" style={{ height: "2px" }}></td>
          </tr>
        </tbody>
      </table>
      <tr className="footer-item">
        <td>Apply early for the YC Winter 2022 batch</td>
      </tr>
      <tr className="footer-item">
        <td>Guidlines | FAQ | API | Security | Legal</td>
      </tr>
    </>
  );
}
