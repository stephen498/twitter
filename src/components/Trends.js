import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import stephen from "./DSC_3794x.jpg";
import verify from "./images.png";
import "./Trends.css";
import { useState } from "react";
function Trends({ values, names, name, flow, flag, flee, fly, fig, flip,list }) {
  // console.log(names);
  const handleFollow = () => {
    console.log(list);
    for (let key of list) {
      if (key.name === values) {
        key.friends[key.friends.length] = {
          name: flag,
          img: flow,
          id: key.friends.length,
          socialmedia: {
            twitter: `https://twitter.com/${flee}`,
          },
        };
        console.log(key.friends);

      }
    }
    return <p>following</p>;
  };
  const handleFollows = () => {
    for (let key of list) {
      if (key.name === values) {
        key.friends[key.friends.length] = {
          name: fig,
          img: fly,
          id: key.friends.length,
          socialmedia: {
            twitter: `https://twitter.com/${flip}`,
          },
        };
        console.log(key.friends);
      }
    }
  };
  return (
    <div className="Trends">
      <div className="trend">
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
              <img src={flow} alt={flag} className="images" />
            </div>
            <div className="follow">
              <div className="img">
                {flag}
                <img src={verify} alt="twitter" className="verify" />
              </div>
              <div>@{flee}</div>
            </div>
          </a>
          <div>
            <button className="trend-button" onClick={handleFollow}>
              Follow
            </button>
          </div>
        </div>
        <div className="nav-link1">
          <a href="" className="profile-name">
            <div>
              <img src={fly} alt={fig} className="images" />
            </div>
            <div className="follow">
              <div className="img">
                {fig}
                <img src={verify} alt="twitter" className="verify" />
              </div>
              <div>@{flip}</div>
            </div>
          </a>
          <div>
            <button className="trend-button" onClick={handleFollows}>
              Follow
            </button>
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
        <div>2022 Twitter, Inc.</div>
      </div>
      <div>
        <h1>Messages</h1>
      </div>
    </div>
  );
}

export default Trends;
