import React from 'react';

function Corporate() {
  return (
    <div className='corporate-box'>
      <div className='corporate-container'>
        <div className="second-corporate-content">
          <div>
            <img src="example.jpg" alt="full" />
          </div>
        </div>
        <div className='first-corporate-content'>
          <h1>CORPORATE SOCIAL RESPONSIBILITY</h1>
          <h2>We partner with Franca Ogwudu foundation in rendering help in our communities through education scholarships and charities to the less privileged.</h2>
          <div className="corporate-image-container">
            <div className="co-image-container">
              <img src="your-image.jpg" alt="corporate" />
            </div>
            <div className="corporate-navigation-container">
              <button className="co-nav-button" id="prev-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button className="co-nav-button" id="next-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corporate;
