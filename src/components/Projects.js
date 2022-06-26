import { Container, Box, Grid, Typography, Button } from "@mui/material";
import cocktails from "../media/projects/GodlyDew.png";
import todojs from "../media/projects/RevengeToDo.png";
import rspGame from "../media/projects/RSP.png";
import hackerNews from "../media/projects/HackerNewsClone.png";
import temp from "../media/projects/markus-spiske-cvBBO4PzWPg-unsplash.jpg";
const Projects = ({ projectsSection }) => {
  return (
    <Container ref={projectsSection} className="ProjectsSection">
      <Typography variant="h2">Projects</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={6}>
          <div className="project" width={{ xs: 30, sm: 50 }}>
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
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                  <Button variant="contained" href="https://google.com">
                    to the project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={10} sm={6}>
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={rspGame}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3 variant="h6">Rock, Scissors, Paper game</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                  <Button variant="contained" href="https://google.com">
                    to the project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={10} sm={6}>
          {" "}
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={todojs}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3>Revenge ToDo</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                  <Button variant="contained" href="https://google.com">
                    to the project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} sm={6}>
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={hackerNews}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3>Hacker News website-clone</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                  <Button variant="contained" href="https://google.com">
                    to the project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={10} sm={6}>
          <div className="project">
            <div className="card__inner">
              <div className="front">
                <img
                  className="projectImg"
                  src={temp}
                  alt="project screenshot"
                />
              </div>

              <div className="back">
                <div className="card__header">
                  <h3>tepm project card</h3>
                </div>
                <div className="card__body">
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eveniet exercitationem? Eaque enim doloribus,
                  </Typography>
                  <Button variant="contained" href="https://google.com">
                    to the project
                  </Button>
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
