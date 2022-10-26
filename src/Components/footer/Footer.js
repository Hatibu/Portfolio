import React from 'react';
import './Footer.css';

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='footer py-4 text-center'>
      <span>© {year} Julius Hatibu All rights reserved.</span>
    </div>
  );
}

export default Footer;
