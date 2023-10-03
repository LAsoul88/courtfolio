import React, { useState, FormEvent } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: ''})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <>
      <h2>
        Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) =>
            setForm(prev => ({ ...prev, name: e.target.value}))}
          min={2}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={(e) =>
            setForm(prev => ({ ...prev, email: e.target.value}))}
          min={2}
          required
        />
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          value={form.message}
          onChange={(e) =>
            setForm(prev => ({ ...prev, message: e.target.value}))}
          min={2}
          required
        />
      </form>
    </>
  )
}

export default Contact;