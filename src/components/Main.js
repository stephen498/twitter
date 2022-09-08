import React,{Component} from 'react';
import stephen from "./DSC_3794x.jpg";
import verify from "./images.png";
import './Main.css';
import Signup from "./Signup";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
function Main ({values,names,name}) {

  return (
    <div className="main">
      <div>
        <h1>Home</h1>
      </div>
      <div className="main-link">
        <div>
          <img src={names} alt={values} className="images" />
        </div>
        <div className="input">
          <div>
            <textarea type="text" placeholder="What is happening?" />
          </div>

          <div className="gif">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="but">
              <button className="main-button">Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-data">
        <div>
          <img src={names} alt={values} className="images" />
        </div>
        <div>
          <div className="main-name">
            <div>{values}</div>
            <div>
              <img src={verify} alt="twitter" className="verify" />
            </div>
            <div>@{name}</div>
            <div className="pass">
              <p>...</p>
            </div>
          </div>

          <div className="main-detail">
            <div>
              <p></p>
            </div>
            <div className="detail">
              <img src={names} alt={values} />
            </div>
            <div className='likes'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;