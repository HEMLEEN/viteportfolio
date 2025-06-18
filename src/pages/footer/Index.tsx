import { useState } from "react";
import { leftUserImage } from "../../constant/Constant";
import { devloperInfo, WebsiteDesc, WebsiteName } from "../../res/String";
import emailjs from '@emailjs/browser';

const Footer = () => {

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
        if(result.text){
          setFormData({...formData, from_name:'',message:''})
        }
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <footer style={{ backgroundColor: '#0d0d0d', color: '#fff' }} className="pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Left Section - Logo & Quote */}
          <div className="col-md-4 mb-4">
            <img src={leftUserImage} alt="Logo" style={{ width: '100px' }} />
            <p className="mt-3">
              <span style={{ color: '#a46bf5' }}>"Quote"</span> {WebsiteDesc}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <i className="bi bi-facebook text-white"></i>
              <i className="bi bi-linkedin text-white"></i>
              <i className="bi bi-twitter text-white"></i>
              <i className="bi bi-youtube text-white"></i>
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="col-md-4 mb-4">
            <h5 style={{ color: '#a46bf5' }}>{WebsiteName}</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Subscribe */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">Get in Touch</h5>
            <p>{devloperInfo.desc}</p>
            <div className="d-flex flex-row justify-content-center">
              <form onSubmit={sendEmail} className="d-flex flex-column gap-3 ">
                <input
                  type="text"
                  name="from_name"
                  placeholder='Your Name'
                  value={formData.from_name}
                  onChange={handleChange}
                  style={{  border: '1px solid #a46bf5',  color: '#1a1a1a' }}
                  className="form-control text-dark"
                />
                <input
                  name="message"
                  placeholder='Your message here...'
                  value={formData.message}
                  onChange={handleChange}
                  style={{ border: '1px solid #a46bf5', color: '#1a1a1a', }}
                  className="form-control text-dark"
                />
                <button className="btn" style={{ backgroundColor: '#a46bf5', color: '#fff', width: '200px' }}>Send</button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary" />
        <div className="text-center small " style={{ color: '#FFFFFF' }}>
          © 2025 {WebsiteName}. All Rights Reserved. |
          <a href="#" className="ms-2 text-decoration-none" style={{ color: '#a46bf5' }}>Privacy</a> |
          <a href="#" className="ms-2 text-decoration-none" style={{ color: '#a46bf5' }}>Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
