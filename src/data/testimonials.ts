export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  category?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "They turned a rough idea into a shipped product in weeks. Clear communication, strong execution, and results that speak for themselves.",
    author: "Sarah Johnson",
    role: "Founder & CEO",
    company: "TechStart Inc.",
    category: "Tech"
  },
  {
    id: "2",
    quote: "Organized, prompt, and reliable delivery time — crucial to our success. They understand our business and propose the best solutions.",
    author: "Philip Widmer",
    role: "Founder",
    company: "Growth Labs",
    category: "Marketing"
  },
  {
    id: "3",
    quote: "Picked up the project at design stage through to implementation with daily updates. Will definitely hire again.",
    author: "Ulugbek Makhmudov",
    role: "Founder",
    company: "Innovate Co.",
    category: "Tech"
  },
  {
    id: "4",
    quote: "Clear process, strong engineering, and measurable growth. They don't just build software, they partner for long-term success.",
    author: "Michael Chen",
    role: "CTO",
    company: "ScaleUp Solutions",
    category: "Tech"
  },
  {
    id: "5",
    quote: "They understand and propose the best solutions for our projects. The team is responsive, skilled, and delivers on time.",
    author: "Agatha Oliveira",
    role: "Operations Lead",
    company: "Digital Ventures",
    category: "Tech"
  },
  {
    id: "6",
    quote: "From discovery to launch, they guided us through every step. The product exceeded our expectations and users love it.",
    author: "David Kim",
    role: "Product Manager",
    company: "NextGen Platforms",
    category: "Tech"
  },
  {
    id: "7",
    quote: "The AI automation solutions they built saved us 20 hours per week. Incredible ROI and seamless integration with our workflow.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "Streamline Corp",
    category: "AI"
  },
  {
    id: "8",
    quote: "Their marketing strategy doubled our qualified leads in 3 months. Data-driven approach and transparent reporting made all the difference.",
    author: "James Wilson",
    role: "CMO",
    company: "Velocity Marketing",
    category: "Marketing"
  }
];

