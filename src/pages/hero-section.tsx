import {Button} from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="w-full py-24 flex flex-col items-center ">
      <div className="text-center  text-slate-900">
        <h1 className="text-5xl font-bold dark:text-slate-200 py-1">Dinesh Kumar M</h1>
        <p className="text-2xl font-semibold dark:text-slate-300 py-0.5">MERN Stack Web Developer</p>
        <p className="w-1/2 mx-auto text-xl  dark:text-slate-400 text-justify leading-tight ">
          I'm a passionate web developer with a focus on creating beautiful and
          functional websites. I have experience in a variety of technologies
          and am always eager to learn more.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="default">
            View Project
        </Button>
        <Button variant="default">
            Contact me
        </Button>
      </div>
    </div>
  );
}
