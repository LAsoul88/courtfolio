import React, { useState, FormEvent } from 'react';

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
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Contact;