import type { Skill } from '@/shared/lib/icon-mapping';

export interface PortfolioItem {
  id: string;
  startDate: string;
  endDate: string | null;
  title: string;
  thubmnail?: string;
  fullImage?: string;
  url?: string;
  excerpt: string;
  description: string;
  skills: Skill[];
}
