export type ProjectCategory = 'Flagship' | 'Arcade' | 'Client' | 'Private';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ProjectCategory;
  tech?: string[];
}

export const projects: Project[] = [
  // Flagship
  {
    id: 'carbtally',
    title: 'CarbTally',
    description: 'Smart AI-powered nutrition tracking.',
    url: 'https://carbtally.app',
    category: 'Flagship',
    tech: ['Next.js', 'AI'],
  },
  {
    id: 'name-analyser',
    title: 'Name Analyser',
    description: 'Professional name pronunciation tool using AI-powered etymology analysis.',
    url: 'https://names.jonathonmarsden.com',
    category: 'Flagship',
    tech: ['React', 'FastAPI', 'Claude AI'],
  },
  {
    id: 'rectify',
    title: 'Rectify',
    description: 'Browser-based photo straightening tool.',
    url: 'https://rectify.jonathonmarsden.com',
    category: 'Flagship',
    tech: ['React'],
  },
  {
    id: 'painchek',
    title: 'PainChek Tracker',
    description: 'Private stock portfolio tracker for ASX:PCK.',
    url: 'https://painchek.jonathonmarsden.com',
    category: 'Flagship',
    tech: ['React'],
  },
  {
    id: 'council-bot',
    title: 'Council Bot',
    description: 'Automated updates for local council news.',
    url: 'https://councilbot.bsky.social',
    category: 'Flagship',
    tech: ['Bot'],
  },

  // Arcade
  {
    id: 'atlas',
    title: 'The Atlas',
    description: 'Interactive maps and spatial data visualizations.',
    url: 'https://maps.jonathonmarsden.com',
    category: 'Arcade',
    tech: ['Mapbox', 'Next.js'],
  },
  {
    id: 'dolmenwood-combat',
    title: 'Dolmenwood Combat',
    description: 'Combat calculator for Dolmenwood OSR RPG.',
    url: 'https://combat.apps.jonathonmarsden.com',
    category: 'Arcade',
    tech: ['React', 'Vite'],
  },
  {
    id: 'cross-cultural-gen',
    title: 'Cross-Cultural Gen',
    description: 'Character generator for RPGs.',
    url: 'https://characters.apps.jonathonmarsden.com',
    category: 'Arcade',
    tech: ['React'],
  },
  {
    id: 'runequest-combat',
    title: 'RuneQuest Combat',
    description: 'Combat tracker for RuneQuest.',
    url: 'https://runequest-combat.vercel.app',
    category: 'Arcade',
    tech: ['React'],
  },
  {
    id: 'sigblock-parser',
    title: 'Sigblock Parser',
    description: 'Utility for parsing email signature blocks.',
    url: 'https://sigblock.jonathonmarsden.com',
    category: 'Arcade',
    tech: ['Utility'],
  },
];
