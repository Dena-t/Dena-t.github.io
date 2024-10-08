import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
  function ContactMe() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send('service_ivgvgpw', 'template_iselnwy', formData, 'ms2V2aQxFe9Ku3hK2')
        .then((result) => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message, please try again.');
        });
      setFormData({ name: '', email: '', message: '' });
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
    return (
<div>
<h1>Contact Me</h1>
<br></br>
<p className='contact'>I would be happy to hear from you !</p><p className='contact'>Please fill out the form below and I will contact you as soon as possible!</p>
<br></br>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label><i>Your Name:</i></label>
<input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
</div>
<div className="form-group">
<label><i>Your Email Address:</i></label>
<input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
</div>
<div className="form-group">
<label><i>Your Message:</i></label>
<textarea name="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    );
  }
  export default ContactMe;