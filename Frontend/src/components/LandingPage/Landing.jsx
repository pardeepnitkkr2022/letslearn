import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../Appbar/Appbar";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Image from "./images/image-1.jpg";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Appbar />
      <div className="landingPage">
        <div className="first">
          <div className="heading">
            <div>
              <span>Master New Skills</span>
              <span>Today</span>
            </div>
            <h2>
              Unlock your potential with letslearn's online courses. Learn from
            </h2>
            <h2>industry experts and stay ahead of the competition.</h2>
          </div>
          <button
            id="startbtn"
            onClick={() => {
              navigate("/start");
            }}
          >
            Get Started <TrendingFlatIcon fontSize="large" />
          </button>
        </div>
        <Aboutus />
        <Footer />
      </div>
    </>
  );
};

export const Aboutus = () => {
  return (
    <div className="second" id="aboutUs">
      <div className="leftsecond">
        <img src={Image} alt="" />
      </div>
      <div className="rightsecond">
        <span>About us</span>
        <p>
          At letslearn, we are a leading company in providing online courses.
          Our mission is to provide a platform where individuals can enhance
          their skills and knowledge through a wide range of courses offered by
          industry experts and educators can share their knowledge and earn by
          their teaching skills. Whether you are looking to learn a new skill,
          upgrade your existing knowledge, explore a new field, or you want to
          educate others,letslearn is here to help you achieve your goals. With
          our user-friendly interface, comprehensive course catalog we strive to make learning experience seamless and
          enjoyable for our users.
        </p>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
      
        <div className="rightfooter">
          <div>Contact us</div>
          <span>Email: pardeepnitkkr2022@gmail.com</span>
          <span>Contact: +91 9896865525</span>
        </div>
      </div>
      <div className="credits">Developed By-Pardeep</div>
      <div className="copyright">
          <span>Copyright </span>
          <CopyrightIcon fontSize="large" />
          <span>2024 letslearn | All rights reserved.</span>
      </div>
    </>
  );
};
