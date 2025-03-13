import { IconType } from "react-icons";

export interface ISectionL2{
    id: string;
    title: string;
    icon: IconType;
    sectionL3?: ISidebar[];
}

export interface ISectionL1 {
    id: string;
    title: string;
    sectionL2?: ISectionL2[]; 
}

export interface ISidebar {
    id: string;
    title: string;
    icon?: IconType;
    sectionL1?: ISectionL1[];
}

export interface ISidebarSection {
    title: string;
    icon: IconType;
    children: React.ReactNode;
  };
  