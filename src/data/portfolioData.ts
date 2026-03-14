export interface SocialLink {
  label: "GitHub" | "LinkedIn" | "LeetCode" | "X" | "Instagram";
  href: string;
}

export interface CareerItem {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
  githubLink?: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface AchievementItem {
  title: string;
  period: string;
  summary: string;
}

export const portfolioData = {
  seo: {
    title: "Aditya Raj - Full Stack Developer",
    description:
      "Personal portfolio of Aditya Raj featuring full stack projects, achievements, experience, and contact links.",
    siteUrl: "https://aditya-portfolio-three-khaki.vercel.app",
    image: "/images/preview.png",
  },
  hero: {
    greeting: "Hello! I'm",
    firstName: "ADITYA",
    lastName: "RAJ",
    roles: ["Full Stack", "Web"],
    roleSuffixes: ["Developer", "Engineer"],
  },
  navbar: {
    initials: "AR",
  },
  about: {
    title: "About Me",
    description:
      "I am a B.Tech Electronics and Communication Engineering student at DSCE Bangalore with a strong interest in software development and modern web technologies. I build responsive and scalable web applications using JavaScript, React, Node.js, and modern frontend tools. I enjoy solving problems through data structures and algorithms and creating clean, user-friendly interfaces.",
  },
  services: [
    {
      title: "FRONTEND",
      subtitle: "Building Interactive UIs",
      description:
        "Building responsive, modern interfaces with a focus on clean layouts, interaction, and a smooth user experience across devices.",
      tags: [
        "ReactJS",
        "NextJS",
        "JavaScript",
        "Tailwind",
        "HTML5",
        "CSS3",
        "Figma",
        "Gatsby",
      ],
    },
    {
      title: "BACKEND",
      subtitle: "Scalable Server Architecture",
      description:
        "Developing backend logic, APIs, and data-driven features for practical web applications with an emphasis on reliability and maintainability.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "REST APIs",
        "Git",
        "GitHub",
        "Generative AI",
      ],
    },
  ] as ServiceItem[],
  career: {
    title: "My career",
    highlight: "&",
    subtitle: "experience",
    items: [
      {
        role: "Disciplinary Committee Member",
        company: "DSCE",
        period: "AUG 2023 - NOW",
        summary:
          "Ensured discipline and supported crowd management during college events while helping the CPA team execute activities smoothly.",
      },
      {
        role: "GenAI Data Analytics Job Simulation",
        company: "Tata Group",
        period: "DEC 2025",
        summary:
          "Performed exploratory data analysis, risk profiling, and AI-assisted delinquency prediction, then translated findings into business-oriented reports and insights.",
      },
      {
        role: "Technology Job Simulation",
        company: "Deloitte Australia",
        period: "JAN 2026",
        summary:
          "Completed practical coding and development tasks in a simulated technology workflow and gained exposure to real-world engineering problem solving.",
      },
    ] as CareerItem[],
  },
  achievements: {
    title: "Achievements",
    items: [
      {
        title: "Ideathon",
        period: "OCT 2025",
        summary:
          "Developed an AI-driven intrusion detection and blockchain-secured communication solution focused on V2X privacy and automotive cybersecurity.",
      },
      {
        title: "Aventus 3.0",
        period: "MAY 2025",
        summary:
          "Built a solution that helps emergency response teams identify faster routes for delivering relief supplies during disasters.",
      },
    ] as AchievementItem[],
  },
  work: {
    title: "My",
    highlight: "Work",
    projects: [
      {
        title: "LeafWise AI",
        category: "AI Plant Care Web App",
        tools: "React, JavaScript, AI Features, Responsive Design",
        image: "/images/leafwiseai1.png",
        link: "https://leafwise-ai.vercel.app/",
        githubLink: "https://github.com/adityaraj9798/leafwise-ai",
      },
      {
        title: "Daily Task Tracker",
        category: "Task Management App",
        tools: "HTML, CSS, JavaScript, Charts, Responsive UI",
        image: "/images/dailytasktracker1.png",
        link: "https://adityaraj9798.github.io/Daily-task-tracker/",
        githubLink: "https://github.com/adityaraj9798/Daily-task-tracker",
      },
      {
        title: "Smart Task Manager",
        category: "Full Stack Productivity App",
        tools: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
        image: "/images/smarttaskmanager1.png",
        link: "https://github-desktop-rq93.vercel.app/tasks",
        githubLink: "https://github.com/adityaraj9798/smart-task-manager",
      },
    ] as ProjectItem[],
  },
  contact: {
    title: "Contact",
    email: "adityarajmanav@gmail.com",
    education: "B.Tech, ECE - DSCE Bangalore (2023-2027)",
    footerName: "Aditya Raj",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/adityaraj9798",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-raj-1875662",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/aditya_raj_08/",
    },
  ] as SocialLink[],
  resumeUrl: "/Aditya-Raj-Resume.pdf",
};
