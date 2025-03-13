'use client';
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarL2 from "./sidebarL2";
import { FaSun } from "react-icons/fa";
import { sidebarNavLinks } from "./sidebarConfig";
import { ISectionL1 } from "./SidebarTypes";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sidebarL1, setSidebarL1] = useState<ISectionL1[]>([]);

  const onMouseClick = (sectionL1?: ISectionL1[]) => {
    const openStatus = !isOpen;
    setIsOpen(openStatus);
    setSidebarL1(openStatus && sectionL1 ? sectionL1 : []);
  }

  return (
    <aside className={`h-screen ${isOpen ? 'w-96' : 'w-16'} bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex`}> 
      <nav className="min-w-1/4 border-r border-gray-200 dark:border-gray-800 ">
        <div className="flex justify-center items-center p-4">
            <FaSun className="text-orange-500 w-6 h-6" />
        </div>
        <div className="flex-1">
            {sidebarNavLinks?.map((sidebarNavLink) => 
                <SidebarItem 
                  key={sidebarNavLink.id}
                  icon={sidebarNavLink?.icon} 
                  sectionL1={sidebarNavLink.sectionL1}
                  onMouseClick={onMouseClick}/>)}
        </div>
        <div className="p-4 flex justify-center items-center gap-3 border-t border-gray-200 dark:border-gray-800">
            <img src="/user-avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </nav>
      {isOpen && 
      sidebarL1 && 
       <SidebarL2 
        items={sidebarL1}/>}
    </aside>
  );
};

export default Sidebar;