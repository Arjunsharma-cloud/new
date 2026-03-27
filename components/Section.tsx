"use client";

import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({
  id,
  title,
  subtitle,
  className = "",
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
      className={`relative mx-auto w-full max-w-7xl px-6 py-14 md:px-10 ${className}`}
    >
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
      </div>
      {children}
    </motion.section>
  );
}
