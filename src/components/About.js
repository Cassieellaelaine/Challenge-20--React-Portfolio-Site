import React, { useState } from 'react';
import portfoliopic from "./Images/100921Cassie_Owens110.jpg"

const About = () => {
    return(
    
        <div id="about" className="contents-items1">
             <img src={portfoliopic} />
        <h2>About Me</h2>
        <p>
            I am a bootcamp graduate of University of Miami coding bootcamp.
            I am an aspiring web developer ready to put my new skills to good use.
            I have several years of IT industry experience; and would like to repurpose my focus on application web development. 
        </p>
    </div>

    )
}

export default About;
