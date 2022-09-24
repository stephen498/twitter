import React,{ Component } from "react";
import "./Nav.css";
// import {FaHouseWindow} from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";

import { FaHashtag } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import twitter from "./twitter.png";
import stephen from "./DSC_3794x.jpg";
import { BiEnvelope } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { BsBookmarks } from "react-icons/bs";
import { CgList } from "react-icons/cg";

import { BsPerson } from "react-icons/bs";
import { CgMoreO} from "react-icons/cg";
import Signup from "./Signup";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
function Nav({values,names,name}) {
  // let a='';
  //   for (let key of names) {
  //     if (key.name === `${values.firstName} ${values.lastName}`) {
  //       // setState((state)=>state+1);
  //       a +=key.img;
  //       console.log(a);
  //       alert(a)
  //     }
  //   }  
  return (

    <div className="Nav">
      <div className="nav-links">
        <img src={twitter} alt="twitter" className="image" />
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <IoMdHome />
          </div>
          <div>Home</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="/explore" className="ico">
          <div>
            <FaHashtag />
          </div>
          <div>Explore</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <HiOutlineBell />
          </div>
          <div>Notifications</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <BiEnvelope />
          </div>
          <div>Messages</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <BsBookmarks />
          </div>
          <div>Bookmarks</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <CgList />
          </div>
          <div>List</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <BsPerson />
          </div>
          <div>Profile</div>
        </a>
      </div>
      <div className="nav-link">
        <a href="" className="ico">
          <div>
            <CgMoreO />
          </div>
          <div>More</div>
        </a>
      </div>
      <div className="nav-link">
        <button>Tweet</button>
      </div>
      <div className="nav-link">
        <a href="" className="profile-name">
          <div>
            <img src={names} alt={values} className="images" />
          </div>
          <div>
            {values}
            <br />
            @{name}
          </div>
          <div>...</div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
