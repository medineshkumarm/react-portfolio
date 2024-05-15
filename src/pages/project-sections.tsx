import { CardGrid } from "@/components/wrapper-class/card-grid";
import data from "@/data/projects-data.json"
function ProjectSection() {
  return (
    <>
      <div className="w-screen flex flex-col">
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
    </>
  );
}

export default ProjectSection;
