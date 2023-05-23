import React from 'react';

function BoxGrid() {
  return (
    <div className="box-grid" style={{marginTop: "2rem"}}>
      <div className="box">
        <span>
        <img src="https://www.nemfra.com/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg" alt="Transparency" />
        </span>
        <span className="textContainer">
          <span className="title">Transparency</span>
          <p className="description">Our brand is built on transparency. We carry you along on every stage of logistics or procurement. No hidden fees or charges</p>
        </span>
      </div>
      {/* Add more box elements here */}
      <div className="box">
        <span>
          <img src="https://www.nemfra.com/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg" alt="fast-con" />
        </span>
        <span className="textContainer">
          <span className="title">On Time Delivery</span>
          <p className="description">We understand time is money. Hence we deliver faster than industry standard</p>
        </span>
      </div>
      <div className="box">
        <span>
          <img src="https://www.nemfra.com/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg" alt="savefty" />
        </span>
        <span className="textContainer">
          <span className="title">Safety</span>
          <p className="description">To us, every good is treated like gold. We monitor all our drivers to ensure they follow all safety practices including limitation on speed</p>
        </span>
      </div>
      <div className="box">
        <span>
          <img src="https://www.nemfra.com/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg" alt="Transparency" />
        </span>
        <span className="textContainer">
          <span className="title">Customer Support</span>
          <p className="description">We value our customers beyond any measure. Hence our customer support personnels are always ready to answer your questions, provide updates and ensure you remain happy and relaxed</p>
        </span>
      </div>
      <div className="box">
        <span>
          <img src="https://www.nemfra.com/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg" alt="Transparency" />
        </span>
        <span className="textContainer">
          <span className="title">Tracking and Automation</span>
          <p className="description">Our technology gives you visiblity and real time tracking. Most of our processes are automated and powered by technology, thereby giving you that seamless experience</p>
        </span>
      </div>
    </div>
  );
}

export default BoxGrid;
