import React from 'react';
import "./PortFo.scss";

export default function PortfoliList({ id,title,active,setSelected}) {
    return (
        <div className={active ? "portfoliList active": "portfoliList"}
        onClick={()=>setSelected(id)}
        > 
        {title}
            
        </div>
    )
}
