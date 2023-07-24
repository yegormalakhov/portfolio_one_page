import { Container, Grid, Box } from "@mui/material";
import gmailLogo from "../../media/logos/gmail-icon.svg";
import whatsupLogo from "../../media/logos/whatsapp-icon.svg";
import githubLogo from "../../media/logos/github-icon-1.svg";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Grid
            container
            spacing={10}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Box
                component="img"
                className="footerImg"
                alt="contact logo"
                src={gmailLogo} 
              ></Box>
            </Grid>
            <Grid item>
              <Box
                component="img"
                className="footerImg"
                alt="contact logo"
                src={whatsupLogo}
              ></Box>
            </Grid>
            <Grid item>
              <Box
                component="img"
                className="footerImg"
                alt="contact logo"
                src={githubLogo}
              ></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
