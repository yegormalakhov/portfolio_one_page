import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cocktails from "../assets/projects/GodlyDew.png";
import todojs from "../assets/projects/RevengeToDo.png";
import rspGame from "../assets/projects/RSP.png";
import hackerNews from "../assets/projects/HackerNewsClone.png";
import temp from "../assets/projects/markus-spiske-cvBBO4PzWPg-unsplash.jpg";
import projectsDb from "./ProjectDb";

const ProjectCard = ({ title, descr, stack, screenshot }) => {
  const itemData = "../assets/projects/markus-spiske-cvBBO4PzWPg-unsplash.jpg";
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <img
          component="img"
          height="auto"
          width="100%"
          src={screenshot}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descr}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProjectCard;
