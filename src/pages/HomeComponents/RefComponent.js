import React from "react";
import { APP1IMG, APP2IMG } from "../../assets";
import ImageComponent from "../../components/ImageComponent";

function RefComponent() {
  return (
    <div className="container-box">
      <div className="ref-bg-img">
        <div className="ref-sub ">
          <div className="ref-sub-container">
            <div className="ref-conetent">
              <p>Download the job listing app today !</p>
              <span>
                Your Dream Job Awaits Download our job portal app and start
                Exploring aworld of exciting creer opportunities. Get Instant
                Alerts. Connect With your dream employers, And propel you creer
                to new height. download now!
              </span>
            </div>
            <div className="ref-img">
              <ImageComponent src={APP1IMG} className="ref-app1" />
              <ImageComponent src={APP2IMG} className="ref-app2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefComponent;
