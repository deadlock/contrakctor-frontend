import React from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navBar";
import "./mainContainer.scss";

export const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      <div className={"main"}>
        <div className={["container"].join(" ")}>{children}</div>
      </div>
    </>
  );
};
