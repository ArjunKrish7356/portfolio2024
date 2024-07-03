import Image from "next/image";
import React from 'react'
import Landing from "./Assets/Landing";
import About from "./Assets/About";

export default function page() {
  return (
    <main className=" bg-white w-full overflow-hidden " >
      <Landing />
      <About />
    </main>
  )
}

