import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export interface RenderUIProps {
  children: any;
}

function RenderUI({ children }: RenderUIProps) {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default RenderUI;
