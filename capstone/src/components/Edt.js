import React, { Fragment, useEffect, useState } from "react";
​
​
const EditSubscription = ({ subscription_details }) => {
    const [sub_id, setSubscription] = useState(subscription_details.sub_id);
    
    //Edit Item Function
​
    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const body = { sub_id };
            const response = await fetch(`http://localhost:5001/subscription/${subscription_details.sub_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
​
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
​
    return(
        <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target={`#id${subscription_details.sub_id}`}>
        Edit
        </button>
​
        
    )
}