import React from 'react';

interface ExperienceEntryProps {
  title: string;
  company: string;
  date: string;
  description: string[]; // Changed to array of strings
}

function ExperienceEntry({ title, company, date, description }: ExperienceEntryProps) {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <h3 className="text-xl font-semibold text-foreground">{company}</h3>
      <p className="text-sm text-muted-foreground mt-1">{date}</p>
      <div className="text-base text-foreground mt-4 space-y-2">
        {description.map((point, index) => (
          <p key={index}>• {point}</p>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ExperienceEntry);
