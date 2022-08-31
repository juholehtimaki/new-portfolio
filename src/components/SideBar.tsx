import React from 'react';
import { SideBarIcon } from './SideBarIcon';
import { FaBeer } from 'react-icons/fa';

export const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow-lg bg-primary text-secondary'>
      <SideBarIcon icon={<FaBeer size='28' />} />
      <SideBarIcon icon={<FaBeer size='28' />} />
      <SideBarIcon icon={<FaBeer size='28' />} />
      <SideBarIcon icon={<FaBeer size='28' />} />
      <SideBarIcon icon={<FaBeer size='28' />} />
    </div>
  );
};
