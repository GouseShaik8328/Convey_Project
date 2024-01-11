import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function FooterComponet() {
  return (
    <div className="footer-main">
      <div className="footer-sub-main">
        <div>
          <div className="footer-sub">
            <h6>Quick Links</h6>
          </div>
          <div className="footer-sub-con">
            <ul>
              <li>search jobs</li>
              <li>jobs by category</li>
              <li>jobs by location</li>
              <li>listed companies</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-sub">
            <h6>Employers</h6>
          </div>
          <div className="footer-sub-con">
            <ul>
              <li>pricing plan</li>
              <li>create account</li>
              <li>post A job</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-sub">
            <h6>Job Seekers</h6>
          </div>
          <div className="footer-sub-con">
            <ul>
              <li>pricing plan</li>
              <li>create account</li>
              <li>post A job</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className="footer-lorem">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque lobortis
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque
            lobortis elit.Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>
      <div className="footer-copy">
        <div>
          <p>Copyright © 2020 OPTCPTHUB - All Rights Reserved.</p>
        </div>
        <div className="footer-icons">
          <FaFacebook size={35} />
          <FaSquareXTwitter size={35} />
          <FaInstagramSquare size={38} />
          <FaLinkedin size={38} />
        </div>
      </div>
    </div>
  );
}

export default FooterComponet;
