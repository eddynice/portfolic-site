import React from 'react'
import "./menu.scss"
 
export default function Menu({menuopen, setmenuopen}) {
    return (
        <div className={"menu " + (menuopen && "active")}>
          <ul>
            <li onClick={()=>setmenuopen(false)}><a href="#intro"> Home</a></li>
            <li onClick={()=>setmenuopen(false)} ><a href="#portfoli"> Portfoli</a></li>
            <li onClick={()=>setmenuopen(false)} ><a href="#work">Work</a></li>
            <li onClick={()=>setmenuopen(false)}><a href="#testimony">Testimony</a></li>
            <li onClick={()=>setmenuopen(false)}><a href="#contact">Contact</a></li>
            </ul>

        </div>
    )
}
