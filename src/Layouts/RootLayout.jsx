import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Container from "../Components/Container";
import LeftAsides from "../Components/Asides/LeftAsides";
import RightAsides from "../Components/Asides/RightAsides";

const RootLayout = () => {
  return (
    <>
    <Container>
      <header>
        <Header></Header>
      </header>
      <main  className="grid md:grid-cols-12 gap-5">
        <aside className="left-nav md:col-span-3">
            <LeftAsides></LeftAsides>
        </aside>
        <section  className="md:col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className="right-nav md:col-span-3">
            <RightAsides></RightAsides>
        </aside>
      </main>
      </Container>
    </>
  );
};

export default RootLayout;
