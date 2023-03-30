import React from 'react';
import weather from '../../img/WeatherApp.png';
import pet from '../../img/petfinder.png';
import social from '../../img/socialmediabackend.png';
import textedit from '../../img/textedit.png';

function Project() {
    return (
        <>
            <a href="https://github.com/Tim-Smith1/weatherbylocation">
                <img style={{ width: 640, height: 360, }} src={weather} className="img-fluid" alt="weather app"></img></a>
            <a href="https://github.com/Tim-Smith1/petfinder">
                <img style={{ width: 640, height: 360, }} src={pet} className="img-fluid" alt="Pet Finder"></img></a>
            <a href="https://github.com/Tim-Smith1/NoSqL-Social-Media-API">
                <img style={{ width: 640, height: 360, }} src={social} className="img-fluid" alt="Social Media Backend"></img></a>
            <a href="https://github.com/Tim-Smith1/TextEditor-PWA">
            <img style={{ width: 640, height: 360, }} src={textedit} className="img-fluid" alt="JATE Text Editor App"></img></a>
        </>
    )
};

export default Project;