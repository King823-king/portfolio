import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import everyrealmImg from "@/public/everyrealm.png";
import philipImg from "@/public/Philips.png";
import mindstudioImg from "@/public/mindstudio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Virginia Commonwealth University",
    location: "Charlottesville, VA",
    description:
      "During University, I learned various programe languages and technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "New York, NY",
    description:
      "I worked as software engineer for 2 years in New York. I acquired  front-end technologies includes React, Next.js, TypeScript, Tailwind, Prisma,Vite etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Fairfax, VA",
    description:
      "I worked as software engineer, expertise front-end deveopment and acquired back-end frameworks such as Node.js,Express.js etc.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "New York, NY",
    description:
      "I mentored junior developers and worked on various projects. So I was succed in application development and showed ability to rapidly prototype and iterate on front-end designs.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "everyrealm",
    siteUrl: "https://www.everyrealm.com/",
    description:
      "I worked as a front-end developer on this startup project for 3 months. Users can enjoy playing game.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: everyrealmImg,
  },
  {
    title: "Philip's",
    siteUrl: "https://www.usa.philips.com/",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: philipImg,
  },
  {
    title: "Mind Studios",
    description:
      "This is web application for Mind Studios ,I took part in front-end development.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: mindstudioImg,
    siteUrl:"https://themindstudios.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "SASS", "LESS", "JQuery", "AJAX", "JSON",
  "React",
  "Next.js",
  "Vite",
  "Nx",
  "Vue.js",
  "Angular",
  "Redux", "Nest.js", "Spring Boot",
  "Material UI", "Bootstrap", "Chakra UI", "Semantic UI", "Tailwind CSS", "Ant Design",
  "Java",
  "Python","C", "C++","PHP",
  "TypeScript",
  "MySQL", "Oracle", "SQLite",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Django",
  "etc",

] as const;
