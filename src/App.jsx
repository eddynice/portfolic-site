import React,{useState} from 'react';

import Topbar from './component/topbar/Topbar'
import Intro from "./component/intro/Intro"
import Portfoli from './component/portfoli/Portfoli'
import  Work from "./component/work/Work"
import Testimony from './component/testimony/Testimony'
import Contact from './component/contact/Contact';
import "./app.scss"
import Menu from './component/menu/Menu';
export default function App() {
    const [ menuopen,setmenuopen]= useState(false)
    
    return (
        <div className="app">
        
        <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
        <Menu menuopen={menuopen} setmenuopen={setmenuopen} />
        <div className="section">
  
            <Intro/>
            <Portfoli/>
            <Work/>
            <Testimony/>
            <Contact/>

        </div>
        </div>
    )
}
