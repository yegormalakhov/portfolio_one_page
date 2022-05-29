import { Container, Box, Grid, Typography } from "@mui/material";
import cocktails from "../media/projects/GodlyDew.png";

const Projects = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sx={4}>
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={cocktails}
                  alt="project screenshot"
                />
              </div>
              <div className="back">
                <div className="card__header">
                  <h3>Cocktails</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={4}>
          {" "}
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={cocktails}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3>Cocktails</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sx={4}>
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={cocktails}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3>Cocktails</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
