import React from 'react';
import '../index.css';

import MyService from '../data/service';

const Section = () => {
  return (
    <div className='section'>
      {/*service section */}
      <div className='service w-full pb-20'>
        <div className='service w-full px-6 -ml-2'>
          <br />

          <h1 className='font-bold text-3xl md:text-3xl  lg:text-4xl  text-center  '>
            Offered services
          </h1>
          <div className='grid lg:flex lg:flex-wrap md:flex md:flex-wrap gap-6 mt-10 lg:mt-20 text-center justify-center '>
            {MyService.map((value) => (
              <div
                key={value.id}
                className='max-w-sm w-full rounded-md lg:p-10 overflow-hidden shadow-lg bg-white m-1.5 '
              >
                <div className='px-6 py-4'>
                  <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                    <value.icon className='w-12 h-12 mt-5 ml-3 ' />
                  </span>
                  <h1 className='font-bold text-xl mb-2'>{value.title}</h1>
                  <p className='text-gray-700 text-base'>{value.desc}</p>
                </div>
                <div className='px-6 pt-4 pb-2'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
