import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Page1 = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <Sidebar isExpanded={isExpanded} />
      <div className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <h2 className='w-full py-8 text-2xl font-bold text-center text-bold bg-gray-50' center>OVERVIEW</h2>
        
        <div className='flex justify-center'>
  <div className='w-full max-w-screen-lg px-4 bg-gray-50'>
    <div className='pt-20'>
      <div className='px-20'>
        .dfkgjlkjdfghdlfkjgh
        .dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh
        .dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh.dfkgjlkjdfghdlfkjgh

      
      <h1> Loading bar</h1>
      


      </div>
    </div>
  </div>
</div>



      </div>
    <Footer/>
    </div>
  );
};

export default Page1;
