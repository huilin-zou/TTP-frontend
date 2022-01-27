import React, { Fragment } from "react";
import './HomeStyle.css'
const Home = () => {
  return (
    <Fragment>
       <button
       id="login-btn"
       style={{position:"absolute",
    top:15,right:150}}
        type="button"
        className="btn btn-success btn-lg"
        onClick={(event) => (window.location.href = "/Login")}
      >
        Log in
      </button>

      <p className="header">What we do</p>

      <p className="intro">
        Our website can manage your subscriptions to help you stop paying for
        things you no longer need and stay on top of your bills. People from
        ages 18-99, all age groups of people who have multiple subscriptions to
        services such as Spotify, Netflix, and many others who cannot keep track
        of all of them.
      </p>
      <p className="header">How it works</p>
      <p className="intro">
        Users will sign up for an account with Capstone, which will then allow
        them to input the subscriptions they have. Users will be able to find
        their subcriptions to input them by using a search bar. This will then
        allow a user to select their subscription and they can put it on a list.
      </p>
      <div className="btn-container">
      <button
      style={{justifyItem:"center",alignItem:'center'}}
        type="button"
        className="btn btn-success btn-lg"
        onClick={(event) => (window.location.href = "/Register")}
      >
        Sign up
      </button>
      </div>
    </Fragment>
  );
};

export default Home;