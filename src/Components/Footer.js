import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h1> Copyright {year}</h1>
    </div>
  );
};

export default Footer;
