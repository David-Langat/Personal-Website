'use client';

import ContentSection from '../components/ContentSection';
import { hobbiesData } from '../data/hobbies';
import HobbyCard from '../components/HobbyCard';

export default function HobbiesPage() {
  return (
    <ContentSection title="Hobbies" className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbiesData.map((hobby, index) => (
          <HobbyCard key={index} {...hobby} />
        ))}
      </div>
    </ContentSection>
  );
}
