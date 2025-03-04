import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import {FloatingDock} from "@/components/ui/FloatingDock";
import { navlinks } from "./navData";
import RecentProjects from "@/components/RecentProjects";
import { WorkExperience } from "@/components/WorkExperience";
import { Approach } from "@/components/Approach";
import { Skills } from "@/components/Skills";
import CustomFooter from "@/components/CustomFooter"; 



export default function Home() {
 
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full  ">
        
          <FloatingDock
            items={navlinks}
            desktopClassName={"hidden md:flex"}
          />
          <Hero/>
          <Grid/>
          <Skills/>
          <RecentProjects/>
          {/* <Skills/> */}
          <WorkExperience/>
          <Approach/>
          <CustomFooter/>
          
          
        
      </div>
      
    </main>
  );
}
