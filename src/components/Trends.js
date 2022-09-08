import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import stephen from "./DSC_3794x.jpg";
import verify from "./images.png";
import "./Trends.css";
import {useState} from 'react';
function Trends({values,names,name}) {
  
  return (
    <div className="Trends">
      <div className='trend'>
        <FaSearch />
        <textarea type="search" placeholder="Search Twitter" />
      </div>
      <div>
        <h1>Trends for you</h1>
      </div>
      <div>
        <h1>Who to follow</h1>
        <div className="nav-link1">
          <a href="" className="profile-name">
            <div>
              <img src={names} alt={values} className="images" />
            </div>
            <div className="follow">
              <div className="img">
                {values}
                <img src={verify} alt='twitter' className="verify" />
              </div>
              <div>@{name}</div>
            </div>
          </a>
          <div>
            <button className="trend-button">Follow</button>
          </div>
        </div>
        <div className="nav-link1">
          <a href="" className="profile-name">
            <div>
              <img src={names} alt={values} className="images" />
            </div>
            <div className="follow">
              <div className="img">
                {values}
                <img src={verify} alt="twitter" className="verify" />
              </div>
              <div>@{name}</div>
            </div>
          </a>
          <div>
            <button className="trend-button">Follow</button>
          </div>
        </div>
        <div>
          <p>Show more</p>
        </div>
      </div>
      <div className="link">
        <div>
          <a href="">Terms of Services</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
          <a href="">Accessibility</a>
          <a href="">Ads Info</a>
          <a href="">More ...</a>
        </div>
        <div>
        2022 Twitter, Inc.
        </div>
      </div>
      <div>
        <h1>Messages</h1>
      </div>
    </div>
  );
}

export default Trends;