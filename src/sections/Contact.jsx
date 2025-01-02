import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({name:'', email: '', message: ''});

  const [loading, setLoading] = useState(false);

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);


    try {
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Vorleak Yek',
          from_email: form.email,
          to_email: 'vorleakyek@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setLoading(false);
      alert('Your message has been sent!');

      setForm({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong!')
    }



  }

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal-white.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-teal-950 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John Smith"/>
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input type="text" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="johnsmith@gmail.com" />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi, I wanna give you a job ..." />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending ...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
