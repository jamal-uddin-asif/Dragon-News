import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return <Navigate to={'/news/1'}></Navigate>
};

export default Home;
