import React from 'react';

export const App = () => {
  return (
    <div className='flex grow-1 h-screen bg-navy'>
      <div className='flex flex-col gap-1 content-center w-2/4 mx-auto my-10'>
        <div className='grow-1'>
          <p className='text-customGreen text-4xl font-chakra'>Hi, my name is</p>
        </div>
        <div>
          <p className='text-lightestSlate text-7xl font-chakra'>Juho Lehtimäki.</p>
        </div>
        <div>
          <p className='text-lightSlate text-7xl font-chakra'>A full stack developer.</p>
        </div>
        <div className='w-3/5'>
          <p className='text-lightestSlate text-lg mt-10 font-chakra'>
            I&apos;m a full stack developer specializing in building different web and mobile
            application solutions usually hosted in the cloud. Currently, I&apos;m helping different
            clients with their inhouse product development to reach the best possible solution and
            software architecture{' '}
            <a href='https://www.cirit.com' className='text-customGreen'>
              Cirit
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
