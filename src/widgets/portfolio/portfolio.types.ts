import type { Skill } from '@/shared/lib/icon-mapping';

export interface PortfolioItem {
  id: string;
  startDate: string;
  endDate: string | null;
  title: string;
  media: {
    src: string;
    thumbSrc?: string;
    alt?: string;
  }[];
  url?: string;
  excerpt: string;
  description: string;
  skills: Skill[];
}
