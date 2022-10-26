import React from 'react';
import '../index.css';
import { MdLanguage } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';
import { MdViewCompact } from 'react-icons/md';
import { BsPlug } from 'react-icons/bs';
import { FaBezierCurve, FaDatabase } from 'react-icons/fa';

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
          <div className='lg:flex md:flex mt-10 lg:mt-20 text-center justify-center '>
            {/*service 1 */}
            <div className='max-w-sm w-full rounded-xl lg:p-10 overflow-hidden shadow-lg bg-white m-1.5 '>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <MdLanguage className='w-12 h-12 mt-5 ml-3 '></MdLanguage>
                </span>
                <h1 className='font-bold text-xl mb-2'>UI/UX DESIGN</h1>
                <p className='text-gray-700 text-base'>
                  I have experience working with teams to brainstorm and
                  whiteboard concepts, I can create wireframes at varying levels
                  of fidelity, and enjoy working with devs to build ideas out.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'></div>
            </div>
            {/*service 2*/}
            <div className='max-w-sm px-4 lg:p-10 w-full  rounded-xl overflow-hidden shadow-lg bg-white m-1.5'>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <MdDevicesOther className='w-12 h-12 mt-5 ml-3 '></MdDevicesOther>
                </span>
                <h1 className='font-bold text-xl mb-2'>FRONT-END DEV </h1>
                <p className='text-gray-700 text-base'>
                  I can build responsive and optmized SPA user interface's by
                  using HTML5, CSS3, React.js, GraphQL, and Firebase.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'></div>
            </div>
            {/*service 3 */}
            <div className='max-w-sm px-4 lg:p-10 w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5'>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <MdViewCompact className='w-12 h-12 mt-5 ml-3 '></MdViewCompact>
                </span>

                <h1 className='font-bold text-xl '>BACK-END DEV</h1>
                <p className='text-gray-700 text-base'>
                  I can build scalable and optimized backend services by using
                  Django(Python), Nodejs(Express), Firebase, and handling
                  databases.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'></div>
            </div>
          </div>
        </div>

        {/*second service section */}
        <div className='w-full px-6 -ml-2'>
          <div className=' lg:flex md:flex mt-10 text-center justify-center '>
            {/*service 1 */}
            <div className='max-w-sm  lg:p-10 w-full overflow-hidden rounded-xl shadow-lg bg-white m-1.5'>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <BsPlug className='w-12 h-12 mt-5 ml-3 '></BsPlug>
                </span>

                <h1 className='font-bold text-xl mb-2'>API DEVELOPMENT</h1>
                <p className='text-gray-700 text-base'>
                  I can build scalable and optimized REST API by using Django,
                  and NodeJS.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'></div>
            </div>
            {/*service 2*/}
            <div className='max-w-sm  lg:p-10 w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5'>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <FaBezierCurve className='w-12 h-12 mt-5 ml-3 '></FaBezierCurve>
                </span>
                <h1 className='font-bold text-xl mb-2'>GRAPHICS DESIGN </h1>
                <p className='text-gray-700 text-base'>
                  I work with certain design tools to create high-fidelity
                  designs and prototypes. I design accessible and usable
                  products which aid business growth.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'></div>
            </div>
            {/*service 3 */}
            <div className='max-w-sm  lg:p-10 w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5'>
              <div className='px-6 py-4'>
                <span className='icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center'>
                  <FaDatabase className='w-12 h-12 mt-5 ml-3 '></FaDatabase>
                </span>

                <h1 className='font-bold uppercase text-xl mb-2'>
                  DATABASE DESIGN
                </h1>
                <p className='text-gray-700 text-base'>
                  I can build scalable and optimized database services from
                  requirement analysis, database design, and implementation by
                  using MongoDB, firebase, Mysql, PostgreSQL, and SQL server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
