import React from 'react'
import "./testimony.scss"
export default function Testimony() {

 const data =[
        {
            id:11,
            title:'inno4.3',
            img:"img/thumb-11.jpg",
            price:11020,
            name:"Ceo of ",
            info:"this product is still on a testing mood soon you we get the full benefit ",
            inCart:false,
            count:0,
            feature:23
        },
        
        {
            id:13,
            title:'trump 2020',
            img:"img/img-04.jpg",
            price:12010,
            name:"paul le",
            info:"this product is still on a testing mood soon you we get the full benefit ",
            inCart:false,
            count:0,
            feature:9
        },
        {
            id:14,
            title:'infinite',
            img:"img/img-05.jpg",
            price:21210,
            name:"google",
            info:"this product is still on a testing mood soon you we get the full benefit ",
            inCart:false,
            count:0,
            feature:4
        },
    
    ]
    return (
        <div className="test" id="testimony">
            <h1>Testimony</h1>
            <div className="container">
                {data.map((p)=>(

               
                <div className={p.feature ? "card feature" : "card"}>
                    <div className="top">
                       <img src={p.img} className="left" alt=""/>
                       <img src={p.img}  className="user" alt="" />
                       <img src={p.img} className="right" alt="" />
                    </div>
                    <div className="center">
                    {p.info}
                    </div>
                    <div className="bottom">
                        <h3>{p.name}</h3>
                        <h4>{p.title}</h4>
                    </div>
                </div>
                 ))}
            </div>

        </div>
    )
}
