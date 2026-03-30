"use client";

import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  year: string;
  photoSrc?: string;
  email: string;
};

export default function TeamCard({
  name,
  role,
  year,
  photoSrc,
  email,
}: TeamCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-slate-200 bg-white p-1 mx-auto">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={`${name} photo`}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="text-sm font-semibold text-slate-400">Photo</span>
        )}
      </div>
      <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
      <p className="text-sm text-slate-600">{role}</p>
      <p className="mb-3 text-sm font-medium text-slate-500">{year}</p>
      <a
        href={`mailto:${email}`}
        className="text-base text-slate-600 hover:text-blue-600 transition-colors"
      >
        {email}
      </a>
    </motion.article>
  );
}
