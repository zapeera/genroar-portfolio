import { 
  Lightbulb, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Bot, 
  Shield 
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  fullDescription: string;
  slug: string;
  process: string[];
  benefits: string[];
  tools: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Business Planning & Strategy",
    shortTitle: "Business Planning",
    icon: Lightbulb,
    description: "Strategic planning and business consulting to validate ideas, define roadmaps, and accelerate growth.",
    fullDescription: "Turn your vision into an actionable plan. We help you validate ideas, define success metrics, prioritize initiatives, and build roadmaps that align with your business goals. From market research to financial modeling, we provide the strategic foundation your business needs.",
    slug: "business-planning",
    process: [
      "Discovery & Research: Deep dive into your market, customers, and objectives",
      "Analysis: Competitive landscape, opportunities, and risk assessment",
      "Strategy Development: Clear recommendations with data-driven rationale",
      "Planning: Prioritized roadmap with milestones and metrics",
      "Implementation Support: Guidance through execution phase"
    ],
    benefits: [
      "Clear strategic direction",
      "Reduced risk through validation",
      "Data-driven decision making",
      "Aligned team priorities",
      "Scalable growth roadmap"
    ],
    tools: [
      "Business Model Canvas",
      "SWOT Analysis",
      "Financial Modeling Tools",
      "Market Research Platforms",
      "Project Management Tools"
    ],
    features: [
      "Market research & validation",
      "Business model design",
      "Product-market fit analysis",
      "Competitive strategy",
      "Go-to-market planning",
      "Financial modeling & projections",
      "Risk assessment & mitigation",
      "OKR & KPI definition",
      "Roadmap prioritization"
    ]
  },
  {
    id: "2",
    title: "Product Design & Development",
    shortTitle: "Product Development",
    icon: Code,
    description: "End-to-end product design and development from concept to launch, with user-centered design and agile delivery.",
    fullDescription: "From ideation to launch, we design and build products that users love. Our integrated approach combines user research, design thinking, and agile development to deliver products that solve real problems and drive business growth.",
    slug: "product-development",
    process: [
      "Research: User interviews, market analysis, and requirements gathering",
      "Design: Wireframes, prototypes, and visual design with user feedback",
      "Development: Agile sprints with continuous integration and testing",
      "Launch: Deployment, monitoring, and iterative improvements"
    ],
    benefits: [
      "User-centered design",
      "Faster time to market",
      "Higher user satisfaction",
      "Scalable architecture",
      "Iterative improvement"
    ],
    tools: [
      "Figma",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel"
    ],
    features: [
      "User research & personas",
      "Journey mapping & flows",
      "Wireframing & prototyping",
      "UI/UX design",
      "Design systems",
      "Usability testing",
      "Full-stack development",
      "API design & integration",
      "Quality assurance & testing"
    ]
  },
  {
    id: "3",
    title: "Web & Mobile App Development",
    shortTitle: "Web & Mobile",
    icon: Smartphone,
    description: "Full-stack web and mobile application development for iOS, Android, and cross-platform solutions.",
    fullDescription: "We build fast, scalable web and mobile applications that deliver exceptional user experiences. From responsive web apps to native mobile solutions, we choose the right technology for your needs and ensure performance, security, and scalability.",
    slug: "web-mobile-development",
    process: [
      "Discovery: Requirements analysis, platform selection, and architecture design",
      "Design: User flows, wireframes, and UI design",
      "Development: Agile sprints with code reviews and testing",
      "Deployment: App store submission, hosting setup, and launch support"
    ],
    benefits: [
      "Cross-platform solutions",
      "Native performance",
      "Responsive design",
      "App store optimization",
      "Ongoing maintenance"
    ],
    tools: [
      "Next.js",
      "React",
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Vercel"
    ],
    features: [
      "Responsive web applications",
      "Progressive Web Apps (PWA)",
      "Native iOS development",
      "Native Android development",
      "Cross-platform apps (React Native, Flutter)",
      "Mobile app design & UX",
      "App Store optimization",
      "Push notifications & analytics"
    ]
  },
  {
    id: "4",
    title: "Marketing & Growth",
    shortTitle: "Marketing",
    icon: TrendingUp,
    description: "Full-funnel growth across paid, lifecycle, and brand marketing to scale your business.",
    fullDescription: "We design and run measurable campaigns across the entire customer journey. From acquisition to retention, our data-driven approach helps you scale efficiently and sustainably while building a strong brand presence.",
    slug: "marketing",
    process: [
      "Strategy: Audience research, channel selection, and goal setting",
      "Execution: Campaign creation, content development, and optimization",
      "Analysis: Performance tracking, attribution, and ROI measurement",
      "Optimization: Continuous improvement based on data insights"
    ],
    benefits: [
      "Increased brand awareness",
      "Higher conversion rates",
      "Lower customer acquisition cost",
      "Better customer retention",
      "Data-driven insights"
    ],
    tools: [
      "Google Analytics",
      "HubSpot",
      "Meta Ads",
      "Google Ads",
      "Mailchimp",
      "SEMrush",
      "Ahrefs",
      "Amplitude"
    ],
    features: [
      "Paid search & paid social",
      "Email & lifecycle automation",
      "Landing pages & CRO",
      "Attribution & analytics",
      "Brand & content strategy",
      "SEO & content marketing",
      "Social media management",
      "Pricing & packaging experiments"
    ]
  },
  {
    id: "5",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    icon: Bot,
    description: "Applied AI, automation, and copilots for real ROI. Intelligent solutions that transform workflows.",
    fullDescription: "We design, evaluate, and implement AI solutions—from copilots and RAG to automations and analytics—focused on ROI and reliability. Transform your business processes with intelligent automation and AI-powered insights.",
    slug: "ai-automation",
    process: [
      "Assessment: Identify automation opportunities and AI use cases",
      "Design: Architecture and solution design for AI/ML systems",
      "Development: Build and train models, integrate with existing systems",
      "Deployment: Launch with monitoring and continuous improvement"
    ],
    benefits: [
      "Increased efficiency",
      "Reduced manual work",
      "Better decision making",
      "Scalable processes",
      "Competitive advantage"
    ],
    tools: [
      "OpenAI GPT",
      "LangChain",
      "Python",
      "TensorFlow",
      "PyTorch",
      "n8n",
      "Zapier",
      "Make"
    ],
    features: [
      "Sales & support copilots",
      "Knowledge base search (RAG)",
      "Workflow automations",
      "Structured data extraction",
      "Quality checks & compliance",
      "Analytics & forecasting",
      "Chatbots & virtual assistants",
      "Process automation"
    ]
  },
  {
    id: "6",
    title: "Cybersecurity & Testing",
    shortTitle: "Security & Testing",
    icon: Shield,
    description: "Comprehensive cybersecurity services and quality assurance testing to protect your applications and ensure reliability.",
    fullDescription: "Protect your applications and data with comprehensive security assessments and rigorous testing. We help you identify vulnerabilities, ensure compliance, and maintain high-quality standards through systematic testing and security best practices.",
    slug: "security-testing",
    process: [
      "Assessment: Comprehensive security and quality evaluation",
      "Planning: Risk analysis and test strategy development",
      "Execution: Systematic testing and security audits",
      "Remediation: Issue tracking and resolution support"
    ],
    benefits: [
      "Enhanced security",
      "Compliance assurance",
      "Higher quality standards",
      "Reduced vulnerabilities",
      "Peace of mind"
    ],
    tools: [
      "OWASP",
      "Snyk",
      "SonarQube",
      "Jest",
      "Cypress",
      "Playwright",
      "Burp Suite",
      "Nmap",
      "OWASP ZAP"
    ],
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Vulnerability scanning",
      "Code security reviews",
      "Security architecture design",
      "Compliance consulting (GDPR, HIPAA)",
      "Unit & integration testing",
      "End-to-end (E2E) testing",
      "Performance & load testing"
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

