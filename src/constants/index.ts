import { StaticImageData } from "next/image";
import {
  mongodb,
  nodejs,
  tailwind,
  reactjs,
  typescript,
  javascript,
  html,
  git,
  css,
  nextjs,
  snaplink,
  chattube,
  solidity,
  kalamitra,
  pilluai,
  stack,
  heysheet,
} from "@/assets";

type tag = {
  name: string;
  color: string;
};
type Project = {
  name: string;
  description: string;
  tags: tag[];
  image: StaticImageData;
  liverUrl: string;
  sourceCodeUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Heysheet - Sheetmonkey and Notionmonkey alternative",
    description:
      "Submit any form to google sheet and notion. It comes with email and slack integration. ",
    image: heysheet,
    liverUrl: "heysheet.in",
    // sourceCodeUrl: "https://github.com/ManojBuilds/heysheet",
    tags: [
      {
        name: "Nextjs",
        color: "text-green-400",
      },
      {
        name: "ReactJS",
        color: "text-red-500",
      },
      {
        name: "Tailwindcss",
        color: "text-red-500",
      },
      {
        name: "Typescript",
        color: "text-red-500",
      },
      {
        name: "Dodopayments",
        color: "text-red-500",
      },
      {
        name: "Google API",
        color: "text-red-500",
      },
      {
        name: "Notion API",
        color: "text-red-500",
      },
    ],
  },

  {
    name: "Stack Auth Landing Page",
    description: "Landing page of stach auth.",
    image: stack,
    liverUrl: "https://stack-landing-six.vercel.app/",
    sourceCodeUrl: "https://github.com/ManojBuilds/stack-landing",
    tags: [
      {
        name: "Nextjs",
        color: "text-green-400",
      },
      {
        name: "ReactJS",
        color: "text-red-500",
      },
      {
        name: "Tailwindcss",
        color: "text-red-500",
      },
      {
        name: "Typescript",
        color: "text-red-500",
      },
    ],
  },

  {
    name: "Pillu AI: Your ultimate whiteboard on ... Steroids",
    description: "",
    image: pilluai,
    liverUrl: "https://pilluai.onrender.com/",
    sourceCodeUrl: "https://github.com/ManojBuilds/pilluai",
    tags: [
      {
        name: "Langchain",
        color: "text-green-400",
      },
      {
        name: "Google Generative AI",
        color: "text-red-500",
      },
      {
        name: "Firebase",
        color: "text-pink-400",
      },
      {
        name: "Clerk",
        color: "text-indigo-400",
      },
      {
        name: "Nextjs",
        color: "text-green-400",
      },
      {
        name: "ReactJS",
        color: "text-red-500",
      },
      {
        name: "Tailwindcss",
        color: "text-red-500",
      },
    ],
  },
  {
    name: "KalaMitra - Generate & Mint NFT with AI",
    description:
      "KalaMitra helps you to create and mint NFTs in blockchain with AI",
    tags: [
      {
        name: "nextjs",
        color: "text-violet-700",
      },
      {
        name: "etherjs",
        color: "text-yellow-500",
      },

      {
        name: "dapp",
        color: "text-pink-400",
      },
      {
        name: "solidity",
        color: "text-blue-400",
      },
      {
        name: "nft minter",
        color: "text-pink-400",
      },
    ],
    image: kalamitra,
    sourceCodeUrl:
      "https://github.com/ManojBuilds/kalamitra-mint-your-nft-with-AI",
    liverUrl: "https://kalamitra-mint-your-nft-with-ai.vercel.app/",
  },

  {
    name: "ChatTube",
    description:
      "A Chrome extension that enables you to have chat with your favourite youtube video.",
    tags: [
      {
        name: "reactjs",
        color: "text-violet-700",
      },
      {
        name: "chrome extension",
        color: "text-pink-400",
      },
      {
        name: "ai",
        color: "text-blue-400",
      },
      {
        name: "langchain",
        color: "text-pink-400",
      },
    ],
    image: chattube,
    sourceCodeUrl: "https://github.com/ManojBuilds/ChatTube",
    liverUrl: "",
  },

  {
    name: "Snaplink",
    description:
      "Snaplink is an url shortner web app used mongodb as database built in nextjs and tailwindcss. Integrated with sanity cms",
    tags: [
      {
        name: "react",
        color: "text-violet-700",
      },
      {
        name: "nextjs",
        color: "text-green-400",
      },
      {
        name: "mongodb",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-blue-400",
      },
      {
        name: "tailwindcss",
        color: "text-pink-400",
      },
    ],
    image: snaplink,
    sourceCodeUrl: "https://github.com/ManojBuilds/snaplink",
    liverUrl: "https://snaplink-xegc.vercel.app/",
  },
  // {
  //   name: "Carsify",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "text-green-400",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "text-pink-400",
  //     },
  //     {
  //       name: "typescript",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "nextjs",
  //       color: "text-green-400",
  //     },
  //   ],
  //   image: carsify,
  //   sourceCodeUrl: "https://github.com/ManojBuilds/Car-Showcase",
  //   liverUrl: "https://car-showcase-gamma-vert.vercel.app/",
  // },
  // {
  //   name: "Nextgenvisions",
  //   description:
  //     "Web-based platform that allows users to search, create and generate prompt and generate dalle images and ability to share with the world.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "text-green-400",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "text-pink-400",
  //     },
  //     {
  //       name: "typescript",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "nextjs",
  //       color: "text-green-400",
  //     },
  //   ],
  //   image: nextgenvisions,
  //   sourceCodeUrl: "https://github.com/ManojBuilds/NextGenVisions",
  //   liverUrl: "https://next-gen-visions.vercel.app/",
  // },
  // {
  //   name: "Promptly",
  //   description:
  //     "Web-based platform that allows users to search, edit and share different types of prompt.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "text-green-400",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "text-pink-400",
  //     },
  //     {
  //       name: "typescript",
  //       color: "text-violet-700",
  //     },
  //     {
  //       name: "nextjs",
  //       color: "text-green-400",
  //     },
  //   ],
  //   image: promptly,
  //   sourceCodeUrl: "https://github.com/ManojBuilds/Promptly",
  //   liverUrl: "https://promptly-rust.vercel.app/",
  // },
];

export const technologies = [
  { name: "Solidity", icon: solidity },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
