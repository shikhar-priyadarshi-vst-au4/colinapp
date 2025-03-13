import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { ISectionL1, ISidebarSection } from "./SidebarTypes";
import { useState } from "react";
import SidebarItem from "./SidebarItem";

interface ISidebarL2{
    items: ISectionL1[];
}

interface ITabSwitcher {
  tabs: ISectionL1[];
  setSidebarL1: (sectionL1: ISectionL1) => void;
};


const SearchInput = () => {
  return <div className="relative w-full max-w-md mb-4">
  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
  <input
    type="text"
    placeholder="Search"
    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
  />
</div>
}

const SidebarSection: React.FC<ISidebarSection> = ({ title, icon: Icon, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)} className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <span>{expanded ? <FaMinus fontSize={'0.75rem'}/> :  <FaPlus fontSize={'0.75rem'}/>}</span>
      </div>
      {expanded && <div className="pl-6 border-l border-gray-300 dark:border-gray-600">{children}</div>}
    </div>
  );
};

const TabSwitcher: React.FC<ITabSwitcher> = ({ tabs, setSidebarL1 }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const onActiveTabHandler = (tab: ISectionL1) => {
    setActiveTab(tab.id)
    setSidebarL1(tab);
  }

  return (
    <div className="flex border-b border-gray-300 dark:border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`text-nowrap px-4 py-2 text-sm font-medium ${activeTab === tab.id ? "text-black dark:text-white border-b-2 border-black dark:border-white" : "text-gray-500 dark:text-gray-400"}`}
          onClick={() => onActiveTabHandler(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default function SidebarL2({ items }: ISidebarL2){
    const [sidebarL1, setSidebarL1] = useState<ISectionL1>(items[0]);
    return <nav className="w-3/4 px-3 py-6">
        <p className="pb-5 text-base">Overview</p>
        <SearchInput/>
        <TabSwitcher 
          tabs={items}
          setSidebarL1={setSidebarL1} />
        <div className="my-4">
          {sidebarL1 &&
          sidebarL1.sectionL2?.map((sectionL2Item) => 
          <SidebarSection key={sectionL2Item.id} title={sectionL2Item.title} icon={sectionL2Item.icon}>
            {
              sectionL2Item.sectionL3 &&
              sectionL2Item.sectionL3.map((sectionL3Item) => 
                <SidebarItem title={sectionL3Item.title}/>)
            }
          </SidebarSection>)}
        </div>
    </nav>
}


