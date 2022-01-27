import React, { useState } from "react";
import "./SearchStyle.css";
import SearchField from "react-search-field";

export default function Search() {
  const [subName, setSubName] = useState("");
  const [result, setResult] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    //console.log("sub name",sub_name)
    try {
      const response = await fetch(
        `http://localhost:5000/subscription/${subName}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setResult(jsonData);
        alert("The item you searched is already listed. Try another term.");
      } else {alert("Result not found, would you like to add it to your list?")
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const notFoundAddToList = async () => {};

  return (
    <div>
      <p className="search-header">Search Subscriptions</p>

      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "20px",
          paddingLeft: "30px",
        }}
      >
      
       <input
          value={subName}
          onChange={(e) => setSubName(e.target.value)}
          className="search-input"
          placeholder=" Enter here"
        ></input>
      
      </div>

      <button
        onClick={onSubmitForm}
        className="search-submit-btn"
        style={{ color: "white" }}
      >
        Search
      </button>
    </div>
  );
}
