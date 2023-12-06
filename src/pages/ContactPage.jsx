import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [inputMessage, setInputMessage] = useState('');
    
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

    const handleFocusOut = (e) => {
        const { target } = e;
        const inputValue = target.value;

        if (!inputValue) {
            setErrorMessage('All fields are required');
            return;
        } else {
            setErrorMessage('');
            return;
        }
    }

      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Check to see if the email is not valid.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;
        }

        if (!name || !email || !message) {
            setErrorMessage('All fields are required');
            return;
        }
    
        // Clear out the input.
        setName('');
        setEmail('');
        setMessage('');
      };

    return (
        <div className="container pt-4">
            <h3 className="py-2">
                Contact Me
            </h3>
            <form className="form d-flex flex-column w-50" onSubmit={handleFormSubmit}>
                <label 
                    htmlFor="name"
                    className="mt-3">Name:</label>
                <input 
                    value={name} 
                    id="name"
                    className="mb-3"
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}></input>
                <label 
                    htmlFor="email"
                    type="email"
                    className="">Email:</label>
                <input 
                    value={email} 
                    id="email"
                    className="mb-3"
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}></input>
                <textarea 
                    value={message} 
                    id="message" 
                    placeholder="Message"
                    className="my-3"
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleFocusOut}></textarea>
                <button className="my-3 w-50">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

        </div>
      );
}