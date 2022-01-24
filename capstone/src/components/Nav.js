import React from "react";
import './NavStyle.css'

export default function Nav() {
  return (
    <div>
      <img
        src="logo.png"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "334px",
          height: "69px",
        }}
      ></img>

      <div className="dropdown"
      style={{
        position: "absolute",
        top: 10,
        right:40

      }}>
        <button
          className="btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="Avatar.png"/>
        </button>
        <ul
         className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Home
            </a>
          </li>

          <li><hr className="dropdown-divider"/></li>

          <li>
            <a className="dropdown-item" href="#">
             My Account
            </a>
          </li>

          <li><hr className="dropdown-divider"/></li>

          <li>
            <a className="dropdown-item" href="#">
              View Subscriptions
            </a>
          </li>
<li><hr className="dropdown-divider"/></li>
          <li>
            <a className="dropdown-item" href="#">
              Search and Add Subscriptions
            </a>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li>
            <a className="dropdown-item" href="#">
              Help
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}
