import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgress from "@mui/material/LinearProgress";
import hero from "../media/hero.jpg";

const stackLanguages = [
  { name: "HTML", progress: 80 },
  { name: "CSS", progress: 70 },
  { name: "JavaScript", progress: 60 },
];

const libraries = [{ name: "React.js", progress: 60 }];
const cssFrameworks = [
  { name: "Bootstrap", progress: 70 },
  { name: "Material UI", progress: 70 },
];
const backend = [
  { name: "Node.js", progress: 30 },
  { name: "Express.js", progress: 50 },
  { name: "MongoDB", progress: 10 },
  { name: "SQL", progress: 40 },
];

const otherTech = [
  { name: "Contentful", progress: 30 },
  { name: "Postman", progress: 30 },
  { name: "CodeVS", progress: 50 },
  { name: "Discord", progress: 50 },
  { name: "Github", progress: 60 },
  { name: "Netlify", progress: 30 },
];

const Stack = () => {
  return (
    <Container className="StackSection">
      <Typography variant="h2" className="sectionTitle">
        Stack
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            className="selfie"
            alt="Selfie"
            src={hero}
          />
          <Typography variant="body1" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            elementum facilisis leo. Non nisi est sit amet facilisis magna etiam
            tempor. Sed viverra ipsum nunc aliquet bibendum. Diam vulputate ut
            pharetra sit amet aliquam id.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {stackLanguages.map((language, index) => {
            return (
              <Grid container key={index}>
                <Grid item xs={12}>
                  <Typography sx={{ mt: 2 }} variant="h6" component="div">
                    {language.name}
                  </Typography>
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={language.progress}
                          sx={{ height: "10px" }}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            );
          })}
          {libraries.map((library, index) => {
            return (
              <Grid container key={index}>
                <Grid item xs={12}>
                  <Typography sx={{ mt: 2 }} variant="h6" component="div">
                    {library.name}
                  </Typography>
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={library.progress}
                          sx={{ height: "10px" }}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            );
          })}
          {cssFrameworks.map((cf, index) => {
            return (
              <Grid container key={index}>
                <Grid item xs={12}>
                  <Typography sx={{ mt: 2 }} variant="h6" component="div">
                    {cf.name}
                  </Typography>
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={cf.progress}
                          sx={{ height: "10px" }}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            );
          })}
          {backend.map((backendTech, index) => {
            return (
              <Grid container key={index}>
                <Grid item xs={12}>
                  <Typography sx={{ mt: 2 }} variant="h6" component="div">
                    {backendTech.name}
                  </Typography>
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={backendTech.progress}
                          sx={{ height: "10px" }}
                        />
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            );
          })}
          <Box sx={{ width: "100%", mt: 3 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Other familiar technologies and tools.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {otherTech.map((other, index) => {
                  return (
                    <Grid container key={index}>
                      <Grid item xs={12}>
                        <Typography sx={{ mt: 2 }} variant="h6" component="div">
                          {other.name}
                        </Typography>
                        <List dense disablePadding>
                          <ListItem disablePadding>
                            <Box sx={{ width: "100%" }}>
                              <LinearProgress
                                variant="determinate"
                                value={other.progress}
                                sx={{ height: "10px" }}
                              />
                            </Box>
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>

      {/* <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            {" "}
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={html}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  HTML
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={css}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  CSS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={javascript}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  JavaScript
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={react}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  React
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={bootstrap}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  Bootstrap
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={mongodb}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  MongoDB
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, p: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image={nodejs}
                alt="html logo"
              />
              <CardContent>
                <Typography ottom variant="h5" component="div">
                  Node.js
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
    </Container>
  );
};

export default Stack;
