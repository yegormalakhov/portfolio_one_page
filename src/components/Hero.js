import { Typography, Container, Box } from "@mui/material";
import hero from "../media/hero.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        m: 2,
        p: 2,
      }}
    >
      <div className="heroSection">
        <Box
          component="img"
          className="selfie"
          alt="Selfie"
          src={hero}
        />
        <Box className="about">
          <Typography variant="h1" component="h1">
            Hello, my dear visitor!
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
            elementum facilisis leo. Non nisi est sit amet facilisis magna etiam
            tempor. Sed viverra ipsum nunc aliquet bibendum. Diam vulputate ut
            pharetra sit amet aliquam id. In arcu cursus euismod quis. Neque
            volutpat ac tincidunt vitae semper quis. Diam vulputate ut pharetra
            sit amet aliquam id diam maecenas. Ut eu sem integer vitae justo
            eget magna fermentum iaculis. Mauris augue neque gravida in. Sed
            viverra tellus in hac habitasse platea. Donec massa sapien faucibus
            et. Vel quam elementum pulvinar etiam non quam lacus. Ac auctor
            augue mauris augue neque gravida in. Arcu bibendum at varius vel
            pharetra vel turpis vitae congue mauris rhoncus aenean. Erat velit
            scelerisque in dictum non consectetur. Elit eget gravida cum sociis
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default Hero;
