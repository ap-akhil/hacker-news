import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <tr className="header-main">
      <td>
        <table
          className="header-content"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td>
                <Link to="/">
                  <img
                    className="header-logo"
                    src="logo.gif"
                    alt="logo"
                    width="18"
                    height="18"
                  />
                </Link>
              </td>
              <td>
                <Link to="/">
                  <b>Hacker News</b>
                </Link>
              </td>
              <td>
                <Link to="/newest">
                  <span
                    className={location.pathname === "/newest" ? "active" : ""}
                  >
                    new
                  </span>
                </Link>
                <span> |</span>
              </td>
              <td>
                <Link to="/best">
                  <span
                    className={location.pathname === "/best" ? "active" : ""}
                  >
                    best
                  </span>
                </Link>
                <span> |</span>
              </td>
              <td>
                <Link to="/ask">
                  <span
                    className={location.pathname === "/ask" ? "active" : ""}
                  >
                    ask
                  </span>
                </Link>
                <span> |</span>
              </td>
              <td>
                <Link to="/show">
                  <span
                    className={location.pathname === "/show" ? "active" : ""}
                  >
                    show
                  </span>
                </Link>
                <span> |</span>
              </td>
              <td>
                <Link to="/jobs">
                  <span
                    className={location.pathname === "/jobs" ? "active" : ""}
                  >
                    jobs
                  </span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
