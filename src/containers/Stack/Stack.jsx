import { Typography, Grid } from "@mui/material";
import './stack.css';
import html from '../../media/logos/html-1.svg';
import css from '../../media/logos/css-3.svg';
import js from '../../media/logos/javascript-1.svg';
import reactLogo from '../../media/logos/react-2.svg';
import nodejs from '../../media/logos/nodejs-seeklogo.com.svg';
import mongodb from '../../media/logos/mongodb-icon-1.svg';
import express from '../../media/logos/express-js.png';
import postgresql from '../../media/logos/postgresql.svg';

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  // "Bootstrap",
  // "Material UI",
];
const backend = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
];

const otherTech = [
  // "Contentful",
  "Postman",
  "VS Code",
  // "Discord",
  "Github",
  "Netlify",
];

const learning = ["React Native", "Next.js"]
const Stack = () => {
  return (
   <>
    <div className="stack__title">
        <h1 className="stackIntro gradient__text">Experience with</h1>
    </div>
    <div className="stackContainer">
      <div className="stack__subtopic frontend">
        <div className="stack__list">
         <Typography variant="h5" component="h2">Frontend</Typography>
         <ul>
           {frontend.map(language => {
             return <li>{language}</li>
           })}
         </ul>
       </div>
        <div className="stack__imgs-container">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={reactLogo} alt="" />
        </div>
      </div>
      <div className="stack__subtopic backend">
        <div className="stack__imgs-container">
          <img src={nodejs} alt="" />
          <img src={express} alt="" />
          <img src={mongodb} alt="" />
          <img src={postgresql} alt="" />
        </div>
        <div className="stack__list">
        <Typography variant="h5" component="h2">Backend</Typography>
         <ul> {backend.map(language => {
             return <li>{language}</li>
           })}</ul>
        </div>
      </div>
      </div>
   </>
  )
}
  

export default Stack;
