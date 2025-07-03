import React from 'react';

interface HobbyCardProps {
  title: string;
  description: string;
  image: string;
}

function HobbyCard({ title, description, image }: HobbyCardProps) {
  return (
    <div className="rounded-lg shadow-lg bg-white/10 backdrop-blur-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="text-lg text-foreground mt-2">{description}</p>
      </div>
    </div>
  );
}

export default React.memo(HobbyCard);
