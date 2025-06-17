import { devloperInfo, WebsiteDesc, WebsiteName } from "../../res/String";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', color: '#fff' }} className="pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Left Section - Logo & Quote */}
          <div className="col-md-4 mb-4">
            <img src="/logo.png" alt="Logo" style={{ width: '100px' }} />
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
            <h5 className="text-white">Developer Support</h5>
            <p>{devloperInfo.desc}</p>
            <div className="d-flex">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control me-2"
                style={{ backgroundColor: '#1a1a1a', border: '1px solid #a46bf5', color: '#fff' }}
              />
              <button className="btn" style={{ backgroundColor: '#a46bf5', color: '#fff' }}>Subscribe</button>
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
