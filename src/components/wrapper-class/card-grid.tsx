import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

interface CardGridProps {
  children?: React.ReactNode;
  ProjectTitle: string;
  ProjectDescription?: string;
  ProjectImageSrc?: string;
  liveLink?: string;
  repoLink?: string;
}
export const CardGrid = ({
  ProjectTitle,
  ProjectDescription,
  ProjectImageSrc,
  liveLink,
  repoLink,
}: CardGridProps) => {

  const handleLiveLinkClick = () => {
    if (liveLink) {
      window.open(liveLink, '_blank');
    }
  };

  const handleGithubClick = () => {
    if (repoLink) {
      window.open(repoLink, '_blank');
    }
  };
  return (
    <Card className=" mx-auto my-2">
      <CardHeader>
        <CardTitle>{ProjectTitle}</CardTitle>
        <CardDescription>{ProjectDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={ProjectImageSrc}
          alt="Project Image"
          className="w-full h-[150px] rounded-md"
        />
        {/* <Button variant="link" className="underline self-end from-indigo-500 to-purple-500 rounded-lg">
          Know more
        </Button> */}

       
      </CardContent>
      <CardFooter>
        <Button size="default" variant="outline" className="mx-auto" onClick={handleLiveLinkClick}>
          Live Link
        </Button>
        <Button size="default" variant="outline" className="mx-auto"  onClick={handleGithubClick}>
          <FaGithub className="h-5 w-5 pr-1" />
          Github
        </Button>
      </CardFooter>
    </Card>
  );
};
