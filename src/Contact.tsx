import React, { useState, FormEvent } from 'react';

import './styles/Contact';

const Contact = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    message: '',
  })

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setForm({
      ...form,
      [target.id]: target.value,
    });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <section className="contact">
      <h2>
        Contact
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="contact-form"
      >
        <div className="form-top">
          <div className="upper-container" id="name-container">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              className="form-field-upper"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="upper-container" id="email-container">
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              className="form-field-upper"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-bottom">
          <div className="lower-container">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="form-field-lower"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact;