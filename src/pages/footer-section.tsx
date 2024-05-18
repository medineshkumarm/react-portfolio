export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="dark:bg-black py-2 text-center ">
      <span className=" dark:text-slate-300 text-black leading-tight opacity-90 font-semibold">
        @{year} Made with React & Shadcn UI{" "}
      </span>
    </div>
  );
}
