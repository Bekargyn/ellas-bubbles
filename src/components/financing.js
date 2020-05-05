import React from "react";
import { useHistory } from "react-router-dom";

export const Finance = () => {
  return (
    <div className="finance">
      <header>
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
      </header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="price">
              AS LOW AS <br /> $99 mo
            </div>
            <div className="images">
              <img
                className="img-fluid"
                src="../../images/bath.png"
                alt="bath"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="content">
              <div className="form-text">GET A FREE QUOTE</div>
              <form action="">
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  name="usersPhone"
                  placeholder="Phone"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="E-mail"
                />
                <br />
                <input
                  className="input"
                  type="text"
                  name="zipcode"
                  placeholder="Your Zip"
                />
                <br />
                <button className="btn">GET QUOTE</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <h2>HOW MUCH DOES A WALK-IN TUB COST?</h2>
          <h3>
            Now you can own an Ella's Brand Walk-in Bathtub for as little as $99
            per/month
          </h3>
          <h3>
            Get your no-obligation quote and let our specialists help you choose
            the tub that is right for you
          </h3>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="img-col1">
              <img
                className="img-fluid"
                src="../../images/col1.png"
                alt="bath"
              />
            </div>
            <div className="nameTag">
              ELLA INWARD SWING STAINLESS STEEL DOOR WALK IN TUB
            </div>
            <div className="description">
              <p>
                If your bathroom less then spacious, a stainless steel and
                tempered glass inward swing doorwalk-in bathtub can fit right
                in. The doors opens toward inside of the bathtub, which prevent
                you from knoking and bumping existing bathroomfixtures. Our
                unique design with tempured glassand stainless adds a
                sophisticated touch to any design.
              </p>
            </div>
            <div className="btn">
              <button>VIEW DETAILS</button>
            </div>
          </div>
          <div className="col-4">
            <div className="img-col1">
              <img
                className="img-fluid"
                src="../../images/col2.png"
                alt="bath"
              />
            </div>
            <div className="nameTag">ELLA OUTWARD SWING DOOR WALK IN TUB</div>
            <div className="description">
              <p>
                For bathers who require maximum accessibility, an outward swing
                door walk-in bathtun is the perfect choise. With option like
                wheelchair-accessible transfer bathtubs or a standart demension
                walk-in bathtub, we offer a variety of modelsto suit your space.
                these walk-in bathtubs can easily accomodate larger individuals
                or bathrooms.
              </p>
            </div>
            <div className="btn">
              <button>VIEW DETAILS</button>
            </div>
          </div>
          <div className="col-4">
            <div className="img-col1">
              <img
                className="img-fluid"
                src="../../images/col3.png"
                alt="bath"
              />
            </div>
            <div className="nameTag">ELLA TWO SEAT WALK IN TUBS</div>
            <div className="description">
              <p>
                Our two seat walk-ih bathtubs provide unique bathing experience
                for couples. With two outward-swing door bathtub sizes to choose
                from, you'll be able to share a massaging, spa-like bath with
                your loved one from the comfortof your own home.
              </p>
            </div>
            <div className="btn">
              <button>VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
