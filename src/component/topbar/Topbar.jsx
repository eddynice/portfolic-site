import React from 'react'
import "./topbar.scss"
import {Person} from "@material-ui/icons"
import {Mail} from "@material-ui/icons"

export default function Topbar({menuopen, setmenuopen}) {
    return (
        <div className={"topbar " + (menuopen  && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
<Person className="icon"/>
<span>08062627262</span>
                    </div>
                    <div className="itemContainer">
<Mail className="icon"/>
<span>osazee@gmail.com</span>
                    </div>
                </div>
               
                <div className="right">
                    <div className="hang" onClick={()=>setmenuopen(!menuopen)}>
                        <span className="line"></span>
                        <span className="line2"></span>
                        
                        <span className="line3"></span>


                    </div>
                </div>
            </div>
            
        </div>
    )
}
