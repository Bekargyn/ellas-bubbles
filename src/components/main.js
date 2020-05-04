import React from "react";

export const Main = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="col-4">
          <img className="img-fluid" src="../../images/logo.png" alt="logo" />
        </div>
        <div className="col-8">
          <div className="phone">
            <img src="../../images/phone.png" alt="phone" />
            <h4>(800) 480-6850</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="brand">
              <h1>
                Ella Brand <br />
                Walk-in Bathtubs
              </h1>
            </div>
            <div className="text">
              <h2>Financing</h2>
              <h3>As low as $99.00 per/month</h3>
              <h3>with approved credit</h3>
            </div>
            <div className="images">
              <img
                className="img-fluid"
                src="../../images/bath.png"
                alt="bath"
              />
            </div>
            <div className="arrow">
              <img
                className="img-fluid"
                src="../../images/arrow_active.png"
                alt=""
              />
              <img
                className="img-fluid"
                src="../../images/arrow_active2.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="content">
              <div className="form-text">
                <h3>Regain Confidence</h3>
                <h3>Stay In Your Home Longer</h3>
              </div>
              <form action="">
                <input
                  className="input"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  id="usersPhone"
                  name="usersPhone"
                  placeholder="Phone"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Your Zip"
                />
                <br />
                <input
                  className="input"
                  type="button"
                  id="information"
                  name="information"
                  placeholder="Request More Information"
                />
                <h6>100% PRIVACY GUARANTEED</h6>
                <h6>WE DO NOT SELL OR RENT YOUR PERSONAL INFORMATION</h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
