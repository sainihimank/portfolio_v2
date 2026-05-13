import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/sainihimank",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sainihimank/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:sainihimank2387@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Himank Saini",
  title: "Full Stack Developer",
  description: "I build scalable web products with modern full stack technologies.",
  resumeDriveLink: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_FILE_ID/view",
  resumeDownloadLink: "https://drive.google.com/uc?export=download&id=REPLACE_WITH_YOUR_FILE_ID",
  githubUsername: "sainihimank",
};
