export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "project-alpha",
    title: "Motodevil.shop",
    description: "Desktop web app  Premium Cap store",
    tags: ["Next.js", "TypeScript", "Tailwind" , "supabase"],
    github: "https://github.com/sainihimank",
    demo: "https://motodevil.shop/",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-violet-500/90 to-fuchsia-500/90",
    screenshots: [
      "/image.png"
    ],
  },
  {
    id: "Trip Itinerary Planner",
    title: "Trip Itinerary Planner",
    description: "Mobile-first product with polished UX and strong architecture.",
    tags: ["React Native", "Expo", "Node.js"],
    github: "https://github.com/sainihimank",
    featured: true,
    deviceType: "mobile",
    bgColor: "bg-linear-to-br from-blue-500/90 to-cyan-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    description: "Automation platform integrating APIs and workflow orchestration.",
    tags: ["Python", "APIs", "Automation"],
    github: "https://github.com/sainihimank",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "project-delta",
    title: "Project Delta",
    description: "Game-like experience with smooth motion and custom interactions.",
    tags: ["Game Dev", "UI", "Animation"],
    github: "https://github.com/sainihimank",
    featured: true,
    deviceType: "mobile",
    bgColor: "bg-linear-to-br from-purple-500/90 to-pink-500/90",
    screenshots: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop",
    ],
  },
];
