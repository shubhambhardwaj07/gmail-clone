import React from "react";
import { Drawer, styled } from "@mui/material";
import SideBarContent from "./SideBarContent";

function SideBar({ openDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: "250px",
          background: "#F5F5F5",
          borderRight: "none",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
}

export default SideBar;
