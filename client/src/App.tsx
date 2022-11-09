import React from 'react';
import { LeftSideBar } from './components/LeftSideBar';
import { RightSideBar } from './components/RightSideBar';

export const App = () => {
  return (
    <div className='flex'>
      <RightSideBar />
      <LeftSideBar />
    </div>
  );
};
