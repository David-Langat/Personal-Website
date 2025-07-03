import React from 'react';
import Link from 'next/link';

interface NavigationCardProps {
  href: string;
  title: string;
  description: string;
}

function NavigationCard({ href, title, description }: NavigationCardProps) {
  return (
    <Link href={href}>
      <div className="p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer h-32 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <p className="text-xs text-foreground mt-1">{description}</p>
      </div>
    </Link>
  );
}

export default React.memo(NavigationCard);
