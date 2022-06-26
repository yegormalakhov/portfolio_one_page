import { Container, Box, Grid, Typography, Button } from "@mui/material";
import projectsDb from "./ProjectDb";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  console.log(projectsDb[0].url);
  return (
    <Container sx={{ mt: 30 }}>
      <Typography variant="h2">Projects</Typography>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 8 }}
        >
          {projectsDb.map((project, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} lg={4}>
                <ProjectCard
                  title={project.title}
                  descr={project.description}
                  stack={project.stack}
                  src={project.url}
                  picTitle={project.pictureTitle}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box component="img" src={require("../media/projects/GodlyDew.png").default} alt='ji'  width='200px' height='300px'/>
      </Container>
    </Container>
  );
};

export default Projects;
