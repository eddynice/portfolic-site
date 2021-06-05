import React,{useState} from 'react'
import "./contact.scss"
 
export default function Contact() {
   
    const [message, setmessage] = useState(false)
    const handlesubmit=(e)=>{
        e.preventDefault()
        setmessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assest/loc.jpg" alt=""/>

            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                   
                  <button type="submit"> Send</button>
                {message && <span>Thanks, i ll reply later </span>}
                 </form>
            </div>
        </div>
    )
}
