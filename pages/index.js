import React from "react";
import Aboutme from "../components/Aboutme";
import Navbar from "../components/NavBar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <div >
        
          <Navbar />
          <section className="h-full bg-darkGrey dark:bg-white">
          <Aboutme />
            <Projects />
            
          </section>

      </div>
    </>
  );
}
