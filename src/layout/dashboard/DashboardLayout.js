import React from 'react';
import {Outlet} from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
        <div className='h-[73px] bg-brand flex items-center text-white'>
      
      </div>
       <Outlet />
    </>

  );
};

export default DashboardLayout;