import React,{useEffect, useState} from 'react'
import  "./portfoli.scss"
import {
    featuredPortfoli,
    webPortfoli,
    mobilePortfoli
} from "../../data";


import PortfoliList from './PortfoliList'

export default function Portfoli() {
    const [selected, setSelected]= useState('featured')
    const [data, setData]= useState([])
    const list=[
        {
             id : "featured",
             title:"Featured"
        },
        {
            id : "web",
            title:"Web App"
       },
       {
        id : "mobile",
        title:"MObile App"
       },
    ];
    useEffect(()=>{
        switch (selected) {
            case "featured":
                setData(featuredPortfoli);
                break;
            case "web":
                setData(webPortfoli)
                break;
            case "mobile":
                setData(mobilePortfoli)
                break;    
            default:
                break;
        }
    },[selected])
    
    return (
        <div className="port" id="portfoli">

            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfoliList title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id} />
                ))}
            </ul>

            <div className="container">
                {data.map((d)=>(
                     <div className="item">
                     <img src={d.img} alt="h"/>
                     <h3>{d.title}</h3>
                 </div>

                ))}
               
            </div>
            
        </div>
    )
}
