import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdWindow } from 'react-icons/md';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';
import { MdOutlineBarChart } from 'react-icons/md';
import { PiTerminalFill } from 'react-icons/pi';
import { VscChip } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';
import { VscGlobe } from 'react-icons/vsc';
import { RiExpandLeftLine } from 'react-icons/ri';
import { RiExpandRightFill } from 'react-icons/ri';
import moment from 'moment';
import DateTime from './DateTime';


const Sidebar = ({ location }) => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarClass = isExpanded ? "w-64" : "w-16"; // Determine sidebar width based on state
  const dashboardClass = isExpanded ? "opacity-100 transition-opacity duration-800" : "opacity-0 transition-opacity duration-400"; // Determine opacity based on state

  const pathname = location?.pathname;

  return (
    <div className={`fixed top-0 bottom-0 left-0 h-full p-4 transition-all duration-500 ease-in-out bg-white rounded-md shadow-md to-black ${sidebarClass}`}>
      <h2 className={`mb-4 text-lg font-bold text-center ${dashboardClass}`}>DASHBOARD</h2>

      <button onClick={toggleSidebar} className="flex flex-col mb-4 items-left">
        {isExpanded ? <RiExpandLeftLine className='w-10 h-10 mt-2 mb-2 fill-black' /> : <RiExpandRightFill className='w-10 h-10 mt-2 mb-2 fill-black' /> }
      </button>
    

        <ul>
          <li className={`transition-all duration-500 ease-in-out delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page1" className={pathname === '/page2' ? 'font-bold text-black' : ''}>
              <MdWindow className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2">OVERVIEW</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page2" className={pathname === '/page2' ? 'font-bold text-black' : ''}>
              <MdOutlinePowerSettingsNew className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2">LOG OUT</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page3" className={pathname === '/page3' ? 'font-bold text-black' : ''}>
              <MdOutlineSettings className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2 transition-all duration-500 ease-in-out">SETTINGS</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page4" className={pathname === '/page4' ? 'font-bold text-black' : ''}>
              <MdOutlineBarChart className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2 transition-all duration-500 ease-in-out">CHARTS</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-400 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page5" className={pathname === '/page5' ? 'font-bold text-black' : ''}>
              <PiTerminalFill className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2 transition-all duration-500 ease-in-out">TERMINAL</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-600 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page7" className={pathname === '/page7' ? 'font-bold text-black' : ''}>
              <VscAccount className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2 transition-all duration-500 ease-in-out">USERS</span>}
            </Link>
          </li>

          <li className={`transition-all duration-500 ease-in-out delay-700 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/page8" className={pathname === '/page8' ? 'font-bold text-black' : ''}>
              <VscGlobe className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? '' : 'opacity-100'}`} />
              {isExpanded && <span className="ml-2 transition-all duration-500 ease-in-out">COMPANY</span>}
            </Link>
          </li>


            <li className={`py-[850px] 2xl:text-xl transition-all duration-500 ease-in-out delay-800 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
              
            </li>
          </ul>

    


    </div>
  );
};

export default Sidebar;