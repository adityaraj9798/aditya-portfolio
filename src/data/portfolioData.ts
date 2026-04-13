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
    roles: ["Full Stack", "AI"],
    roleSuffixes: ["Developer", "Builder"],
  },
  navbar: {
    initials: "AR",
  },
  about: {
    title: "About Me",
    description:
      "I am a B.Tech Electronics and Communication Engineering student at DSCE Bangalore focused on full stack development, scalable web applications, and practical AI-powered products. I work with JavaScript, TypeScript, React, Node.js, and the MERN stack, and I enjoy building secure, responsive applications that solve real user problems with clean engineering and thoughtful user experience.",
  },
  services: [
    {
      title: "FRONTEND",
      subtitle: "Interactive Product Interfaces",
      description:
        "Building responsive interfaces with React and TypeScript, focused on usability, polished interactions, and real-world product flows across desktop and mobile.",
      tags: [
        "React",
        "TypeScript",
        "AngularJS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive UI",
        "Firebase",
      ],
    },
    {
      title: "BACKEND",
      subtitle: "Secure Full Stack Systems",
      description:
        "Developing backend systems, APIs, authentication flows, and performance-focused features with an emphasis on scalability, security, and maintainability.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "JWT",
        "OAuth",
        "REST APIs",
        "Azure",
        "Spring Boot",
        "Prompt Engineering",
      ],
    },
  ] as ServiceItem[],
  career: {
    title: "My career",
    highlight: "&",
    subtitle: "experience",
    items: [
      {
        role: "Virtual Experience",
        company: "Tata Group and Deloitte",
        period: "2025 - 2026",
        summary:
          "Completed data analytics and technology simulation programs, working through practical business analysis, engineering, and problem-solving tasks in industry-style scenarios.",
      },
      {
        role: "Project Experience",
        company: "Skillpath AI and Smart Task Manager",
        period: "2026",
        summary:
          "Built and deployed full stack applications focused on placement preparation and productivity, using MERN architecture, authentication, AI integrations, and deployment workflows.",
      },
      {
        role: "Position of Responsibility",
        company: "Disciplinary Committee, DSCE",
        period: "2023 - Present",
        summary:
          "Supported event coordination and crowd management for college activities, helping maintain discipline and smooth execution during campus events.",
      },
    ] as CareerItem[],
  },
  achievements: {
    title: "Achievements",
    items: [
      {
        title: "200+ DSA Problems Solved",
        period: "2026",
        summary:
          "Solved more than 200 problems across LeetCode, Codeforces, GeeksforGeeks, InterviewBit, and CodeChef.",
      },
      {
        title: "LeetCode 50-Day Streak",
        period: "2026",
        summary:
          "Earned a 50-day coding streak badge on LeetCode through consistent daily problem solving.",
      },
      {
        title: "Aventus 3.0",
        period: "MAY 2025",
        summary:
          "Built a disaster management solution that optimized emergency routes for faster relief delivery.",
      },
      {
        title: "Industry Certifications",
        period: "2025 - 2026",
        summary:
          "Earned certifications from Oracle, Deloitte, Tata, and Infosys in areas including generative AI, data analytics, Angular, and full stack development.",
      },
    ] as AchievementItem[],
  },
  work: {
    title: "My",
    highlight: "Work",
    projects: [
      {
        title: "Skillpath AI",
        category: "AI Placement Preparation Platform",
        tools: "MERN Stack, Gemini AI, OpenRouter API, JWT, Render, Vercel",
        image: "/images/skillpath-ai-screenshot.png",
      },
      {
        title: "Smart Task Manager",
        category: "Full Stack Productivity App",
        tools: "MERN Stack, JWT, MongoDB, CRUD, Productivity Tracking",
        image: "/images/smarttaskmanager1.png",
        link: "https://github-desktop-rq93.vercel.app/tasks",
        githubLink: "https://github.com/adityaraj9798/smart-task-manager",
      },
      {
        title: "LeafWise AI",
        category: "Plant Disease Detection Web App",
        tools: "React, TypeScript, Swin Transformer, EfficientNetV2",
        image: "/images/leafwiseai1.png",
        link: "https://leafwise-ai.vercel.app/",
        githubLink: "https://github.com/adityaraj9798/leafwise-ai",
      },
    ] as ProjectItem[],
  },
  contact: {
    title: "Contact",
    email: "adityarajmanav@gmail.com",
    education: "B.Tech, ECE - DSCE Bangalore (Sep 2023 - Mar 2027)",
    footerName: "Aditya Raj",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/adityaraj9798",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-raj-187566275/",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/aditya_raj_08/",
    },
  ] as SocialLink[],
  resumeUrl: "/Aditya-Raj-Resume.pdf",
};
