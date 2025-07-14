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

  return (
    <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-sm overflow-hidden h-full flex flex-col">
      <img 
        src={imageSrc}
        alt={title} 
        className="w-full h-48 object-cover" 
        onError={handleImageError} 
      />
      <div className="p-6 flex flex-col flex-grow">
        <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
          <h2 className="text-2xl font-bold text-primary hover:underline">{title}</h2>
        </a>
        <p className="text-lg text-foreground mt-2 mb-2">
          {description || 'No description available.'}
        </p>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 p-2 rounded bg-white/5">
            {tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 py-1 bg-primary/20 text-primary rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ProjectCard);

