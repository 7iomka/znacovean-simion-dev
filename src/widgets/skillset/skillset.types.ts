import type { Skill } from '@/shared/lib/icon-mapping';

export interface SkillGroup {
  name: string;
  iconClass: string;
  skills: Skill[];
}
