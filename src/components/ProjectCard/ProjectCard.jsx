import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardAction from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './projectCard.css';

const ProjectCard = ({ title, descr, stack, imgSrc, gitHub, url}) => {
  return (
    <Card className="card" sx={{ maxWidth: 500, backgroundColor:"var(--clr-blue)", color:"white", textAlign:"left" }}>
      
        <CardMedia
          component="img"
          height="350"
          width="100%"
          src={imgSrc}
          alt="green iguana"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="var(--clr-orange)" component="div">
            {title}
          </Typography>
          {stack.map((tag, index) => <p className="tags" key={title + index}>{tag} </p>)}
          <br/>
          <br/>
          <Typography variant="var(--font-ysubeau)" color="var(--txt-clr-light)" lineHeight={1.75}>
            {descr}
          </Typography>
        </CardContent>
        <CardAction>
          <Button type="button" href={url} target="_blank">Preview</Button>
          <Button type="button" href={gitHub} target="_blank">Github</Button>
        </CardAction>
    </Card>
  );
};
export default ProjectCard;
