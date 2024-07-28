'use client'

import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


const Home=()=> {
  return (
    <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto px-5 sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        <Projects/>
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
export default Home;