import React from "react";
import { IconType } from "react-icons";
import { FaHome, FaTachometerAlt, FaFolder, FaUser, FaLock, FaCreditCard, FaTasks, FaUserCircle, FaPlug } from "react-icons/fa";

const icons: { [key: string]: IconType } = {
  home: FaHome,
  dashboard: FaTachometerAlt,
  folder: FaFolder,
  user: FaUser,
  lock: FaLock,
  "credit-card": FaCreditCard,
  tasks: FaTasks,
  profile: FaUserCircle,
  integration: FaPlug,
};

type SidebarItemProps = {
  title: string;
  icon: keyof typeof icons;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
  const Icon = icons[icon];
  return (
    <div className="flex justify-center items-center gap-3 p-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-md mx-2">
      <Icon className="w-5 h-5" />
    </div>
  );
};

export default SidebarItem;