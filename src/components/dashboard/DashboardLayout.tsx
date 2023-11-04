// import { BeakerIcon } from '@heroicons/react/24/solid'
import React, { ReactNode } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  
  return (
    <div className="flex w-screen">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 w-5/6">
        <Navbar />
        <main className="md:p-10 p-2">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;