export const siteConfig = {
  name: "Maryam Tariq",
  role: "Data Scientist & Software Engineer",
  tagline:
    "Data scientist and full stack developer with experience in machine learning, APIs, and AI-powered solutions. Currently teaching and consulting while building production-ready systems.",
  shortIntro:
    "I build data-driven solutions, secure REST APIs, and MERN applications with practical AI integration. Currently working as a Data Scientist in Residence in Paris and teaching as a Visiting Lecturer.",
  email: "marymughal216@gmail.com",
  location: "Pakistan · open to remote roles",
  profileImageUrl: "https://drive.google.com/uc?export=view&id=1PkLyIjkYvXVW0JJzyaDgerDgutPUJSY8",
  cvUrl:
    "https://drive.google.com/file/d/10w-1tKakvqlJPxBVEko6QUMVM1EZeMmm/view?usp=sharing",
  githubReposUrl: "https://github.com/MaryamTariq-1?tab=repositories",
  social: {
    linkedin: "https://www.linkedin.com/in/maryamtariq1",
    github: "https://github.com/MaryamTariq-1"
  }
} as const;

export const aboutSummary =
  "Data scientist and software engineer with a passion for turning complex data challenges into practical solutions. My expertise spans machine learning, full stack development, and AI integration. Currently serving as Data Scientist in Residence in Paris and Visiting Lecturer, I bring real-world industry experience to both consulting projects and education. I deliver clean, tested code and clear communication whether building APIs, teaching students, or developing data-driven applications.";

export const aboutLoaderLines = [
  "Data Scientist & Software Engineer · ML, APIs, and AI solutions",
  "FastAPI, MERN stack, and data-driven development",
  "Teaching and consulting while building production systems"
];

export const education = {
  school: "FAST National University of Computer and Emerging Sciences",
  degree: "B.S. Computer Science",
  period: "Sep 2021 to Jun 2025"
};

export const skills = {
  backend: {
    title: "Data Science & Backend",
    items: [
      "Python, FastAPI, Flask, NumPy, Pandas",
      "Machine Learning, TensorFlow, Scikit-learn",
      "REST APIs, data pipelines, and model deployment",
      "JWT auth, security, and production monitoring"
    ]
  },
  mern: {
    title: "Full Stack Development",
    items: [
      "MongoDB, Express, React, Node.js",
      "Full stack features and CRUD workflows",
      "JWT flows and protected routes",
      "Data visualization and dashboard development"
    ]
  },
  ai: {
    title: "AI & Machine Learning",
    items: [
      "RAG pipelines, embeddings, vector search",
      "OpenAI and OpenRouter APIs, prompt engineering",
      "LLM integration with guardrails and safety",
      "Model training, fine-tuning, and evaluation"
    ]
  },
  data: {
    title: "Data Engineering",
    items: ["SQL, MySQL, Oracle, MongoDB", "Data analysis, ETL pipelines", "Vector stores for RAG workloads"]
  },
  tools: {
    title: "Tools & Teaching",
    items: ["Git, Agile, and SDLC practices", "API testing and debugging", "Curriculum development and mentoring"]
  }
} as const;

export const projects = [
  {
    title: "Due Diligence Evaluator",
    highlight: "RAG and LLMs",
    description:
      "Multi LLM evaluation for due diligence style QnA. Compares accuracy, cost, and latency with RAG and Langfuse style tracing.",
    bullets: [
      "Side by side model comparison with practical metrics",
      "RAG pipeline over domain documents",
      "Tracing friendly workflow for debugging runs"
    ],
    stack: ["Python", "RAG", "Langfuse", "Jupyter"],
    github: "https://github.com/MaryamTariq-1/DueDiligenceRAG"
  },
  {
    title: "AI Chatbot Backend",
    highlight: "Full stack chatbot",
    description:
      "Secure REST APIs for an AI chatbot using OpenAI style models, with conversation memory and a clear API surface.",
    bullets: [
      "Auth aware endpoints and structured responses",
      "Conversation memory for follow up questions",
      "Pluggable provider style integration"
    ],
    stack: ["FastAPI", "Python", "OpenAI"],
    github: "https://github.com/MaryamTariq-1/AI-Chatbot-RAG"
  },
  {
    title: "ATMOS MONITOR",
    highlight: "MERN, Python, APIs",
    description:
      "Air quality monitoring with trends, risk hints, and ML style forecasting. Pulls external data and surfaces insights in a web UI.",
    bullets: [
      "Dashboards for trends and alerts",
      "Forecasting hooks for air quality patterns",
      "Integration friendly API layer"
    ],
    stack: ["MongoDB", "Express", "React", "Node", "Python"],
    github: "https://github.com/MaryamTariq-1?tab=repositories"
  },
  {
    title: "Roman Urdu Poetry Generator",
    highlight: "Gen AI and NLP",
    description:
      "Generates Roman Urdu poetry with a balance of creativity and structure, aimed at readable output for real users.",
    bullets: [
      "Text generation tuned for Roman Urdu",
      "TensorFlow based experimentation",
      "Notebook driven iteration"
    ],
    stack: ["Python", "TensorFlow", "NLP", "Jupyter"],
    github: "https://github.com/MaryamTariq-1/RomanUrdPoetryGenerator"
  },
  {
    title: "Custom Transformer Summarization",
    highlight: "NLP demo",
    description:
      "Summarization model work on custom datasets for short, useful summaries instead of wall of text dumps.",
    bullets: [
      "Fine tuning style experiments",
      "Evaluation with standard NLP metrics",
      "Demo first, production aware structure"
    ],
    stack: ["Python", "NLP", "Transformers"],
    github: "https://github.com/MaryamTariq-1/AI-PROJECTS"
  },
  {
    title: "RAG for Diagnostic Reasoning",
    highlight: "RAG demo",
    description:
      "Retrieval augmented setup to support medical style reasoning from text, with emphasis on careful wording and safety aware framing.",
    bullets: [
      "Retrieval plus generation pipeline",
      "Grounded style answers from stored context",
      "Demo scope, not a clinical product"
    ],
    stack: ["Python", "RAG"],
    github: "https://github.com/MaryamTariq-1/AI-PROJECTS"
  }
] as const;

export const services = [
  {
    title: "Data Science Consulting",
    description:
      "End-to-end data science solutions from analysis to deployment, including ML model development and data-driven insights.",
    icon: "ml"
  },
  {
    title: "Full Stack & APIs",
    description:
      "MERN stack applications and REST APIs with data science integration, from database design to production deployment.",
    icon: "api"
  },
  {
    title: "AI & RAG Systems",
    description:
      "Practical AI solutions including chatbots, RAG pipelines, and LLM integration with proper safety and guardrails.",
    icon: "chat"
  },
  {
    title: "Data Engineering",
    description:
      "ETL pipelines, data processing workflows, and infrastructure for scalable data science applications.",
    icon: "database"
  },
  {
    title: "Teaching & Mentoring",
    description:
      "Curriculum development, technical training, and mentoring in data science, ML, and software engineering.",
    icon: "sparkles"
  },
  {
    title: "Research & Analysis",
    description:
      "Applied research, prototyping, and analysis for data-driven decision making and proof-of-concept development.",
    icon: "automation"
  }
] as const;

export const experience = [
  {
    role: "Data Scientist in Residence",
    company: "Scorton",
    period: "Mar 2026 to Present",
    location: "Paris, France",
    focus:
      "Contract role focusing on advanced data science projects, machine learning model development, and strategic data-driven solutions for enterprise clients."
  },
  {
    role: "Visiting Lecturer",
    company: "KCAS",
    period: "Jan 2026 to Present",
    location: "Faisalabad, Pakistan",
    focus:
      "Teaching and mentoring students in computer science and data science courses, developing curriculum, and providing industry-relevant practical training."
  },
  {
    role: "AI Engineer Intern",
    company: "CyberGen",
    period: "Sep 2025 to Nov 2025",
    location: "Faisalabad, Pakistan",
    focus:
      "Contract role building full stack chatbot work, full stack EDA, and a full stack recommendation system end to end."
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Arch Technologies",
    period: "Apr 2025 to Jul 2025",
    location: "Islamabad, Pakistan",
    focus:
      "Brain tumor image segmentation and digit classification projects with clear evaluation steps."
  },
  {
    role: "SQL Database Intern",
    company: "YoungDev Intern",
    period: "Feb 2025 to Apr 2025",
    location: "Islamabad, Pakistan",
    focus:
      "Database focused tasks and query heavy practice in a structured intern setting."
  },
  {
    role: "Venture deal sourcing extern",
    company: "RevRoad, Venture Capital industry program",
    period: "Sep 2024 to Nov 2024",
    location: "New York, US, remote",
    focus:
      "Roughly ten hours per week on investment analysis, market research, deal sourcing, and market investment analysis reports."
  },
  {
    role: "Exploratory Data Analysis Intern",
    company: "CodexCue",
    period: "Jun 2024 to Aug 2024",
    location: "Islamabad, Pakistan",
    focus:
      "EDA on Google Play Store apps, suicide bombing attacks, and hotel booking style datasets with clean notebooks."
  },
  {
    role: "Machine Learning Intern",
    company: "CodexCue",
    period: "Jun 2024 to Aug 2024",
    location: "Islamabad, Pakistan",
    focus:
      "Hyperparameter tuning exercises, spam email classifier, and simple linear regression baselines."
  }
] as const;
