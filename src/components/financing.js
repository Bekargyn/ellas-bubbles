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
      <div className="container"></div>
    </div>
  );
};
