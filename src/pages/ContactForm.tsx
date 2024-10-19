import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import cartoon from '../assets/cartoon-compressed.png';

const ContactForm = ({ id }: { id: string }) => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: 'Hemleen',  // Default value for to_name
    message: ''
  });

  // Handle input changes (except for disabled fields like to_name)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Send email dynamically using emailjs.send with the public key
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Sending email with dynamic values from formData and public key
    emailjs.send("service_1nmdpkr", "template_vrjky5i", {
      from_name: formData.from_name,
      to_name: formData.to_name,
      message: formData.message
    }, 'thUIBFh7XLtpuNr30') // Public key added here
    .then((result) => {
      console.log(result.text);
      toast.success('Message sent successfully.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, (error) => {
      console.error(error.text);
      toast.error("Failed to send message. Kindly refresh the page.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      
      <div className="contact-container">
        <img src={cartoon} alt='Hemleen' className="contact-wrapper-left" />
        
        <form onSubmit={sendEmail} className="contact-wrapper-right">
          <input
            id='name'
            type="text"
            name="from_name"
            placeholder='Your Name'
            value={formData.from_name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <input
            id='to_name'
            type="text"
            name="to_name"
            value={formData.to_name}  // Set default value as 'Hemleen'
            disabled  // Make the field disabled
            style={{ color: 'lightgray' }}  // Set text color to light gray
            required
          />
          <textarea
            id='message'
            name="message"
            placeholder='Your message here...'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='btn' id='submitBtn' type="submit">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ContactForm;
