import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import '../css/Contact.css'

const Contact = () => {
    const form = useRef();
    const [name,setName] = useState("")
    const [num,setNum] = useState(null)
    const [mess,setMess] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_hsvxhjh', 'template_maqknvd', form.current, 'fdNEB1c-Ij09l8LoD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName("")
      setMess("")
      setNum("")
  };
  return (
    <div className="cover">
    <Link to="/"><svg style={{position: "absolute",top:0,right:0}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg></Link>
    <h1 className='sh'>Let's Work Together</h1>
    <div className="sk">
    <div className="Contact">
    <form ref={form} onSubmit={sendEmail} className='email' style={{width:"300px"}}>
    <h1 style={{color:"white"}}>COONTACT ME</h1><br /><br />
    <input type="text" value={name} onChange={(e)=>setName(e.targetvalue)} name="user_name" placeholder='Your Name' style={{borderRadius:"5px",border:"3px solid orange"}}/><br />
    <label></label>
    <input type="tel" value={num} onChange={(e)=>setNum(e.targetvalue)} name="user_num" placeholder='Mobile Number' style={{borderRadius:"5px",border:"3px solid orange"}}/><br />
    <label></label>
    <textarea name="message" value={mess} onChange={(e)=>setMess(e.targetvalue)} placeholder='What I need to do for you?' style={{borderRadius:"5px",height:"40px",border:"3px solid orange"}}/><br />
    <input className='ebut' type="submit" value="Send" />
  </form>
    </div>
    </div>
    </div>
    
  )
}

export default Contact