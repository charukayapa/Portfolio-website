
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: 'code' | 'activity';
}
