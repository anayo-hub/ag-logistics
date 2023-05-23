import React from 'react';

function CustomInput() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        // Define your CSS styles here
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: '10px',
        width: '100%',
        height: '100%',
        margin: "2rem",
      }}
    >
      <div
        className="sc-eJDSGI eDtLoJ"
        style={{
          textAlign: 'center',
          border: '2px solid gray',
          borderRadius: '50px',
          padding: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Your E-mail Address"
          style={{
            // Additional input styles
            width: '200px',
            marginRight: '10px',
            border: 'none',
            outline: "none",
            fontWeight: "bold",
            padding: "4px"
          }}
        />
        <button
          title="Get Quote"
          aria-expanded="false"
          aria-haspopup="dialog"
          style={{
            // Additional button styles
            backgroundColor: '#337ab7',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '50px',
            cursor: 'pointer',

          }}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default CustomInput;
