import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ImageComponent from "../../components/ImageComponent";
import { JOBIMG } from "../../assets";
function JobComponent() {
  return (
    <div className="job-main container-box">
      <div className="job-top">
        <div className="job-content">
          <p>Latest Jobs</p>
          <span>More Job Posts ?</span>
          <ButtonComponent text="VIWE ALL" className="job-btn-viwe" />
        </div>
        <div>
          <ButtonComponent text="POST A JOB" className="job-btn-post" />
        </div>
      </div>
      <div className="job-arrows-main">
        <div className="job-arrow">
          <IoIosArrowForward size={30} />
        </div>
        <div className="job-arrow job-arrow-down">
          <IoIosArrowBack size={30} />
        </div>
      </div>
      <div className="job-sub-cards">
        <ImageComponent src={JOBIMG} />
      </div>
    </div>
  );
}

export default JobComponent;
