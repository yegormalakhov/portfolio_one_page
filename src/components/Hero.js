import { Typography, Container, Box, Grid } from "@mui/material";
import hero from "../media/hero.jpg";

const Hero = () => {
  return (
    <Container className="heroSection">
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={12} sm={7} md={4} lg={3}></Grid>
        <Grid item xs={12} sm={10} md={8} lg={9}>
          <Box className="about">
            <Typography variant="h1" component="h1">
              Hello, my dear visitor!
            </Typography>
            <Typography variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat elementum facilisis leo. Non nisi est sit amet facilisis
              magna etiam tempor. Sed viverra ipsum nunc aliquet bibendum. Diam
              vulputate ut pharetra sit amet aliquam id. In arcu cursus euismod
              quis. Neque volutpat ac tincidunt vitae semper quis. Diam
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
