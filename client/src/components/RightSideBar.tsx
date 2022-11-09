import React from 'react';
import { SideBarIcon } from './SideBarIcon';
import { FaGithub } from 'react-icons/fa';

export const RightSideBar = () => {
  return (
    <div className='fixed bottom-0 right-10 w-16 m-0 flex flex-col'>
      <SideBarIcon icon={<FaGithub size='28' />} />
      <SideBarIcon icon={<FaGithub size='28' />} />
      <SideBarIcon icon={<FaGithub size='28' />} />
      <SideBarIcon icon={<FaGithub size='28' />} />
      <SideBarIcon icon={<FaGithub size='28' />} />
    </div>
  );
};
