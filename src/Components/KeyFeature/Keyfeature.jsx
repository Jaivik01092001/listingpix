import React from "react";
import "./Keyfeature.css";
import keyfeaturebg from "../../Assets/keyfeaturebg.jpg";
import kfmockup from "../../Assets/kfmockup.png";

const Keyfeature = () => {
  return (
    <div className="keyfeaturecontainer">
      <img src={keyfeaturebg} alt="" className="keyfeaturebg" />
      <div className="content-overlay">
        <div className="top">
          <div className="keyfeaturetop">Key features of user</div>
          <div className="keyfeaturebottom flex">
            <div className="keyfeatureleft">
              <div className="kfbltitle">Booked a Photographer</div>
              <div className="kfbldesc">
                Easily integrate with all your favorite tools through and APIs
                including automatic.
              </div>
            </div>
            <div className="keyfeatureright">
              <div className="kfbltitle">
                <span className="searchtitle">Search</span> Photographer
              </div>
              <div className="kfbldesc">
                Easily integrate with all your favorite tools through and APIs
                including.
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img className="kfmockup" src={kfmockup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Keyfeature;