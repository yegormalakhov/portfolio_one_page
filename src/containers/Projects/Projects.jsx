import { Container, Grid } from "@mui/material";
import { ProjectCard, ProjectsDb } from "../../components";
import './projects.css';

const Projects = () => {
  // console.log(ProjectsDb[0].url);
  return (
    <>
      <div className="section__title">
        <h1 className="section_intro gradient__text">Projects</h1>
      </div>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          {ProjectsDb.map((project, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} lg={4} xl={3}>
                <ProjectCard
                  title={project.title}
                  descr={project.description}
                  stack={project.stack}
                  imgSrc={project.imgSrc}
                  picTitle={project.pictureTitle}
                  gitHub={project.gitHub}
                  url={project.url}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
      
  );
};

export default Projects;
