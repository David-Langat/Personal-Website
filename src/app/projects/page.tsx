'use client';

import ContentSection from '../components/ContentSection';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <ContentSection title="Projects" className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </ContentSection>
  );
}
