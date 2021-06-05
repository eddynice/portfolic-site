import React,{useState} from 'react'
 import "./work.scss"
// import Typography from "@material-ui/core/Typography"
// import Paper from '@material-ui/core/Paper';


export default function Work() {

    const [currentSlide, setcurrentSlide] = useState(0)

    const datar=[
        {
            id:1,
            title:'clond-one',
            img:"img/thumb-08.jpg",
            icon:"img/thumb-08.jpg",
           desc:"this product is still on a tes ",
           
        },
        {
            id:2,
            title:'tru xxl',
            img:"img/thumb-09.jpg",
            icon:"img/thumb-09.jpg",
          
            desc:"tna we dey run ama testing mood soon you we get the full benefit ",
          
        },
        {
            id:3,
            title:'block two',
            img:"img/thumb-10.jpg",
            ion:"img/thumb-10.jpg",
           
            desc:"this product is still on a testing mood soon you we get the full benefit ",
        },
    ];
    const handleclick=(way)=>{
        way ==="left" ? setcurrentSlide(currentSlide > 0 ? currentSlide-1: 2) :
        setcurrentSlide(currentSlide<datar.length -1 ? currentSlide + 1 :0)
    }
    return (
        <div className="work" id="work"> 
        <div className="slider" style={{transform:`translate(-${currentSlide * 100}vw)`}}>
          {datar.map((d)=>(

         
            <div className="container">
                <div className="item">
                    <div className="left"> 
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="chech"/>
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc} </p>
                                   <span>Project</span>
                        </div>
                    </div>
                    <div className="right">
                    <img src={d.img} alt="chech"/>
                    </div>
                </div>

            </div>
             ))}
        </div>
        <img src="assest/la_liga.png" className="arrow left" alt="check" onClick={()=>handleclick('left')}/>
        <img src="assest/la_liga.png" className="arrow right" alt="check" onClick={()=>handleclick()}/>
        </div>
    )
}
