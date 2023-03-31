// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
import React from 'react';
import resume from '../../img/placeholderresume.png';

function Resume() {
    return (
        <>
            <h1>Resume</h1>
            <a href={resume} download>
                <img src={resume} alt="" width="1063" height="1375"></img>
            </a>
        </>
    )
};
export default Resume;