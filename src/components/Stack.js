import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import html from "../media/logos/html-1.svg";
import css from "../media/logos/css-3.svg";
import javascript from "../media/logos/javascript-1.svg";
import react from "../media/logos/react-2.svg";
import bootstrap from "../media/logos/Bootstrap_logo.svg";
import mongodb from "../media/logos/mongodb-icon-1.svg";
import nodejs from "../media/logos/nodejs-seeklogo.com.svg";
// import react from "../media/logos/react-2.svg";

const Stack = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Stack
      </Typography>
      <Container>
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography gutterBottom variant="h5" component="div">
                  Node.js
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Stack;
