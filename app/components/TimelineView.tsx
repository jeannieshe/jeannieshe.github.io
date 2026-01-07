import Card from "./card";
import { ProjectNode } from "../projects/projectsData";

interface TimelineViewProps {
  projects: ProjectNode[];
}

export default function TimelineView({ projects }: TimelineViewProps) {
  return (
    <div className="flex flex-col gap-y-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          tech={project.tech}
          keywords={project.keywords}
          links={project.links}
          images={project.images}
          imageHeight={project.imageHeight}
        />
      ))}
    </div>
  );
}

