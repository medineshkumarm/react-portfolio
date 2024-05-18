import { GridBackgroundDemo } from "@/components/bg-effects";
import { CardGrid } from "@/components/wrapper-class/card-grid";
import data from "@/data/projects-data.json";
function ProjectSection() {
  return (
    <>
      <GridBackgroundDemo>
        <div id="PROJECTS">
          <h2 className="text-4xl font-bold  text-center my-6 dark:text-slate-200 text-black">
            My Projects
          </h2>
        </div>
        <div className="w-screen flex flex-col text-wrap text-center">
          <div className="mx-auto md:w-1/2 sm:w-full  grid md:grid-cols-2  my-auto">
            {data.map((each) => (
              <CardGrid
                key={each.id}
                ProjectTitle={each.title}
                ProjectDescription={each.description}
                ProjectImageSrc={each.imagesrc}
                liveLink={each.livelink}
                repoLink={each.repolink}
              />
            ))}
          </div>
        </div>
      </GridBackgroundDemo>
    </>
  );
}

export default ProjectSection;
