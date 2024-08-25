import React, { useState } from 'react';

function ContactUs(props) {
    const [text, changeText] = useState('Contact Us'); 
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [message, changeMessage] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    function handleTextSubmit(event) {
        event.preventDefault(); 
        changeText('Thank you for your message!');
        setSubmittedName(name); 
        changeName(''); 
        changeEmail(''); 
        changeMessage('');
    };

    function handleNameChange(event) {
        changeName(event.target.value);
    }

    function handleEmailChange(event) {
        changeEmail(event.target.value);
    }

    function handleMessageChange(event) {
        changeMessage(event.target.value);
    }

    return (
        <div className="contact">   
            <div className='container-fluid'>
                <h1 className="text-center">{text} {submittedName}</h1> 
                <form onSubmit={handleTextSubmit}>
                    <div className="input">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={handleNameChange}
                            type='text'
                            placeholder='user name'
                            id='name'
                            name="username"
                            value={name}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="user email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="send a message"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="input">
                        <button type="submit">Send message</button>
                    </div>
                </form>
                <div className="social pt-3">
                    <h5>Follow us :</h5>
                    <div className="social-icon">
                        <i className="bi bi-facebook icon "><span>Official Cecifarm</span></i>
                        <i className="bi bi-whatsapp icon "><span>+23491245677752</span></i>
                        <i className="bi bi-twitter-x icon"><span>Official_CeciFarm</span></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
