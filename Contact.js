import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    const formData = { name, email, message };

  
    axios.post('https://api.sheetbest.com/sheets/8807aa78-e1c2-4686-950f-747701ff40ae', formData, { timeout: 5000 }) 
      .then((response) => {
     
        setName('');
        setEmail('');
        setMessage('');
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
        alert("Failed to send your message. Please try again later.");
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <section id="contact" className="section-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className="form-group">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
