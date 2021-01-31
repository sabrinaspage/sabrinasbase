import React from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation/NavigationBar";
import { NavCard } from "../types/types";
import SlideUpText from "../components/Text/SlideUpText";

let data: Array<NavCard> = [
  { name: "Main", page: "", color: "#f00" },
  { name: "My Portfolio", page: "portfolio", color: "#0f0" },
  { name: "My Resume", page: "resume", color: "#0f0" },
  { name: "Contact Me", page: "socials", color: "#00f" },
];

const Home = () => {
  return (
    <Layout>
      <NavigationBar data={data} marginTop={10} />
      <div
        style={{
          position: "fixed",
        }}
      >
        <SlideUpText>
          I am currently a third-year student at the City College of New York,
          currently pursuing a B.S in Computer Science.
          <br></br>I love the field of technology and want to explore as many
          fields as possible.
          <br></br>
          Languages: TypeScript, Python, JavaScript, C#, C++, Java
          <br></br>
          Technologies: Git, Github, REST API, React, Tailwind CSS,
          BeautifulSoup, NextJS, Typeorm
          <br></br>
          Operating Systems: Windows, Arch Linux, Ubuntu
        </SlideUpText>
      </div>
    </Layout>
  );
};

export default Home;
