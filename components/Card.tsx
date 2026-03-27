"use client";

import { motion } from "framer-motion";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <motion.div
      className="min-w-[220px] max-w-sm rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg"
      whileHover={{ scale: 1.02 }}
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </motion.div>
  );
}
