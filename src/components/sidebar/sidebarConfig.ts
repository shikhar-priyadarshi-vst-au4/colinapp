import { guid } from "@/helper/guid";
import { ISidebar } from "./SidebarTypes";

const createSectionL2 = () => [
    {
        id: guid(), title: 'Home', icon: 'home',
    },
    {
        id: guid(), title: "Projects", icon: "folder"
    },
    {
        id: guid(), title: "Tasks", icon: "tasks"
    },
    {
        id: guid(),
        title: "My details", 
        icon: "user",
        sectionL3: [
            { title: 'My Details' },
            { title: 'My Profile '},
            { title: 'Security' },
            { title: 'Integrations' },
            { title: 'Billing' }
        ]
    },
    {
        id: guid(), title: "My profile", icon: "profile"
    },
]

export const sidebarNavLinks: ISidebar[] = [
    {
        id: guid(), title: 'Home', icon: 'home',
    },
    {
        id: guid(),
        title: "Dashboard", 
        icon: "dashboard",
        sectionL1: [
            {
                id: guid(),
                title: 'My account',
                sectionL2: createSectionL2()
            },
            {
                id: guid(),
                title: 'Shared with me',
                sectionL2: createSectionL2()
            }
        ]
    },
    {
        id: guid(), title: "Projects", icon: "folder"
    },
    {
        id: guid(), title: "Tasks", icon: "tasks"
    },
    {
        id: guid(), title: "My details", icon: "user"
    },
    {
        id: guid(), title: "My profile", icon: "profile"
    },
    {
        id: guid(), title: "Security", icon: "lock"
    },
    {
        id: guid(), title: "Integrations", icon: "integration"
    },
    {
        id: guid(), title: "Billing", icon: "credit-card"
    }
]