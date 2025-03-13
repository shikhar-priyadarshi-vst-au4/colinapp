import React from "react";
import { IconType } from "react-icons";
import { ISectionL1 } from "./SidebarTypes";

type SidebarItemProps = {
  title?: string;
  icon?: IconType;
  sectionL1?: ISectionL1[];
  onMouseClick?: (sectionL1?: ISectionL1[]) => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon: Icon, sectionL1, onMouseClick }) => {

  const onMouseClickHandler = () => onMouseClick && onMouseClick(sectionL1)

  return (
    <div 
      onClick={onMouseClickHandler}
      className="flex justify-center items-center gap-3 p-3 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-md mx-2">
      {title && <span>{title}</span>}
      {Icon && <Icon className="w-5 h-5" />}
    </div>
  );
};

export default SidebarItem;