import React, { useEffect } from "react";
import ImageSlider from "./slider";
import $ from "jquery";

export const Main = () => {
  useEffect(() => {
    console.log($("form").length);

    $("form").on("submit", (e) => {
      e.preventDefault();

      const fullName = $("#fullName").val().trim();
      const phone = $("#phone").val().trim();
      const email = $("#email").val().trim();
      const zipcode = $("#zipcode").val().trim();

      const data = {
        fullName,
        email,
        phone,
        zipcode,
      };
      $.post("https://ellas-bubbles.herokuapp.com/send", data, function () {
        console.log("Server received our data!!!");
        if (fullName === "" || phone === "" || email === "" || zipcode === "") {
          alert("Please, fill all inputs!");
          return false;
        }
        $("#fullName").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#zipcode").val("");
        alert("Thank you! Your request has been sent!");
      });
    });
  }, []);

  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <img className="img-fluid" src="../../images/logo.png" alt="logo" />
        </div>
        <div className="phone">
          <a href="tel:18004806850" target="_blank" rel="noopener noreferrer">
            <img src="../../images/phone.png" alt="phone" />
            (800) 480-6850
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 left">
            <div className="brand">
              <h1>
                Ella Brand <br />
                <mark>Walk-in</mark> Bathtubs
              </h1>
            </div>
            <div className="text">
              <h2 className="text2">Financing</h2>
              <h3 className="text3">As low as $99.00 per/month</h3>
              <h3 className="text3">with approved credit</h3>
            </div>
            <div className="images">
              <ImageSlider />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 my-3">
            <div className="content">
              <div className="form-text">
                <h2>Regain Confidence</h2>
                <h2>Stay In Your Home Longer</h2>
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
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
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
                <button type="submit" value="submit" className="btn">
                  Request More Information
                </button>
                <h5>100% PRIVACY GUARANTEED</h5>
                <h6>WE DO NOT SELL OR RENT YOUR PERSONAL INFORMATION</h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
