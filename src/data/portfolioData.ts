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
    roles: ["Full Stack", "Software"],
    roleSuffixes: ["Developer", "Engineer"],
  },
  navbar: {
    initials: "AR",
  },
  about: {
    title: "About Me",
    description:
      "I am a final-year Electronics and Communication Engineering student at DSCE Bangalore targeting software engineering and full stack roles. I build scalable web applications with React.js, Node.js, Express.js, MongoDB, JavaScript, and TypeScript, and I enjoy shipping production-ready products with strong API design, authentication, cloud deployment, and a clean user experience.",
  },
  services: [
    {
      title: "FRONTEND",
      subtitle: "Interactive Product Interfaces",
      description:
        "Building responsive, cross-browser interfaces with React, Context API, modern JavaScript, and TypeScript, with a strong focus on usability and production-ready UI flows.",
      tags: [
        "React.js",
        "Redux",
        "Context API",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "BACKEND",
      subtitle: "Secure Full Stack Systems",
      description:
        "Developing RESTful APIs, authentication systems, data pipelines, and cloud-deployed backend services with an emphasis on scalability, maintainability, and real-world delivery.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "JWT",
        "OAuth",
        "REST APIs",
        "ETL",
        "CI/CD",
        "Postman",
      ],
    },
  ] as ServiceItem[],
  career: {
    title: "My career",
    highlight: "&",
    subtitle: "experience",
    items: [
      {
        role: "Data Analyst Intern",
        company: "Bluestock Fintech (bluestock.in)",
        period: "Mar 2025 - May 2025",
        summary:
          "Built automated Python ETL pipelines to extract, clean, and load 12 years of financial data into a PostgreSQL star-schema data warehouse for efficient analytical querying and business reporting. Analyzed large-scale financial datasets to identify trends and anomalies, delivered actionable insights in a live fintech environment, and collaborated in Agile workflows with code reviews and clean, well-documented Python scripts.",
      },
      {
        role: "Virtual Experience",
        company: "Tata Group and Deloitte",
        period: "2024",
        summary:
          "Cleaned and structured raw business data, shared insights with non-technical stakeholders, and practiced Agile sprint planning, code reviews, and technical documentation in simulated enterprise workflows.",
      },
      {
        role: "Full Stack Project Experience",
        company: "Skillpath AI, Smart Task Manager, and Data Analytics Systems",
        period: "2026",
        summary:
          "Built production-oriented web applications and analytics systems using MERN architecture, JWT authentication, ETL workflows, AI integrations, and Git-based CI/CD deployment.",
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
          "Earned certifications from Oracle, Deloitte, Tata, and Infosys, and completed additional React.js, Node.js, and Next.js certifications.",
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
        title: "Mutual Fund Data Pipeline & Analytics Engine",
        category: "Financial Data ETL and Analytics System",
        tools: "Python, SQLite, Pandas, Power BI, ETL, Financial Modeling",
        image: "/images/placeholder.webp",
      },
      {
        title: "NayePankh Volunteer System",
        category: "Volunteer Registration Platform",
        tools: "Volunteer Registration, Multi-Step Forms, Admin Portal, Responsive UI",
        image: "/images/nayepankh-volunteer-system.png",
        link: "https://nayepankh-volunteer-system-alpha.vercel.app/",
        githubLink:
          "https://github.com/adityaraj9798/nayepankh-volunteer-system",
      },
      {
        title: "QuizChat",
        category: "Quiz and Analytics Platform",
        tools: "Interactive Quiz Flow, Analytics Dashboard, Chat UI, Responsive Design",
        image: "/images/quizchat-dashboard.png",
        link: "https://quizchat-eight.vercel.app",
        githubLink: "https://github.com/adityaraj9798/quizchat",
      },
    ] as ProjectItem[],
  },
  contact: {
    title: "Contact",
    email: "adityarajmanav@gmail.com",
    education: "B.Tech, ECE - DSCE Bangalore (Sep 2023 - Mar 2027) | CGPA: 7.01",
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
