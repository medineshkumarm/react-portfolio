import { Button } from "@/components/ui/button";
import { GridSmallBackgroundDemo } from "@/components/bg-effects";
import { Navbar } from "@/components/nav-bar";
export default function Hero() {
  return (
    <>
      <Navbar />
    
    <GridSmallBackgroundDemo>
      <div className="w-full py-24 flex flex-col items-center">
        <div className="text-center  text-slate-900">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold dark:text-slate-200 ">
            Dinesh Kumar M
          </h1>

          <p className="w-full font-semibold mx-auto text-md sm:text-lg lg:text-2xl dark:text-slate-400 sm:text-justify py-2">
            Hi👋! I'm a MERN stack web developer with a focus on creating
            beautiful and functional websites.
            <br />
            Want to know more about
            <span className="bg-emerald-500  text-xl font-bold dark:text-black text-gray-200 mx-1 px-2 rounded-sm inline-block ">
              my work?
            </span>
            Check out my projects
          </p>
        </div>
        <div className="flex gap-2 my-4">
          <Button variant="default">View Project</Button>
          <Button variant="default">Contact me</Button>
        </div>
      </div>
    </GridSmallBackgroundDemo>
    </>
  );
}
