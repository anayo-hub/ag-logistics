import React from 'react';
import classnames from 'classnames'


function Service({ details, image, flexDirection = false }) {
  const dynamicStyle = classnames({ 'row-reverse': flexDirection });
  console.log({ flexDirection });
  return (
    <section id="next-page">

      <div className={`service-container  ${dynamicStyle}`}>

        <div className="image">
          <div>{image}</div>
        </div>
        <div className="details">
          <div className="service-details">
            <div><p>{details}</p></div>
            <button className="details-button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
