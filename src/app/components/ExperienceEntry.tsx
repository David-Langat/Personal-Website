import React from 'react';

interface ExperienceEntryProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

function ExperienceEntry({ title, company, date, description }: ExperienceEntryProps) {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <h3 className="text-xl font-semibold text-foreground">{company}</h3>
      <p className="text-sm text-muted-foreground mt-1">{date}</p>
      <p className="text-lg text-foreground mt-4">{description}</p>
    </div>
  );
}

export default React.memo(ExperienceEntry);
