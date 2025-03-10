import React from "react";
import { FaBars } from "react-icons/fa";

type SidebarToggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none border rounded-md bg-gray-100 dark:bg-gray-800">
      <FaBars className="w-5 h-5" />
    </button>
  );
};

export default SidebarToggle;
