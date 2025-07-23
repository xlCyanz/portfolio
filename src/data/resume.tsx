import { HomeIcon } from "lucide-react";

import { Icons } from "@/components/icons";

export const DATA = {
  initials: "JS",
  name: "Johan Sierra",
  description: "Johan Sierra's Portfolio and Resume",
  url: "https://xlcyanz.vercel.app",
  avatarUrl: "https://github.com/xlcyanz.png",
  skills: [
    "React",
    "Node.js",
    "Postgres",
    "Typescript",
    "GraphQL",
    "TailwindCSS",
  ],
  learning: ["React Native", "Next.js", "NestJS"],
  contact: {
    email: "johanse.linares@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xlcyanz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/xlcyanz",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:johanse.linares@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  works: {
    en: [
      {
        company: "Nubeteck",
        href: "https://nubeteck.com",
        badges: [],
        location: "Remote",
        title: "Analyst / Programmer",
        logoUrl: "/nubeteck.webp",
        start: "March 2023",
        end: "Present",
        description:
          "I am currently working as a frontend developer at Nubeteck, where I am responsible for developing and maintaining web applications using ReactJS.",
      },
    ],
    es: [
      {
        company: "Nubeteck",
        href: "https://nubeteck.com",
        badges: [],
        location: "Remoto",
        title: "Analista / Programador",
        logoUrl: "/nubeteck.webp",
        start: "Marzo 2023",
        end: "",
        description:
          "Actualmente trabajo como desarrollador frontend en Nubeteck, donde soy responsable de desarrollar y mantener aplicaciones web utilizando ReactJS.",
      },
    ],
  },
  educations: {
    en: [
      {
        school: "Technological Institute of the Americas (ITLA)",
        href: "https://itla.edu.do",
        degree: "Software Development Technologist",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvt19b9r9Sv6UirWZxQRK8MJDkzCxmybKElA&s",
        start: "Jan 2021",
        end: "Apr 2025",
      },
    ],
    es: [
      {
        school: "Instituto Tecnológico de las Américas (ITLA)",
        href: "https://itla.edu.do",
        degree: "Tecnólogo en Desarrollo de Software",
        logoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvt19b9r9Sv6UirWZxQRK8MJDkzCxmybKElA&s",
        start: "Enero 2021",
        end: "Abril 2025",
      },
    ],
  },
  projects: {
    es: [
      {
        title: "Teacher Reviewer",
        href: "https://teacher-reviewer.vercel.app",
        dates: "",
        active: true,
        description:
          "Este fue un proyecto desarrollado con algunos amigos del instituto, con el objetivo de calificar a los profesores. La meta es brindar a los estudiantes una referencia, basada en experiencias de compañeros, para ayudarles a elegir los mejores instructores durante la selección de cursos.",
        technologies: [
          "Next.js",
          "Typescript",
          "MongoDB",
          "Google Auth",
          "GraphQL",
          "TailwindCSS",
        ],
        links: [],
        image: "/teacher-reviewer.png",
        video: "",
      },
    ],
    en: [
      {
        title: "Teacher Reviewer",
        href: "https://teacher-reviewer.vercel.app",
        dates: "",
        active: true,
        description:
          "This was a project developed with some friends from school, aimed at rating teachers. The goal is to provide students with a reference, based on peer experiences, to help them choose the best instructors during course selection.",
        technologies: [
          "Next.js",
          "Typescript",
          "MongoDB",
          "Google Auth",
          "GraphQL",
          "TailwindCSS",
        ],
        links: [],
        image: "/teacher-reviewer.png",
        video: "",
      },
    ],
  },
  hackathons: [],
} as const;

// {
//   title: "Automatic Chat",
//   href: "https://automatic.chat",
//   dates: "April 2023 - March 2024",
//   active: true,
//   description:
//     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//   technologies: [
//     "Next.js",
//     "Typescript",
//     "PostgreSQL",
//     "Prisma",
//     "TailwindCSS",
//     "Shadcn UI",
//     "Magic UI",
//     "Stripe",
//     "Cloudflare Workers",
//   ],
//   links: [
//     {
//       type: "Website",
//       href: "https://automatic.chat",
//       icon: <Icons.globe className="size-3" />,
//     },
//   ],
//   image: "",
//   video:
//     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
// },
