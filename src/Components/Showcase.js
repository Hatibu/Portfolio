import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronsDown } from 'react-icons/bi';

const Showcase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='lg:h-screen md:h-screen overlay flex flex-col items-center justify-center text-white'>
          <h1 className='text-2xl md:text-5xl lg:text-5xl font-semibold mb-9'>
            Hello, I'm Julius Hatibu
          </h1>
          {/* <p className='text-lg md:text-3xl lg:text-3xl font-semibold mb-9'>
            <Typical
              loop={Infinity}
              wrapper='p'
              steps={[
                'Front-End Dev',
                2000,
                'Back-End Dev',
                2000,
                'Graphics Designer',
                2000,
                'Fullstack Engineer',
                2000,
              ]}
            />
          </p> */}
          <div className=''>
            <button
              onClick={() => {
                window.open('mailto:juliushatibu@gmail.com');
              }}
              className='mr-5 bg-blue-700 p-2 px-4 rounded-full transition-all hover:bg-indigo-900 '
            >
              Email Me
            </button>
            <button className='mr-5 bg-blue-700 p-2 px-4 rounded-full transition-all hover:bg-indigo-900 '>
              <Link to='/projects'>Projects</Link>
            </button>
          </div>
        </div>
        <a
          href='#about'
          className='animate-bounce text-5xl w-full grid place-items-center -mt-20'
        >
          <BiChevronsDown color='white' />
        </a>
      </section>
    </>
  );
};
export default Showcase;
