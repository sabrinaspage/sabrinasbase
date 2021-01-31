import React from "react";
import Avatar from "../components/Avatar";
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation/NavigationBar";
import { NavCard } from "../types/types";
import styles from "../styles/components/Avatar.module.scss";
import Text from "../components/Text/Text";

let top: Array<NavCard> = [
  { name: "About Me", page: "about", color: "#f00" },
  { name: "My Portfolio", page: "portfolio", color: "#0f0" },
];

let bottom: Array<NavCard> = [
  { name: "My Resume", page: "resume", color: "#0f0" },
  { name: "Contact Me", page: "socials", color: "#00f" },
];

const Home = () => {
  return (
    <Layout>
      <NavigationBar data={top} marginTop={40} marginBottom={-70} />
      <div className={styles.avatarDiv}>
        <Avatar imgSrc={"/me.jpg"} />
      </div>
      <Text  fontSize="24px"> Sabrina's Page</Text>
      <NavigationBar data={bottom} marginTop={40} />
    </Layout>
  );
};

export default Home;
