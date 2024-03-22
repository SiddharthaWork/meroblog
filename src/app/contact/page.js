
"use client"
import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './Form.module.css';

export default function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
        {submitted && <p className={styles.successMessage}>Your form has been submitted!</p>}
      </div>
      <Footer />
    </div>
  );
}
