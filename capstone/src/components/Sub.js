import React, { Fragment} from "react";
import './Sub.css'


const Sub = () =>{
    return(
        <Fragment>
            <h4>Welcome, Jane</h4>
            <h1>
                Your Subscriptions
            </h1>
            
            <h2>Spotify</h2><img src="spotify.png" className="spotify"></img>
            <p>Monthly</p>
            <h6>$3.99</h6>
            <h6>Due by: 1/1/2022</h6>
            <button type="button" className="btn btn-danger btn-lg float-right">Delete</button>
            <button type="button" className="btn btn-info btn-lg float-right">Edit</button>
            <h2>Amazon Prime</h2><img src="Amazon_icon.png" className="amazon"></img>
            <p>Yearly</p>
            <h6>$100.00</h6>
            <h6>Due by: 1/1/2022</h6>
            <button type="button" className="btn btn-danger btn-lg float-right">Delete</button>
            <button type="button" className="btn btn-info btn-lg float-right">Edit</button>
            <h2>Grammarly</h2><img src="grammarly.png" className="grammar"></img>
            <p>Monthly</p>
            <h6>$9.99</h6>
            <h6>Due by: 1/1/2022</h6>
            <button type="button" className="btn btn-danger btn-lg float-right">Delete</button>
            <button type="button" className="btn btn-info btn-lg float-right">Edit</button>
            <h2>HBO Max</h2><img src="hbos.png" className="hbo"></img>
            <p>Monthly</p>
            <h6>$4.99</h6>
            <h6>Due by: 1/1/2022</h6>
            <button type="button" className="btn btn-danger btn-lg float-right">Delete</button>
            <button type="button" className="btn btn-info btn-lg float-right">Edit</button>
            
        </Fragment>
    )
}

export default Sub;