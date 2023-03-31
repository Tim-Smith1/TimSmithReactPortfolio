
import React from 'react';
import mypic from '../../img/TimSmith.png';
import canjam from '../../img/CANJAM.png';
function About() {
    return (
        <>
            <h1>About</h1>
            <img style={{ width: 250, height: 250, }} src={mypic} alt="mypic" />
            <img style={{ width: 250, height: 250, }} src={canjam} alt="mypic" />
            <div className='AboutP'>
            <p> 
                Hello you have reached the protfolio page of Tim Smith. Thank you for stopping in.
                Its not always easy talking about yourself so lets go ahead and start with things that I like.
            </p>
            <p>
                All things audio and video as you can see in the above photo of me attending CanJam Chicago, a headphone enthusiast trade show, trying on some ridiculously expensive headphones from RAAL Requisite. Music movies you name it.
            </p>
            <p>
               Currently I am studying at Northwestern Coding Bootcamp.
               We started learning HTML, CSS and JavaScript. Now we are working on our MERN fullstack projects. After I complete more I will be posting them on my projects page so stay tuned.   
            </p>
            </div>
        </>
    )
};

export default About;