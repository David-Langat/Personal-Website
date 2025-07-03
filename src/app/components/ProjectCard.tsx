import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="text-lg text-foreground mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-primary/20 text-primary rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProjectCard);
