import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Layout: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900 flex justify-center p-4 transition-all duration-500">
      {/* Navbar */}
      <Navbar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      <Sidebar isSidebarExpanded={isSidebarExpanded} />
      <main
        className={`pt-16 transition-all duration-300 ${
          isSidebarExpanded ? 'pl-72' : 'pl-16'
        }`}
      >
        <Outlet /> {/* This is where child route content will render */}
      </main>
    </div>
  );
};

export default Layout;
