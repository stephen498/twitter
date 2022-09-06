import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import stephen from "./DSC_3794x.jpg";
import verify from "./images.png";
import "./Trends.css";
import {useState} from 'react';
function Trends() {
  let name = "TAIWO Stephen Opeyemi";
  if (name.length > 15) {
    name = name.slice(0, 13) + "...";
  };
  return (
    <div className="Trends">
      <div>
        <FaSearch />
        <input type="search" placeholder="Search Twitter" />
      </div>
      <div>
        <h1>Trends for you</h1>
      </div>
      <div>
        <h1>Who to follow</h1>
        <div className="nav-link">
          <a href="" className="profile-name">
            <div>
              <img src={stephen} alt="stephen" className="images" />
            </div>
            <div>
              {name}
              <img src={verify} alt="stephen" className="verify" />
              <br />
              @taiwo_op1
            </div>
            <div>
              <button className='trend-button'>Follow</button>
            </div>
          </a>
        </div>
        <div className="nav-link">
          <a href="" className="profile-name">
            <div>
              <img src={stephen} alt="stephen" className="images" />
            </div>
            <div>
              {name}
              <img src={verify} alt="stephen" className="verify" />
              <br />
              @taiwo_op1
            </div>
            <div>
              <button>Follow</button>
            </div>
          </a>
        </div>
        <div>
          <p>Show more</p>
        </div>
      </div>
      <div className='link'>
        <a href="">Terms of Services</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Accessibility</a>
        <a href="">Ads Info</a>
        <a href="">More ...</a><br/>
        <p>2022 Twitter, Inc.</p>
      </div>
      <div>
        <h1>Messages</h1>
      </div>
    </div>

  );
}

export default Trends;