import React, { useState } from 'react';
import { sidebarItems } from '../utils/staticData';
import { useNavigate } from 'react-router-dom';

interface sidebarProps {
  isSidebarExpanded: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ isSidebarExpanded = false }) => {
  const [activeItem, setActiveItem] = useState('notes');
  const navigate = useNavigate();
  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 z-40 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isSidebarExpanded ? 'w-72' : 'w-16'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-4">
          {sidebarItems?.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  navigate(item?.link || '');
                }}
                className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-r-4 border-amber-500'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <IconComponent
                  className={`w-6 h-6 ${isSidebarExpanded ? 'mr-6' : ''}`}
                />
                {isSidebarExpanded && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
