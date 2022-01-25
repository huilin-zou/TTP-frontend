import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "70%" }}
        >
          <div style={{ paddingLeft: "40px", paddingBottom: "20px" }}>
            <label style={{ paddingRight: "10px" }}>Username</label>
            <input
              style={{ width: "70%", paddingLeft: "10px", height: "50px" }}
              type="text"
            />
          </div>

          <div style={{ paddingBottom: "20px" }}>
            <label style={{ paddingRight: "10px", paddingLeft: "10px" }}>
              Email Address
            </label>
            <input style={{ width: "68%", height: "50px" }} type="text" />
          </div>
          <div style={{ paddingLeft: "32px" }}>
            <label
              style={{
                paddingRight: "10px",
                paddingLeft: "10px",
                height: "50px",
              }}
            >
              Password
            </label>
            <input style={{ width: "70%", height: "50px" }} type="text" />
          </div>

          <div style={{ paddingTop: "40px" }}>
            {" "}
            <button
              style={{
                backgroundColor: "#228B22",
                borderRadius: "10px",
                color: "#FFFAFA",
                fontFamily: "Lexend Exa",
              }}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Register
            </button>
          </div>
          <p className="forgot-password text-right"></p>
        </form>
      </div>
    );
  }
}
