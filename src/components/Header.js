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

const Header = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className="header">
          <Typography variant="h5" component="div">
            Yegor Malakhov
          </Typography>
          <Box className="headerMenu">
            <Typography sx={{ minWidth: 100 }}>About</Typography>
            <Typography sx={{ minWidth: 100 }}>Stack</Typography>
            <Typography sx={{ minWidth: 100 }}>Projects</Typography>
            <Typography sx={{ minWidth: 100 }}>Contacts</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
