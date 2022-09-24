import React from 'react';
import './App.css';
import Signup from './components/Signup';
import{Routes,Route} from "react-router-dom"
function Explore(){
  return (
    <div>
      correct
    </div>
  )
}
function Apps(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/explore" element={<Explore/>}/>
            </Routes>
        </div>
    );
}
export default Apps;