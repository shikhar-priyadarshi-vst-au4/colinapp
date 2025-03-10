'use client';
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarL2 from "./sidebarL2";
import { FaSun } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarL2, setSidebarL2] = useState(null);

  const onMouseEnter = () => {

  }

  return (
    <aside className={`h-screen ${isOpen ? 'w-80' : 'w-16'} bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex`}> 
      <nav className="w-1/4 border-r border-gray-200 dark:border-gray-800 ">
        <div className="flex justify-center items-center justify-between p-4">
            <FaSun className="text-orange-500 w-6 h-6" />
            {/* {isOpen && <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        </div>
        <div className="flex-1">
            {sidebarNavLinks?.map((sidebarNavLink) => 
                <SidebarItem title={sidebarNavLink?.title} icon={sidebarNavLink?.icon as string} />)}
        </div>
        <div className="p-4 flex justify-center items-center gap-3 border-t border-gray-200 dark:border-gray-800">
            <img src="/user-avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </nav>
      {isOpen && 
       sidebarL2 && 
       <SidebarL2 items={sidebarL2}/>}
    </aside>
  );
};

export default Sidebar;