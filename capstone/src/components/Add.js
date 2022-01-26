import React, { useState } from "react";
import "./AddStyle.css";


export default function Add() {
  const [sub_name, setSubName] = useState("");
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState("");
  const [duedate, setDueDate] = useState("");
  //const [user_id_fk, setUserIdFk] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { sub_name, plan, price, duedate};
      const response = await fetch("http://localhost:5000/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/Add";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      
       <p className="header">Add Subscriptions</p>

      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "20px",
          paddingLeft: "30px",
        }}
      >
        <div className="div-input" />
        <input
          value={sub_name}
          onChange={(e) => setSubName(e.target.value)}
          className="add-input"
          placeholder=" Name of your subscription"
        ></input>
        <div className="div-input" />
        <input
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="add-input"
          placeholder=" Plan period: weekly/monthly/yearly"
        ></input>
        <div className="div-input" />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="add-input"
          placeholder=" Price $ "
        ></input>
        <div className="div-input" />
        <input
          value={duedate}
          onChange={(e) => setDueDate(e.target.value)}
          className="add-input"
          placeholder=" Due Date yyyy-mm-dd"
        ></input>
   
      </div>
      <div />
      <div 
      className="submit-btn"
      style={{ float: "right", paddingTop: "20px" }}>
        <button
          onClick={onSubmitForm}
          className="add-submit-btn"
          style={{ color: "white" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
