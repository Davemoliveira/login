import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DateTime from './DateTime';


const Footer = () => {
  return (
    <footer >
    <div className='bg-white rounded-md shadow-md'>
      <DateTime />
    <span><DateTime /></span>
  </div>
  <div>
    <br/>
    <Link href="https://www.universityofgalway.ie/">Powered by University of Galway</Link>
  </div>
  </footer>
  );
};

export default Footer;
