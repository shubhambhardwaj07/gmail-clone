import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <div>Mail section</div>
    </div>
  );
}

export default Main;
