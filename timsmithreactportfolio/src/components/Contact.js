// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
import React from 'react';

function Contact() {
    return (
        <body>
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="please enter your name"></input>
                <label for="exampleFormControlInput2" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Please leave your message here...</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </body>
    )
};

export default Contact;