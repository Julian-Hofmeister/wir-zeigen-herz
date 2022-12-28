export interface Project  {
  id: string;
  title: string;
  description: string;
  author: string;
  img: string;
  votes?: number;
  isLiked?: boolean;
  link?: string;
  likes?: string[];
}
