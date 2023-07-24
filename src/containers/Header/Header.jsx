import React, { useState } from "react";
import {
  Slide,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './header.css';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide in={!trigger}>{children}</Slide>;
}

const Header = ({ navToSt, navToAb, navToPr,navToCon, ...props }) => {
  const [visiblity, setVisibility] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function hideShowNav(e) {
    setVisibility(!visiblity);
    setExpanded(!expanded);
  }

  const menuItems = ["About", "Stack", "Projects", "Contacts"]
  return (
    <HideOnScroll {...props}>
    <header className="primary-header flex">
      <div>
        <div
          className="logo"
        >
          Yegor Malakhov
        </div>
      </div>
      <IconButton
              size="large"
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded={expanded}
              onClick={hideShowNav}
              color="inherit"
              align="right"
              sx={{ display: { xs: "block", sm: "none" }}}
            >
              <MenuIcon />
            </IconButton>
      <nav
        id="primary-navigation"
        data-visible={visiblity}
        className="primary-navigation flex"
      >
        {menuItems.map((item, index) => {
          return <a
          key={index}
          className="uppercase"
          onClick={()=>{
            hideShowNav(); 
            switch(index){
              case 0:
                navToAb();
                break;
              case 1:
                navToSt();
                break;
              case 2:
                navToPr();
                break;
              case 3:
                navToCon();
                break;
              default:
                navToAb();
            }
            }
          } >
          {menuItems[index]}
        </a>
        })}
      </nav>
    </header>
    </HideOnScroll>
  );
};

export default Header;