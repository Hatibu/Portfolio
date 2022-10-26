import { MdLanguage, MdDevicesOther, MdViewCompact } from 'react-icons/md';
import { BsPlug } from 'react-icons/bs';
import { FaBezierCurve, FaDatabase } from 'react-icons/fa';

const service = [
  {
    id: 0,
    icon: MdLanguage,
    title: 'UI/UX DESIGN',
    desc: 'I have experience working with teams to brainstorm and whiteboard concepts. I can create wireframes at levels of fidelity and, and enjoy working with teams to build concepts out',
  },
  {
    id: 1,
    icon: MdDevicesOther,
    title: 'FRONT-END DEVELOPMENT',
    desc: 'I can build responsive, and optimized SPA user interfaces by using ReactJS, Tailwindcss, GraphQL, and Firebase',
  },
  {
    id: 2,
    icon: MdViewCompact,
    title: 'BACK-END DEVELOPMENT',
    desc: 'I can build scalable and optimized backend services using Django, Nodejs, Express, Firebase, and AWS',
  },
  {
    id: 3,
    icon: BsPlug,
    title: 'RESTFUL API DEVELOPMENT',
    desc: 'I can build scalable and optimized RESTful API using Django, NodeJS, and Express',
  },
  {
    id: 4,
    icon: FaBezierCurve,
    title: 'GRAPHICS DESIGN',
    desc: 'I work with certain designing tools to high-fidelity designs, brands, and prototypes. I can design accessible and usable products which aids business growth',
  },
  {
    id: 5,
    icon: FaDatabase,
    title: 'DATABASE DEVELOPMENT',
    desc: 'I can build scalable and optimized database services from requirements and implemention using MongoDB, PostgreSQL, Mysql, and Firebase',
  },
];
export default service;
