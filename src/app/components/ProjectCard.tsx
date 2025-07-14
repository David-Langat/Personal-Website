import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string | null;
  image: string;
  tags: string[];
  url: string;
}

function ProjectCard({ title, description, image, tags, url }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    console.error(`Failed to load image for project: ${title}`);
    setImageSrc('/file.svg'); // Path to your fallback image
  };

  const cardContent = (
    <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-sm overflow-hidden h-full flex flex-col">
      <img 
        src={imageSrc}
        alt={title} 
        className="w-full h-48 object-cover" 
        onError={handleImageError} 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="text-lg text-foreground mt-2 flex-grow">
          {description || 'No description available.'}
        </p>
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

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
      {cardContent}
    </a>
  );
}

export default React.memo(ProjectCard);
