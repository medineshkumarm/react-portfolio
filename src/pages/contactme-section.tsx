import { ContactBadge } from "@/components/contact-badge";

export default function ContactMe() {
  return (
    <>
      <div className="text-center lg:py-12 sm:py-8 text-black " id="CONTACT">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold dark:text-slate-200 lg:py-4 sm:py-2">
          <span className="bg-emerald-500 text-gray-200 dark:text-black rounded-md mx-2">Hire me !</span> 
          Leave a Message here 👇
        </h1>
        <p className="text-xl font-bold py-4  dark:text-slate-400 lg:py-4 sm:py-2">
          Connect with me on your preferred platform
        </p>
        <ContactBadge />
      </div>
    </>
  );
}
