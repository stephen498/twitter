import React from "react";
import "./Success.css";
import Nav from "./Nav";
import Main from "./Main";
import Trends from "./Trends";

function Success({values,names}) {
    let a = ""; let b=""; 
    for (let key of names) {
      if (key.name === `${values.firstName} ${values.lastName}`) {
        // setState((state)=>state+1);
        a += key.img;
        for(let keys in key.socialmedia){
          console.log(keys);
          if (keys === "twitter") {
            b += key.socialmedia.twitter.slice(20);
          }
        }
      }
    }  
  return (
    <div className="App">
      <Nav
        values={`${values.firstName} ${values.lastName}`}
        names={a}
        name={b}
      />
      <Main
        values={`${values.firstName} ${values.lastName}`}
        names={a}
        name={b}
      />
      <Trends
        values={`${values.firstName} ${values.lastName}`}
        names={a}
        name={b}
      />
    </div>
  );
};
export default Success;
