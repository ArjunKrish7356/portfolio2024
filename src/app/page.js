import Image from "next/image";
import React from 'react'
import Landing from "./Assets/Landing";
import About from "./Assets/About";
import Experience from "./Assets/Experience";
import Projects from "./Assets/Projects";
import Contact from "./Assets/Contact";

export default function page() {
  return (
    <main className=" bg-white w-full overflow-hidden " >
     <Landing />
      <About /> 
      <Experience /> 
      <Projects />
      <Contact />
    </main>    
  )
}

