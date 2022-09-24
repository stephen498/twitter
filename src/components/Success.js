import React from "react";
import "./Success.css";
import Nav from "./Nav";
import Main from "./Main";
import Trends from "./Trends";
import Confirmation from './Confirmation';
import{Routes,Route} from "react-router-dom"
function Explore(){
  return (
    <div>
      correct
    </div>
  )
}
function Suc({values,names}){
  let a = ""; let b=""; let k='';
    for (let key of names) {
      if (key.name === `${values.firstName} ${values.lastName}`) {
        // setState((state)=>state+1);
        a += key.img;
        k+=key.id;
        for(let cap of key.friends){
          var d=Math.round((names.length-1)*Math.random());var c;var e;
          var f;
          while(cap.id===d || k===d){
            d=Math.round((names.length-1)*Math.random());

          }
            c = names[d].img;
            e = names[d].name;
            f = names[d].socialmedia.twitter.slice(20);
          var g = 2 * Math.round((names.length / 2) * Math.random());
          var h;
          var i;
          var j;
          while (cap.id===g || k===g) {
            g = Math.round((names.length - 1) * Math.random());

          }
            h = names[g].img;
            i = names[g].name;
            j = names[g].socialmedia.twitter.slice(20);
        }
      
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
        flow={c}
        flag={e}
        flee={f}
        fly={h}
        fig={i}
        flip={j}
        list={names}
      />
    </div>
  );
}
function Success({values,names}) {
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Suc values={values} names={names} />} />
        <Route
          path="/explore"
          element={
            <Explore/>
          }
        />
      </Routes>
    </div>
  );
};
export default Success;
