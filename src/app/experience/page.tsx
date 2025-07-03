'use client';

import ContentSection from '../components/ContentSection';
import { experienceData } from '../data/experience';
import ExperienceEntry from '../components/ExperienceEntry';

export default function ExperiencePage() {
  return (
    <ContentSection className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <ExperienceEntry key={index} {...exp} />
        ))}
      </div>
    </ContentSection>
  );
}
