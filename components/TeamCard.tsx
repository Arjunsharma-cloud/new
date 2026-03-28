"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

type TeamCardProps = {
  name: string;
  role: string;
  year: string;
  photoSrc?: string;
};

export default function TeamCard({
  name,
  role,
  year,
  photoSrc,
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
      <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-slate-200 bg-white p-1 mx-auto">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={`${name} photo`}
            className="h-full w-full rounded-full object-contain"
          />
        ) : (
          <span className="text-sm font-semibold text-slate-400">Photo</span>
        )}
      </div>
      <h4 className="text-lg font-semibold text-slate-900">{name}</h4>
      <p className="text-sm text-slate-600">{role}</p>
      <p className="mb-3 text-sm font-medium text-slate-500">{year}</p>
      <div className="flex gap-3 text-slate-500">
        <a
          href="#"
          aria-label="LinkedIn"
          className="rounded-full p-2 hover:bg-blue-50 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="rounded-full p-2 hover:bg-slate-100 hover:text-slate-900"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          aria-label="Email"
          className="rounded-full p-2 hover:bg-rose-50 hover:text-rose-600"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.article>
  );
}
