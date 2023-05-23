import React from 'react';

function Footer() {
  return (
    <footer>
     <div className="top-footer">
        <div className="top-footer-content">
          <div className="tops">
            <h1 className='upp'>Main</h1>
            <nav>
              <a href="/#">Home</a>
              <a href="/#">About</a>
              <a href="/#">Services</a>
              <a href="/#">Contact us</a>
            </nav>
          </div>
          <div className="tops">
            <h1 className='upp' >Service</h1>
            <nav>
              <a href="/#">Home</a>
              <a href="/#">About</a>
              <a href="/#">Services</a>
              <a href="/#">Contact us</a>
            </nav>
          </div>
          <div className="tops">
            <h1 className='upp'>Legal</h1>
            <nav>
              <a href="/#">Home</a>
              <a href="/#">About</a>
              <a href="/#">Services</a>
              <a href="/#">Contact us</a>
            </nav>
          </div>
          <div className="tops">
            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <h4>Get in touch with what is happening in Nemfra as well as logistic ecosystem in Nigeria.</h4>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Your E-mail Address"
                />
                <button
                  title="Get Quote"
                  aria-expanded="false"
                  aria-haspopup="dialog"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="bottom-item">
          <div className="bottom-content">
            <div>
              <img src="exmaple.png" alt="logo" />
            </div>
            <h1>© Agbusi Logistics. All Rights Reserved.</h1>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
