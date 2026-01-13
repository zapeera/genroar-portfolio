"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

interface EnhancedHeroProps {
  headline: string;
  subtext: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function EnhancedHero({
  headline,
  subtext,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: EnhancedHeroProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black dark:bg-black">
      {/* Background Image - Blurred and Desaturated */}
      <div className="absolute inset-0">
        <ImageReveal
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
          alt="Team collaboration"
          fill
          sizes="100vw"
          className="object-cover grayscale-[0.3] brightness-105 filter "
          priority
          overlay={false}
        />
      </div>

      {/* Semi-transparent Overlay - Similar to image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[1]" />

      <Container className="relative z-10 flex min-h-[85vh] sm:min-h-[90vh] items-center py-12 sm:py-16 md:py-20">
        <div className="w-full text-center">


          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="mb-4 sm:mb-6 text-fluid-6xl font-bold text-white leading-tight"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
          >
              {headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.1,
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "easeOut",
            }}
                   className="mb-8 sm:mb-10 text-fluid-xl leading-relaxed text-white px-2"
          >
            {subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 sm:mb-12 flex flex-col items-center justify-center gap-3 sm:gap-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Button href={primaryButtonHref} variant="primary" size="lg" className="w-full sm:w-auto">
              {primaryButtonText}
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
