import React, { useState } from "react";
import './formContainer.scss';

const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { name, email, subject, message } = formData

  return <div className="formContainer">
    <p className='heading'>Send me a message</p>
    <p className='desc'>Feel free to get in touch with me with anything related to project</p>
    <p className="desc">or you can just say hi. I will get back to you as soon as I can.</p>
    <div className='inputContainer'>
      <form className='inputField' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="738cbc41-5f89-412f-911e-96452c9a0333" />
        <input type='text' placeholder="name" required name="name" onChange={handleChange} value={name} />
        <input type='email' placeholder='Email address' required name="email" onChange={handleChange} value={email} />
        <input type='text' placeholder="Subject" required name="subject" onChange={handleChange} value={subject} />
        <input type='text' className="message" placeholder="Message" required name="message" onChange={handleChange} value={message} />
        <button className='submit-btn'>Send</button>
      </form>
    </div>
  </div>
}

export default FormContainer;