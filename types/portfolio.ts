export interface Personal {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
}

export interface Social {
  [key: string]: {
    enabled: boolean;
    url: string;
  };
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  projects: Project[];
}

export interface PortfolioConfig {
  personal: Personal;
  social: Social;
  skills: string[];
  experience: Experience[];
}