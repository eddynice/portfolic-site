import React from 'react';
import  {useEffect,useRef}  from "react"
import "./intro.scss";

import  { init } from "ityped";

export default function Intro() {
const textRef = useRef();


useEffect(()=> {
   console.log(textRef)
   init(textRef.current,{
      showCursor:true,
      backDelay:1500,
      backSpeed:60,
      strings:["Developer", "Designer", "Content Creator"],

   })

   },[])
    

    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assest/oo.jpg" alt="hand"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi there , i'm</h2>
                    <h1>Osas </h1> 
                    <h3>freelance <span ref={textRef}>
                    
                        </span></h3>
                </div>
                <a href="portfoli">
                    <img src="assest/UEFA_Europa_League_Logo.png" alt="han"/>
                </a>
            </div>
        </div>
    )
}
