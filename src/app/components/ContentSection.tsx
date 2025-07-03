'use client';

import React from 'react';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

function ContentSection({ title, children, className }: ContentSectionProps) {
  return (
    <section className={`flex flex-col items-center p-4 w-full ${className}`}>
      {title && <h1 className="text-4xl font-bold text-foreground mb-8">{title}</h1>}
      {children}
    </section>
  );
}

export default React.memo(ContentSection);
