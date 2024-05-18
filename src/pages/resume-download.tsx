import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "@/components/theme-provider";
import "react-toastify/dist/ReactToastify.css";

export default function ResumeSection() {
  const setTheme = useTheme();

  const resume = "my-resume.pdf";

  const handleDownload = () => {
    toast.success("Thank You for downloading !");
  };
  return (
    <>
      <div className="w-full flex flex-col gap-2 items-center pb-24  " id="RESUME">
        <h1 className=" text-center text-lg md:text-2xl lg:text-4xl text-black font-bold dark:text-slate-200 ">
          Ready to take the next step ? Get my{" "}
          <span className="underline underline-offset-4 decoration-wavy  decoration-emerald-500 decoration-4 font-bold  px-1  rounded-sm ">
            resume
          </span>
          here{" "}
        </h1>
        <a href={resume} download="medinesh-resume.pdf" className="p-4 flex justify-center">
          <Button variant="default" onClick={handleDownload} className="border-2 border-emerald-500 ">
            Download Resume
            <MdDownload className="ml-1 scale-110" />
          </Button>
        </a>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={setTheme.theme}
        />
      </div>
    </>
  );
}

