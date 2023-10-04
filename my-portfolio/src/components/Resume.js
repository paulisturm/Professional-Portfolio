import React from 'react';
import resume from '../assets/Resume (2).pdf'

function Resume () {
    return (
        <div className="resumeBody">
        <div className='resume' src=""> 
        <button className="resumeButton">
    <a className="btn btn-primary btn-lg active" href={ resume } download = "ResumeOfficial.pdf">
      Download Resume
    </a>
</button> 
</div>
</div>    
    )

}

export default Resume;