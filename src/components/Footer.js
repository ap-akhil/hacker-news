import React from "react";

export default function Footer() {
  return (
    <>
      <tr>
        <td>
          <table
            width="100%"
            cellSpacing="0"
            cellPadding="0"
            style={{ paddingTop: "15px" }}
          >
            <tbody>
              <tr>
                <td bgcolor="#ff6600" style={{ height: "2px" }}></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr className="footer-item">
        <td>Apply early for the YC Winter 2022 batch</td>
      </tr>
      <tr className="footer-item">
        <td>Guidlines | FAQ | API | Security | Legal</td>
      </tr>
    </>
  );
}
