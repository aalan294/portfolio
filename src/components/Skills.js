import React from 'react'
import '../css/Skills.css'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div className="cover">
    <Link to="/"><svg style={{position: "absolute",top:0,right:0}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg></Link>
    <h1 className='sh'>My Skills</h1>
    <div className="sk">
    <div className="Skills">
        <div class="progress-bar bar1">
            <progress value="90" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>90%</progress>
        </div>
        <div class="progress-bar bar2">
            <progress value="75" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>75%</progress>
        </div>
        <div class="progress-bar bar3">
            <progress value="80" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>80%</progress>
        </div>
        <div class="progress-bar bar4">
            <progress value="80" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>80%</progress>
        </div>
        <div class="progress-bar bar5">
            <progress value="85" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>85%</progress>
        </div>
        <div class="progress-bar bar6">
            <progress value="80" min="0" max="100" style={{visibility:"hidden",height:0,width:0}}>80%</progress>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Skills