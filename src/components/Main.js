import React from 'react';
import stephen from "./DSC_3794x.jpg";
import verify from "./images.png";
import './Main.css';
function Main() {
  let name = "TAIWO Stephen Opeyemi";
  if (name.length > 15) {
    name = name.slice(0, 13) + "...";
  }
  return (
    <div className="main">
      <div>
        <h1>Home</h1>
      </div>
      <div className="main-link">
        <div>
          <img src={stephen} alt="stephen" className="images" />
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
          <img src={stephen} alt="stephen" className="images" />
        </div>
        <div>
          <div className="main-name">
            <div>{name}</div>
            <div>
              <img src={verify} alt="stephen" className="verify" />
            </div>
            <div>@taiwo_op1</div>
            <div className="pass">
              <p>...</p>
            </div>
          </div>

          <div className="main-detail">
            <div>
              <p></p>
            </div>
            <div className="detail">
              <img src={stephen} alt="stephen" />
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