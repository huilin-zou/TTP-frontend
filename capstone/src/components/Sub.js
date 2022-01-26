import React, { Fragment, useEffect, useState } from "react";

const Sub = () =>{

    const [subscription, setSubscription] = useState([]);

    const deleteSub = async (id) => {
        try {
            console.log(id);
            const deleteSubscription = await fetch(`http://localhost:5000/subscription/${id}`, {
                method: "DELETE"
            });
            
            setSubscription(subscription.filter(subscription_details => subscription_details.sub_id!== id));
        } catch (err) {
            console.error(err.message);
        }
    };
    
    
    const getSubs = async() =>{
       
            try {
                const response = await fetch("http://localhost:5000/subscription");
                const jsonData=await response.json();
                setSubscription(jsonData)
               
            } catch (err) {
                console.log(err.message);
            }
        
    }
    useEffect(()=>{
        getSubs();
    },[])
    return(
        
        <Fragment>
            
            <h1>
                Your Subscriptions
            </h1>
  

            <div >
            {subscription.map(subscription_details => {

            return(
                <div key={subscription_details.sub_id}>
                    <p>{subscription_details.sub_name}</p>
                    <p>{subscription_details.plan}</p>
                    <p>Price: {subscription_details.price}</p>
                    <p>Due date: {subscription_details.duedate}</p>
                    <button className="btn btn-danger btn-lg float-right" onClick={() => deleteSub(subscription_details.sub_id)}>Delete</button>
                   
                </div>
                )
                 

                })}
            
               
                </div>
            
        </Fragment>
    )
}

export default Sub;