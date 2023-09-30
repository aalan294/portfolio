 import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Experience.css'

const Experience = () => {
  return (
    <div className="cover">
    <Link to="/"><svg style={{position: "absolute",top:0,right:0}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg></Link>
    <h1 className='sh'>Experience & Education</h1>
    <div className="sk">
    <div className="Experience">
       <ul>
        <li>
            <p>2019-2020</p>
           <h2>Matriculation-<span>Sri Ambal Vidhyalaya[CBSE]</span></h2>
            <h3>I completed my Matriculation on 2020 with 80%</h3>
        </li>
        <li>
            <p>2021-2022</p>
           <h2>Higher Secondary-<span>Sri Ambal Vidhyalaya[CBSE]</span></h2>
            <h3>I completed my Matriculation on 2020 with 88.8%</h3>
        </li>
        <li>
            <p>2022</p>
           <h2>Bachelor Degree-<span>SRM University</span></h2>
            <h3>Iam currently pursuing a Bachelor degree in Computer Science and Engineering and my first year GPA is 9.68</h3>
        </li>
        <li>
            <p>2023</p>
           <h2>Web Development-<span>Bharath Intern</span></h2>
            <h3>I have done an internship at Bharath intern for a month</h3>
        </li>
        <li>
            <p>2023</p>
           <h2>MERN Stack-<span>Open Bootcamp</span></h2>
            <h3>Iam currrently working as a MERN stack intern in Open Bootcamp Organization</h3>
        </li>
       </ul>
    </div>
    </div>
    </div>
  )
}

export default Experience