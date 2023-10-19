'use client';

import WrapContent from '@/components/common/WrapContent';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import React, { ReactNode, useState } from 'react';

function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarState, setSidebarState] = useState(false);
  const toggleSidebarState = () => setSidebarState((prev) => !prev);

  return (
    <>
      <div className='relative bg-gray-50 max-w-[1380px] overflow-hidden max-h-screen'>
        <DashboardHeader toggle={toggleSidebarState} open={sidebarState} />
        <DashboardSidebar toggle={sidebarState} />

        <main className='md:ml-60 pt-16 h-screen overflow-auto'>
          <WrapContent className='py-1'>
            <div className='mx-auto'>{children}</div>
          </WrapContent>
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;