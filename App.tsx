import React, { useState } from 'react';
import { Page } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import HajiPackages from './components/HajiPackages';
import UmrahPackages from './components/UmrahPackages';
import ContactUs from './components/ContactUs';
import MenuIcon from './components/icons/MenuIcon';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case Page.DASHBOARD:
        return <Dashboard setActivePage={setActivePage} />;
      case Page.HAJI:
        return <HajiPackages />;
      case Page.UMRAH:
        return <UmrahPackages />;
      case Page.CONTACT:
        return <ContactUs />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col md:flex-row relative">
      <button 
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-gray-700 hover:bg-white transition"
        onClick={() => setIsSidebarOpen(true)}
      >
        <MenuIcon />
      </button>

      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30" 
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen} 
      />
      <main className="flex-1 p-4 sm:p-6 md:p-10 md:ml-64 mt-12 md:mt-0">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;