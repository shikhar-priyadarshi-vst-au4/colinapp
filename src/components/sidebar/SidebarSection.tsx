import React from "react";

type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400 px-4">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default SidebarSection;