// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them
import React from 'react';
import mypic from '../../img/TimSmith.png';

function About() {
    return (
        <><h1>About</h1>
        <img style={{ width: 500, height: 500, }} src={mypic} alt="mypic" />
        <p> WHEN I load the portfolio the first time
         THEN the About Me title and section are selected by default
         WHEN I am presented with the About Me section
        THEN I see a recent photo or avatar of the developer and a short bio about them</p></>
    )   
};

export default About;