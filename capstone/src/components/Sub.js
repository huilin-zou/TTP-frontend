import React, { Fragment, useEffect, useState } from "react";
import "./Sub.css";
const Sub = () => {
  const [subscription, setSubscription] = useState([]);

  const deleteSub = async (sub_id) => {
    try {
        
        const deleteSubscription = await fetch(`http://localhost:5000/subscription/${sub_id}`, {
            method: "DELETE",
        });
        
        setSubscription(subscription.filter((subscription_details) => subscription_details.sub_id!== sub_id));
    } catch (err) {
        console.error(err.message);
    }
};

  const getSubs = async () => {
    try {
      const response = await fetch("http://localhost:5000/subscription");
      const jsonData = await response.json();
      setSubscription(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getSubs();
  }, []);
  return (
    <Fragment>
      <p className="header">Your Subscriptions</p>

      <div>
        {subscription.map((subscription_details) => {
          return (
            <div style={{paddingTop:"100px"}} key={subscription_details.sub_id}>
              <p>{subscription_details.sub_name}</p>
              <p>{subscription_details.plan}</p>
              <p>Price: ${subscription_details.price}</p>
              <p>Due date: {subscription_details.duedate}</p>
              
               
                <button
                  style={{ position: "absolute", right: "300px" ,height:"43px",textAlign:"center"}}
                  className="btn btn-lg float-right"
                  onClick={() => deleteSub(subscription_details.sub_id)}
                >
                  Delete
                </button>
              
         <button className="btn">Edit</button>

              <hr></hr>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Sub;
