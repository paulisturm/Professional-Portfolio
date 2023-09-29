import React from 'react';
import resume from '../assets/Resume (2).pdf'

function Resume () {
    return (
        <body className="resumeBody">
        <h1>Resume</h1><p className='resume' src=""> 
        <button className="button">
    <a className="button" href={ resume } download = "ResumeOfficial.pdf">
      Download Resume
    </a>
</button> 
</p></body>    
    )

}

export default Resume;