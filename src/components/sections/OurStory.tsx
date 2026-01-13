"use client";
import { motion } from "framer-motion";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Container } from "@/components/layout/Container";

export function OurStory() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-16 sm:py-20 md:py-24 dark:from-[#0B0C10] dark:via-[#0D0E12] dark:to-[#0B0C10] transition-colors duration-300">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-primary/10 dark:bg-primary/20 px-5 py-2 text-fluid-sm font-semibold text-primary dark:text-primary-400 border border-primary/20"
          >
            About Us
          </motion.span>
          <h2 className="mb-4 text-fluid-4xl font-extrabold text-gray-900 dark:text-white">
            Our Story
          </h2>
          <p className="mx-auto max-w-3xl text-fluid-xl text-gray-600 dark:text-gray-300">
            A journey of innovation, growth, and commitment to excellence
          </p>
        </motion.div>

        {/* Main Content with Large Image */}
        <div className="relative">
          {/* Large Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] sm:h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-12"
          >
            <ImageReveal
              src="/future.jpeg"
              alt="Our team"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              overlay={true}
              overlayVariant="gradient"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 sm:p-12 md:p-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 text-fluid-4xl font-bold text-white drop-shadow-2xl"
              >
                Building the Future, One Project at a Time
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl text-fluid-xl text-white drop-shadow-2xl leading-relaxed"
              >
                Founded in 2014, we've grown from a small team to a full-service agency helping 200+ clients transform ideas into successful products.
              </motion.p>
            </div>
          </motion.div>

          {/* Story Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 p-6 sm:p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-fluid-5xl font-black text-primary">2014</div>
              <h4 className="mb-3 text-fluid-2xl font-bold text-gray-900 dark:text-white">
                The Beginning
              </h4>
              <p className="text-fluid-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Founded with a mission to help entrepreneurs transform bold ideas into successful, scalable products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 p-6 sm:p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl sm:text-5xl font-black text-primary">200+</div>
              <h4 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Clients Served
              </h4>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Helped clients across various industries launch products that raised millions in funding and served millions of users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-white dark:bg-neutral-900 border-2 border-gray-200 dark:border-neutral-800 p-6 sm:p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl sm:text-5xl font-black text-primary">Today</div>
              <h4 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Trusted Partner
              </h4>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Combining deep technical expertise with strategic business acumen to deliver solutions that drive real business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
