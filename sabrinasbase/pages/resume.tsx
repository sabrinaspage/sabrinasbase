import React from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation/NavigationBar";
import { NavCard } from "../types/types";

let data: Array<NavCard> = [
  { name: "Main", page: "", color: "#f00" },
  { name: "About Me", page: "about", color: "#0f0" },
  { name: "My Portfolio", page: "portfolio", color: "#0f0" },
  { name: "Contact Me", page: "socials", color: "#00f" },
];

const Home = () => {
  return (
    <Layout>
      <NavigationBar data={data} marginTop={10} />
    </Layout>
  );
};

export default Home;