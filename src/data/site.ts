import playlistlyImage from "@/playlistly.png";
import playlixImage from "@/playlix.png";

export const site = {
  name: "Angel",
  title: "angel.dev",
  birthDate: "2006-10-12",
  role: "self-taught programmer",
  location: "Mexico",
  pronouns: "he/him",
  email: "angel.a.gallardo.cevallos@gmail.com",
  status: "building things",
  about: [
    "intro",
    "I spend most of my time building apps and things I find interesting. I like learning new things and enjoy competition — I just do whatever sounds fun. Off the computer I play piano and guitar, read manga, and watch all kinds of movies.",
  ],
  socials: [
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/Arturo-Gallardo",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/angel-gallardo-226023316/",
    },
    {
      label: "Email",
      icon: "email",
      href: "mailto:angel.a.gallardo.cevallos@gmail.com",
    },
  ],
  tools: {
    editors: ["VS Code", "Cursor"],
    languages: ["TypeScript", "JavaScript", "Rust", "Java", "Python"],
    frameworks: ["Next.js", "React", "Node.js", "Tauri"],
    infrastructure: ["Supabase", "Firebase", "Vercel", "Docker", "Linux"],
  },
  projects: [
    {
      id: "playlix",
      name: "Playlix",
      description:
        "Project for looking at your spotify playlists and tracks on a grid",
      year: "2026",
      language: "TypeScript",
      color: "#ff6b35",
      image: playlixImage,
      source: "https://github.com/Arturo-Gallardo/Playlix",
      website: "https://playlix-grid.vercel.app/",
    },
    {
      id: "playlistly",
      name: "Playlistly",
      description:
        "Project that turns YouTube playlists into a zoomable visual grid for interactive browsing.",
      year: "2026",
      language: "TypeScript",
      color: "#75fa69",
      image: playlistlyImage,
      source: "https://github.com/Arturo-Gallardo/Playlistly",
      website: "https://playlistly.vercel.app/",
    },
  ],
} as const;
