"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

const leaders = [
  {
    name: "Muhammad Bilal",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur with 12+ years of experience in tech startups. Spearheads company strategy, vision, and investor relations. Passionate about innovation and building sustainable tech solutions.",
    image: "/Bilal.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "bilal@company.com",
  },
  {
    name: "Muhammad Majid",
    role: "COO & CMO",
    bio: "Dual-role expert managing operations and marketing. 10+ years in scaling businesses and developing successful marketing campaigns that drive revenue growth and brand recognition.",
    image: "/majid.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "majid@company.com",
  },
  {
    name: "Muhammad Khan",
    role: "Chief Technology Officer (CTO)",
    bio: "Tech visionary with 15+ years in software architecture. Leads all technical initiatives, R&D, and innovation pipelines. Expert in cloud computing and scalable system design.",
    image: "/khan.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "khan@company.com",
  },
  {
    name: "Ali Mehtab",
    role: "Director of Product Innovation",
    bio: "Product strategist with 8+ years turning ideas into market-leading products. Specializes in user-centric design, product lifecycle management, and innovation methodologies.",
    image: "/ali.png",
    linkedin: "#",
    twitter: "#",
    email: "ali@company.com",
  },
  {
    name: "Zahoor Ahmad",
    role: "IT Head & Director of Technology Solutions",
    bio: "IT infrastructure specialist with 14+ years experience. Manages enterprise systems, cybersecurity, and technology implementation across global operations.",
    image: "/zahoor.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "zahoor@company.com",
  },
  {
    name: "Abid Ali",
    role: "Director of Digital Strategy",
    bio: "Digital transformation expert with 9+ years in digital marketing and strategy. Leads online presence, SEO, content strategy, and digital customer experience initiatives.",
    image: "/abid.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "abid@company.com",
  },
  {
    name: "Muhammad Umair",
    role: "Business Development Manager",
    bio: "Business growth specialist with 7+ years in partnership development and market expansion. Builds strategic alliances and drives revenue through innovative business models.",
    image: "/umair.png",
    linkedin: "#",
    twitter: "#",
    email: "umair@company.com",
  },
  {
    name: "Abdullah",
    role: "Digital Marketing Manager",
    bio: "Performance marketing expert with 6+ years in digital campaigns. Manages social media, PPC, email marketing, and analytics to optimize ROI and customer acquisition.",
    image: "/abdullah.jpg",
    linkedin: "#",
    twitter: "#",
    email: "abdullah@company.com",
  },
  {
    name: "Faraz",
    role: "Sales Executive",
    bio: "Top-performing sales professional with 5+ years in B2B tech sales. Specializes in enterprise client acquisition, relationship management, and exceeding revenue targets.",
    image: "/faraz.jpeg",
    linkedin: "#",
    twitter: "#",
    email: "faraz@company.com",
  },
]

export function LeadershipTeam() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-fluid-4xl font-extrabold text-gray-900 dark:text-white">
            Leadership Team
          </h2>
          <p className="mx-auto max-w-2xl text-fluid-xl text-gray-600 dark:text-gray-300">
            Meet the experts leading your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
            >
              {/* Profile Image Container - Image lowered down */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 pt-12">
                {/* Circular image container - lowered down with padding-top */}
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl group-hover:border-primary/50 transition-all duration-500">
                  {/* Image */}
                  <ImageReveal
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover  transition-transform duration-700 group-hover:scale-110"
                    priority={index < 2}
                    style={{
                      objectPosition: leader.name === "Zahoor Ahmad" || leader.name === "Muhammad Khan" ? "center top" : "center 30%",
                    }}
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 rounded-full" />
                </div>
                
                {/* Social Links - Centered overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-12">
                  <div className="flex items-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 pointer-events-auto">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-gray-800 transition-all hover:bg-blue-600 hover:text-white hover:scale-110 dark:bg-neutral-900/95 dark:text-white shadow-lg transform hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-gray-800 transition-all hover:bg-sky-500 hover:text-white hover:scale-110 dark:bg-neutral-900/95 dark:text-white shadow-lg transform hover:-translate-y-1"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-gray-800 transition-all hover:bg-primary hover:text-white hover:scale-110 dark:bg-neutral-900/95 dark:text-white shadow-lg transform hover:-translate-y-1"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col items-center text-center mt-4">
                <div className="mb-3">
                  <h3 className="text-fluid-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {leader.name}
                  </h3>
                  <div className="inline-block mt-3 px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-full border border-primary/20">
                    <p className="text-fluid-base font-semibold text-primary dark:text-primary-light">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <p className="text-fluid-sm leading-relaxed text-gray-700 dark:text-gray-300 mt-4 flex-1">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}