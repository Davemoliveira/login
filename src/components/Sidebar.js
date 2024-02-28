// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdWindow } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { PiTerminalFill } from "react-icons/pi";
import { VscChip } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";

const Sidebar = ({ location }) => {
  const pathname = location?.pathname;

  return (
    <div className="bg-gradient-to-r from-blue-800 to-black w-64 h-full p-4 fixed left-0 top-0 bottom-0 transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-bold mb-4 text-center">DASHBOARD</h2>
      <ul>

        <li>
          <MdWindow className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/homepage' ? 'font-bold' : ''}>Home</Link>
        </li>

        <li>
          <VscChip className="inline-block mr-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/resources" className={pathname === '/resources' ? 'font-bold' : ''}>Resources</Link>
        </li>

        <li>
          <MdOutlineBarChart className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/page1' ? 'font-bold' : ''}>Stats</Link>
        </li>

        <li className='mb-2'>
          <PiTerminalFill className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/page1' ? 'font-bold' : ''}>CLI</Link>
        </li>

        <li className='mb-2'>
          <VscAccount className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/page1' ? 'font-bold' : ''}>Users</Link>
        </li>

        <li>
          <VscGlobe className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/page1' ? 'font-bold' : ''}>Companies</Link>
        </li>


        <li>
          <MdOutlineSettings className="inline-block mt-2 mr-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/page1" className={pathname === '/page1' ? 'font-bold' : ''}>Settings</Link>
        </li>


        <li>
          <MdOutlinePowerSettingsNew className="inline-block mr-2 mt-2 mb-2 fill-white h-8 w-8" /> {/* Add the MdWindow icon before the Link */}
          <Link to="/" className={pathname === '/' ? 'font-bold' : ''}>Logout</Link>
        </li>

        <li>
          {/* Add icons and links for other pages similarly */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
