// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import React from 'react';

function Contact() {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="please enter your name"></input>
                <label htmlFor="exampleFormControlInput2" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Please leave your message here...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        </div>
    )
};

export default Contact;