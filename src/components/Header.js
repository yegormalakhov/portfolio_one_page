import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
} from "@mui/material";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide in={!trigger}>{children}</Slide>;
}

const Header = ({ navToSt, navToAb, navToPr, ...props }) => {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className="header">
          <Typography variant="h5" component="div">
            Yegor Malakhov
          </Typography>
          <Box className="headerMenu">
            <Typography
              onClick={navToAb}
              sx={{ minWidth: 100, cursor: "pointer" }}
            >
              About
            </Typography>

            <Typography
              onClick={navToSt}
              sx={{ minWidth: 100, cursor: "pointer" }}
            >
              Stack
            </Typography>

            <Typography
              onClick={navToPr}
              sx={{ minWidth: 100, cursor: "pointer" }}
            >
              Projects
            </Typography>
            <Typography sx={{ minWidth: 100 }}>Contacts</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
