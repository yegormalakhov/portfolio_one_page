import { Typography } from "@mui/material";
import './hero.css';
import ai  from '../../media/ai.png';

const Hero = () => {
  return (
        <div className="hero__section">
          <div className="about">
            <Typography className="gradient__text" variant="h1" component="h1" sx={{ margin: "1rem"}}>
              Hello, my dear visitor!
            </Typography>
            <Typography variant="body1" align="left">
            My name is Yegor, as you already know or guest from the site name, and I'm a hobby full stack developer. This website was created with the sole purpose of presenting some of my programming skills and humble projects. I use mostly Javascript Library React.js for my projects and tend to be more into frontend than backend development. 
            </Typography>
          </div>
          <div className="hero__img">
            <img src={ai} alt="ai img"/>
          </div>
        </div>
          
  );
};

export default Hero;
