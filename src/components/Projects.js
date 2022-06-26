import { Container, Box, Grid, Typography, Button } from "@mui/material";
import cocktails from "../assets/projects/GodlyDew.png";
import todojs from "../assets/projects/RevengeToDo.png";
import rspGame from "../assets/projects/RSP.png";
import hackerNews from "../assets/projects/HackerNewsClone.png";
import temp from "../assets/projects/markus-spiske-cvBBO4PzWPg-unsplash.jpg";
import projectsDb from "./ProjectDb";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  console.log(projectsDb);
  return (
    <Container sx={{ mt: 30 }}>
      <Typography variant="h2">Projects</Typography>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          // sx={{ mt: 8 }}
        >
          {projectsDb.map((project, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} lg={4}>
                <ProjectCard
                  title={project.title}
                  descr={project.description}
                  stack={project.stack}
                  screenshot={project.url}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Projects;
