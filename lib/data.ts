import type { Project, Experience, Education, Skill, Language } from "@/lib/types"

export const projectsData: Project[] = [
  {
    id: 1,
    title: "chatR App",
    description:
    "Engineered a real-time chat application supporting instant messaging, reactions, and typing indicators.",
    image: "/911410_OBOT5M1.svg?height=600&width=800",
    tags: ["React.js", "Express.js", "Tailwind CSS", "Mongo DB", "Stream SDK", "Zustand"],
    github: "https://github.com/devratdave/chatR",
    live: "https://chatr-f1yp.onrender.com/",
    featured: true,
  
  },
  {
    id: 2,
    title: "NetworQ",
    description:
    "Built and deployed a social app with posts, comments, likes, follows, and image uploads.",
    image: "/35010675_8257863.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Prisma ORM", "PostgreSQL", "Shadcn"],
    github: "https://github.com/devratdave/solivapp",
    live: "https://networq-five.vercel.app",
    featured: true,
  
  },
  {
    id: 3,
    title: "Soliv App",
    description:
    "A minimalist productivity app with Pomodoro timer, ambient sounds, notes, to-do list, and more — built with Next.js, HarperDB, and Auth0.",
    image: "/23902634_6881935.svg?height=600&width=800",
    tags: ["Next.js", "Auth0", "HarperDB"],
    github: "https://github.com/devratdave/solivapp",
    featured: false,
  
  },
  {
    id: 4,
    title: "DePin Uptime",
    description:
    "A decentralized monitoring tool for tracking uptime, performance, and reliability of DePin (Decentralized Physical Infrastructure) networks with real-time WebSocket communication.",    
    image: "/23902632_6881942.svg?height=600&width=800",
    tags: ["WebSockets", "Next.js", "TypeScript", "Tailwind CSS", "Turborepo", "PostreSQL", "Clerk"],
    github: "https://github.com/devratdave/depin-uptime",
    featured: false,
  },
  {
    id: 5,
    title: "Household Helper",
    description:
      "Built the Household Helper, a multi-user platform designed to streamline home servicing and solutions!",
    image: "/40399857_8292118.svg?height=600&width=800",
    tags: ["VueJS", "Flask", "Celery", "Redis", "SQLite", "Python", "SQLAlchemy ORM"],
    github: "https://github.com/devratdave/household-helper",
    featured: false,
  },
  {
    id: 6,
    title: "GoPay Payments Application",
    description:
      "Features include making payments to other people, adding money to your own wallets using auxiliary bank webhooks.",
    image: "/49457668_9233654.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Turborepo", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
    github: "https://github.com/devratdave/gopay_payments_application",
    featured: false,
  },
  {
    id: 7,
    title: "Forecasting Crime Categories",
    description:
    "CrimeCast: Forecasting Crime Categories is a data-driven machine learning project that predicts crime categories using historical crime data. ",
    image: "/19114091_6081586.svg?height=600&width=800",
    tags: ["Machine Learning", "Data Analysis", "Pandas", "Scikit Learn", "Matplotlib", "Gradient Boosting", "Seaborn", "Feature Engineering"],
    github: "https://www.kaggle.com/code/devratdave/21f1006042-notebook-t22024",
    live: "https://www.kaggle.com/code/devratdave/21f1006042-notebook-t22024",
    featured: false,
  },
  {
    id: 8,
    title: "Influencer Sponsor Coordination Application",
    description:
    "This web application is designed to streamline and enhance the way influencers and sponsors connect and collaborate.",
    image: "/16330805_v747-sasi-46.svg?height=600&width=800",
    tags: ["Flask", "Python", "SQLAlchemy ORM", "Jinja2"],
    github: "https://github.com/devratdave/sponsor-influencer-coordination-app",
    featured: false,
  },
  {
    id: 9,
    title: "Grocery Store Application",
    description:
    "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set goals. Includes data visualization and social sharing features.",
    image: "/29502225_7551698.svg?height=600&width=800",
    tags: ["Flask", "Python", "SQLAlchemy ORM", "Jinja2"],
    github: "https://github.com/devratdave/grocerystore-project",
    featured: false,
  },
  {
    id: 10,
    title: "Medium-like Application",
    description:
      "A web application deployed for posting blogs.",
    image: "/23902634_6881935.svg?height=600&width=800",
    tags: ["React.js", "TypeScript", "Cloudflare", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
    github: "https://github.com/devratdave/medium_project",
    live: "https://medium-project-zeta.vercel.app/",
    featured: false,
  },
]

export const experienceData: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "National Informatics Centre (NIC))",
    period: "April 2025 - Present",
    // description:
      // "Built and optimized data pipelines processing 40–50 GB/day using NiFi, Spark, Hudi, and Hadoop; scaled for up to 4 TB/day.",
    achievements: [
      "Built and optimized data pipelines processing 40–50 GB/day using NiFi, Spark, Hudi, and Hadoop; scaled for up to 4 TB/day.",
      "Developed an AI-powered PDF QA chatbot application using Python Flask, React.js, and the Ollama Gemma 2B model. Implemented RAG (Retrieval-Augmented Generation) to extract context from uploaded PDFs and provide accurate answers to user queries, reducing manual document lookup time by 50%.",
      "Contributed to building an internal intern management portal using React.js, Node.js, REST APIs, and SQL, enabling interns to log daily work updates and improving reporting efficiency by 30%.",
      "Created Bash scripts to automate cluster setup and logging, cutting manual effort by 60%.",
    ],
  }
]

export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Data Science and Computer Programming",
    institution: "Indian Institute of Technology, Madras",
    period: "September 2023 - Present",
    description: "",
    courses: ["Data Structures and Algorithms", "Software Engineering", "Artificial Intelligence", "Deep Learning"],
  },
  {
    degree: "Diploma in Data Science and Computer Programming",
    institution: "Indian Institute of Technology, Madras",
    period: "Septemeber 2021 - September 2023",
    description: "Completed with a 7.61 CGPA.",
    courses: ["Data Structures", "Web Development", "Database Systems", "Machine Learning"],
  },
  {
    degree: "Bachelor of Arts (Honors) in Economics",
    institution: "Gautam Buddha University, Greater Noida",
    period: "July 2020 - June 2023",
    description: "Focused on econometrics and statistical modeling. Active member of the Music Club.",
    courses: ["Micro-Economics", "Macro-Economics", "Econometrics", "Developement Economics", "International Trade and Fianance"],
  }
]

export const technicalSkills: Skill[] = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "HTML / CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Machine Learning", level: 70 },
  { name: "Data Analysis", level: 85 },
  { name: "Python", level: 90 },
  { name: "Flask", level: 85 },
  { name: "Express", level: 95 },
  { name: "Scikit Learn", level: 85 },
  { name: "Git / GitHub", level: 80 }
]

export const softSkills: string[] = [
  "Team Leadership",
  "Problem Solving",
  "Communication",
  "Time Management",
  "Mentoring",
  "Agile Methodologies",
  "Project Management"
]

export const languages: Language[] = [
  { name: "English", proficiency: "Fluent", level: 90 },
  { name: "Hindi", proficiency: "Fluent", level: 90 },
]

