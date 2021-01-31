import React from "react";
import Layout from "../components/Layout";
import NavigationBar from "../components/Navigation/NavigationBar";
import { AboutMe, NavCard } from "../types/types";
import SlideUpText from "../components/Text/SlideUpText";
import AboutList from "../components/AboutList/AboutList";

let data: Array<NavCard> = [
  { name: "Main", page: "", color: "#f00" },
  { name: "My Portfolio", page: "portfolio", color: "#0f0" },
  { name: "My Resume", page: "resume", color: "#0f0" },
  { name: "Contact Me", page: "socials", color: "#00f" },
];

let aboutMe: Array<AboutMe> = [
  { descriptor: "College", description: "City College of New York" },
  { descriptor: "Majoring In", description: "B.S. of Computer Science" },
  { descriptor: "College Year", description: "Third-Year" },
  { descriptor: "Birthday", description: "March 29, 2000" },
  { descriptor: "Pronouns", description: "she/her/hers" },
  { descriptor: "Nationality", description: "American" },
  { descriptor: "Ethnicity", description: "Dominican" },
  {
    descriptor: "Programming Languages",
    description: "TypeScript, Python, JavaScript, C#, C++, Java",
  },
  {
    descriptor: "Technologies",
    description:
      "Git, Github, REST API, React, Tailwind CSS, BeautifulSoup, NextJS, Typeorm",
  },
  {
    descriptor: "Operating Systems",
    description: "Windows, Arch Linux, Ubuntu",
  },
];

const Home = () => {
  return (
    <Layout>
      <NavigationBar data={data} />
      <div
        style={{
          width: "100%",
        }}
      >
        <AboutList data={aboutMe}></AboutList>
      </div>
    </Layout>
  );
};

export default Home;
