"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items?: AccordionItem[];
  question?: string;
  answer?: string;
}

export function Accordion({ items, question, answer }: AccordionProps) {
  // Support both single item and multiple items
  const accordionItems = items || (question && answer ? [{ question, answer }] : []);
  const [openIndex, setOpenIndex] = useState<number | null>(items ? 0 : null);

  return (
    <div className="space-y-4">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border-2 border-gray-200 overflow-hidden bg-white dark:border-gray-800 dark:bg-[#111]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#0B0C10] transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-white pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200 leading-relaxed border-t border-gray-200 dark:border-gray-800">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
