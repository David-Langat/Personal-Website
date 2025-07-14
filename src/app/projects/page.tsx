'use client';

import { useState, useEffect } from 'react';
import ContentSection from '../components/ContentSection';
import ProjectCard from '../components/ProjectCard';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  languages: string[];
  owner: {
    login: string;
  };
}

async function fetchGitHubProjects(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const repos: any[] = await response.json();

  const projects = await Promise.all(
    repos.map(async (repo) => {
      const langResponse = await fetch(repo.languages_url);
      const languages = langResponse.ok ? Object.keys(await langResponse.json()) : [];
      return { ...repo, languages };
    })
  );

  return projects;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const fetchedProjects = await fetchGitHubProjects('David-Langat');
        setProjects(fetchedProjects);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return <div className="text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <ContentSection className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            image={`https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`}
            tags={project.languages}
            url={project.html_url}
          />
        ))}
      </div>
    </ContentSection>
  );
}


