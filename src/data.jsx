import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { MdOutlineSwapCalls } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import mixMaster from '/src/assets/mix-master.png'
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind css',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Ability to speed up the development process using pre-built CSS classes for styling, which saves you the time and effort of writing custom CSS from scratch.',
  },
  {
    id: nanoid(),
    title: 'Flexibility',
    icon: <MdOutlineSwapCalls className="h-16 w-16 text-emerald-500" />,
    text: 'Flexibility with using multiple programming languages like C++, C#, Python and JavaScript',
  },
  {
    id: nanoid(),
    title: 'Database',
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: 'Proficient in SQL and MongoDB, adept at designing and managing data storage for optimal efficiency in information handling.',
  },
  {
    id: nanoid(),
    title: 'OOP, Data structure & Algorithms',
    icon: <SlGraph className="h-16 w-16 text-emerald-500" />,
    text: 'I have the basic knowledge for each of them, as I know about classes, objects, stacks, linked lists, binary trees, sorting algorithms, etc.',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: { mixMaster },
    url: 'https://react-mix-master-1.netlify.app/',
    github: 'https://github.com/khaleed2002/react-mix-master',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]