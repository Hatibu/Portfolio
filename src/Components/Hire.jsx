import React from 'react';
import useDarkMode from '../hook/useDarkMode';

const Hire = () => {
  useDarkMode();
  return (
    <>
      <div className='flex items-center justify-center min-h-screen dark:bg-black'>
        <h1 className='text-4xl text-blue-500 dark:text-white'>
          This is dark mode
        </h1>
      </div>
    </>
  );
};
export default Hire;
