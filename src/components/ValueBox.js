import React from 'react';
import Standard from './Standard';
import CustomBtn from './CustomBtn';

function ValueBox() {
  return (
    <div className='value-box'>
      <div className='value-contents'>
        <div className='value-post'>
          <h3>values</h3>
          <h1>We Live By Our <span>Principles</span>.</h1>
          <p>Our objective is to be the most transparent, standard, and safest brand in Nigeria. We are committed to making our customers happy and relaxed by simplifying logistics and making truck procurement as affordable as possible by assisting you in buying directly from European market.</p>
          <div className='value-post-stands'>
            <Standard />
            <Standard />
            <Standard />
          </div>
          <CustomBtn />
        </div>
        <div className='value-img'>
          <div>
            <img src="example.png" alt="values" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueBox;
