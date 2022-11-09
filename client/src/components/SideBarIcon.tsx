import React from 'react';

export const SideBarIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return <div className='sidebar-icon'>{icon}</div>;
};
