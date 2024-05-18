import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import data from "@/data/skills-data.json";
export function SkillBadge() {
  return (
    <>
      <div className="grid grid-cols-2 mx-[100px] md:grid-cols-4 ">
        {data.map((each) => (
          <div
            className="mx-auto py-2 space-x-0 flex flex-col justify-center items-center "
            key={each.id}
          >
            <div>
              <Avatar>
                <AvatarImage src={each.filepath} alt={each["icon-name"]} />
                <AvatarFallback>{each["icon-name"]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <span className="dark:text-slate-100 ">{each["icon-name"]}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
