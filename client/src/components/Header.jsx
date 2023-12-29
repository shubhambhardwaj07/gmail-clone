import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Tune from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { gmailLogo } from "../constants/constant";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: "24px",
  minWidth: "690px",
  maxWidth: "720px",
  height: "48px",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  "& > div": {
    width: "100%",
    padding: "0 5px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  justifyContent: "end",
  display: "flex",

  "& > svg": {
    marginLeft: "20px",
  },
});

function Header({ toggleDrawer }) {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            alt="logo"
            style={{ width: "120px", marginLeft: "15px" }}
          />
          <SearchWrapper>
            <Search color="action" />
            <InputBase></InputBase>
            <Tune color="action" />
          </SearchWrapper>
          <OptionsWrapper>
            <HelpOutlineIcon color="action" />
            <SettingsIcon color="action" />
            <AppsIcon color="action" />
            <AccountCircleIcon color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

export default Header;
