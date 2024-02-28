import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdWindow } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { PiTerminalFill } from "react-icons/pi";
import { VscChip } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
import { RiExpandLeftLine } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";

const Sidebar = ({ location }) => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarClass = isExpanded ? "w-64" : "w-16"; // Determine sidebar width based on state
  const dashboardClass = isExpanded ? "opacity-100" : "opacity-0"; // Determine opacity based on state

  const pathname = location?.pathname;

  return (
    <div className={`fixed top-0 bottom-0 left-0 h-full p-4 transition-all duration-500 ease-in-out bg-white rounded-md shadow-md to-black ${sidebarClass}`}>
      <h2 className={`mb-4 text-lg font-bold text-center transition-opacity duration-500 ${dashboardClass}`}>DASHBOARD</h2>

      <button onClick={toggleSidebar} className="flex flex-col mb-4 items-lef">
        {isExpanded ? <RiExpandLeftLine className='w-10 h-10 mt-2 mb-2 fill-black' /> : <RiExpandRightFill className='w-10 h-10 mt-2 mb-2 fill-black' /> } {/* Change button text based on sidebar state */}
      </button>
    
      <ul style={{ visibility: isExpanded ? 'visible' : 'hidden' }}> {/* Hide/show sidebar based on state */}
        <li>
          <MdWindow className="inline-block w-6 h-6 mt-2 mb-2 mr-2 text-black fill-black" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/homepage' ? 'font-bold text-black' : ''}>Homepage</Link>
        </li>
    
        {/* Add other list items similarly */}
      </ul>
      
      {/* Icons always visible */}
      <div className="flex flex-col items-left">
        <MdWindow className="w-10 h-10 mt-2 mb-2 fill-black" /> 
        <VscChip className="w-10 h-10 mt-2 mb-2 fill-black" />
        <MdOutlineBarChart className="w-10 h-10 mt-2 mb-2 fill-black" />
        <PiTerminalFill className="w-10 h-10 mt-2 mb-2 fill-black" />
        <VscAccount className="w-10 h-10 mt-2 mb-2 fill-black" />
        <VscGlobe className="w-10 h-10 mt-2 mb-2 fill-black" />
        <MdOutlineSettings className="w-10 h-10 mt-2 mb-2 fill-black" />
        <MdOutlinePowerSettingsNew className="w-10 h-10 mt-2 mb-2 fill-black" />
      </div>
    </div>
  );
};

export default Sidebar;
