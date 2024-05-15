import { SkillBadge } from "@/components/skill-badge";

export default function SkillSection() {
  return (
    <>
      <div className="w-full py-20 ">
        <div>
          <h1 className="text-4xl font-bold dark:text-slate-100 text-center pb-10">
            My Skills
          </h1>
          <div>
            <SkillBadge />
          </div>
        </div>
      </div>
    </>
  );
}
