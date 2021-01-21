import React from "react";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation/NavigationBar";
import { NavCard } from "../types/types";

let data: Array<NavCard> = [
  { name: "About Me", page: "", color: "#f00" },
  { name: "My Portfolio", page: "", color: "#0f0" },
  { name: "Contact Me", page: "", color: "#00f" },
];

const Home = () => {
  return (
    <Layout>
      <Avatar imgSrc={"/me.jpg"}/>
      <NavigationBar data={data} />
    </Layout>
  );
};

export default Home;
