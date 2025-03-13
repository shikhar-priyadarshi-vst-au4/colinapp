import { guid } from "@/helper/guid";
import { ISidebar } from "./SidebarTypes";
import { FaHome, FaTachometerAlt, FaFolder, FaUser, FaLock, FaCreditCard, FaTasks, FaUserCircle, FaPlug } from "react-icons/fa";

const createSectionL2 = () => [
    {
        id: guid(), title: 'Home', icon: FaHome,
    },
    {
        id: guid(), title: "Projects", icon: FaFolder
    },
    {
        id: guid(), title: "Tasks", icon: FaTasks
    },
    {
        id: guid(),
        title: "My details", 
        icon: FaUser,
        sectionL3: [
            { id: guid(), title: 'My Details' },
            { id: guid(), title: 'My Profile '},
            { id: guid(), title: 'Security' },
            { id: guid(), title: 'Integrations' },
            { id: guid(), title: 'Billing' }
        ]
    },
    {
        id: guid(), title: "My profile", icon: FaUserCircle
    },
]

export const sidebarNavLinks: ISidebar[] = [
    {
        id: guid(), 
        title: 'Home', 
        icon: FaHome,
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
        id: guid(),
        title: "Dashboard", 
        icon: FaTachometerAlt,
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
        id: guid(), 
        title: "Projects", 
        icon: FaFolder,
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
        id: guid(), 
        title: "Tasks", 
        icon: FaTasks,
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
        id: guid(), 
        title: "My details", 
        icon: FaUser,
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
        id: guid(), 
        title: "My profile", 
        icon: FaUserCircle,
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
        id: guid(), 
        title: "Security", 
        icon: FaLock,
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
        id: guid(), 
        title: "Integrations", 
        icon: FaPlug,
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
        id: guid(), 
        title: "Billing", 
        icon: FaCreditCard,
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
    }
]