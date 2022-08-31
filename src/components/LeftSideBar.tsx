import React from 'react';
import { SideBarIcon } from './SideBarIcon';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const LeftSideBar = () => {
  return (
    <div className='fixed bottom-0 left-10 w-16 m-0 flex flex-col'>
      <SideBarIcon icon={<FaGithub size='28' />} />
      <SideBarIcon icon={<FaLinkedin size='28' />} />
      <div className='border-left h-200 min-h-[50%] min-w-[50%] bg-cyan-50'></div>
    </div>
  );
};
