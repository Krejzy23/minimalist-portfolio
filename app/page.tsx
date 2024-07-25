import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


const Home=()=> {
  return (
    <main className="relative flex flex-col justify-center items-center bg-black-100 overflow-hidden mx-auto px-5 sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
export default Home;