export interface ISectionL2{
    title: string;
    icon: string;
    sectionL3?: ISidebar[];
}

export interface ISectionL1 {
    title: string;
    sectionL2?: ISectionL2[]; 
}

export interface ISidebar {
    title: string;
    icon?: string;
    sectionL1?: ISectionL1[];
}