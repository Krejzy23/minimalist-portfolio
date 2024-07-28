'use client'

import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects2 from "@/components/RecentProjects2";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";


const Home=()=> {
  return (
    <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto px-5 sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        <RecentProjects2/>
        <Clients />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
export default Home;