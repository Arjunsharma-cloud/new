"use client";

import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  description: string;
  tag: string;
};

export default function EventCard({ title, description, tag }: EventCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {tag}
        </span>
      </div>
      <div className="mb-4 h-44 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center leading-[176px] text-sm font-semibold text-slate-500">
        EVENT IMAGE HERE
      </div>
      <p className="text-slate-600">{description}</p>
    </motion.article>
  );
}
