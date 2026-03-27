"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import EventCard from "@/components/EventCard";
import TeamCard from "@/components/TeamCard";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Cloud,
  Smartphone,
  Globe,
  Users,
  Megaphone,
} from "lucide-react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const domainCards = [
  {
    icon: <Code2 size={20} />,
    title: "Web Development",
    description:
      "Build modern web apps with best practices and design systems.",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI/ML",
    description:
      "Experiment with models, data pipelines, and real-world use cases.",
  },
  {
    icon: <Megaphone size={20} />,
    title: "GenAI",
    description: "Explore generative AI for creative and productive workflows.",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud",
    description: "Deploy scalable services with computing, storage, and infra.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "App Development",
    description:
      "Design mobile-first, responsive experiences and cross-platform apps.",
  },
  {
    icon: <Users size={20} />,
    title: "Event Management",
    description: "Plan community-first events, workshops, and hackathons.",
  },
  {
    icon: <Globe size={20} />,
    title: "Social Media",
    description:
      "Grow outreach with branding, content, and engagement strategies.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Navbar />
      <main className="pt-24">
        <section
          id="home"
          className="grid min-h-screen w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              GDG IIIT Kota
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Learn. Build. Connect.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Empowering the next generation of developers to innovate,
              collaborate, and lead the future.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Join Us
              </a>
              <a
                href="#events"
                className="rounded-xl border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                View Events
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 gap-4"
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/80 text-sm font-semibold text-slate-500"
              >
                EVENT IMAGE {idx + 1}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Section
          id="about"
          title="About GDG IIIT Kota"
          subtitle="A community-led initiative to empower developers and create meaningful impact."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card
              icon={<Globe size={20} />}
              title="About GDG (Global)"
              description="Google Developer Groups are community run programs to connect enthusiasts with learning and networking opportunities."
            />
            <Card
              icon={<Users size={20} />}
              title="Benefits"
              description="Learning, mentorship, exposure to new strategies, and collaboration on real projects."
            />
            <Card
              icon={<Cloud size={20} />}
              title="About GDG IIIT Kota"
              description="Vision: build developer leadership. Mission: empower students through workshops, events, and community growth."
            />
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-2xl font-semibold text-slate-800">
              Domains
            </h3>
            <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
              {domainCards.map((domain) => (
                <Card
                  key={domain.title}
                  icon={domain.icon}
                  title={domain.title}
                  description={domain.description}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="events"
          title="Events"
          subtitle="Showcasing our flagship events with high-energy participation."
        >
          <div className="grid gap-10">
            <motion.div
              className="grid gap-6 rounded-2xl border border-transparent bg-slate-50 p-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    GDG Got Latent
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Hackathon
                  </span>
                </div>
                <p className="mb-4 text-slate-700">
                  Participants are challenged to think creatively and
                  collaboratively by brainstorming a completely random idea
                  within a fixed time limit of one hour. During this period,
                  teams must rapidly generate, refine, and structure their
                  concept into something presentable and impactful. Once the
                  ideation phase is complete, each team presents their idea to
                  an audience of GDG members, who engage in an interactive and
                  dynamic questioning round. This round is designed in a fun,
                  “roasting-style” format, where participants are asked sharp,
                  thought-provoking, and sometimes humorous questions that test
                  the depth, feasibility, and originality of their ideas. The
                  goal is not just to defend the concept, but to demonstrate
                  clarity of thought, adaptability, and confidence under
                  pressure. Teams are evaluated based on multiple criteria,
                  including creativity, practicality, presentation skills, and
                  how effectively they handle the questioning round. At the end
                  of the session, scores are compiled, and the team with the
                  highest overall performance is declared the winner, making the
                  entire experience both competitive and highly engaging.
                </p>
              </div>

              <div className="grid gap-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-20 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-semibold text-slate-500 flex items-center justify-center"
                  >
                    EVENT IMAGE {idx + 1}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 rounded-2xl border border-transparent bg-slate-50 p-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Cloud Arcade 25-26
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Workshop
                  </span>
                </div>
                <p className="text-slate-700">
                  Cloud Arcade 2025–26 is a Google Cloud–hosted learning program
                  designed to provide students with hands-on experience in
                  real-world cloud technologies. Through a structured series of
                  interactive labs, participants explore core concepts such as
                  cloud infrastructure, deployment, data handling, and modern
                  development workflows—all within a guided, practical
                  environment. Participants completed lab-based challenges, and
                  this year the program achieved Tier 1 with 100+ students
                  finishing all labs and earning exclusive goodies.
                </p>
              </div>

              <div className="grid gap-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-20 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-semibold text-slate-500 flex items-center justify-center"
                  >
                    EVENT IMAGE {idx + 1}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 rounded-2xl border border-transparent bg-slate-50 p-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Genisis 3.0
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Session
                  </span>
                </div>
                <p className="text-slate-700">
                  Genesis 3.0 is designed as a strategic follow-up to Cloud
                  Arcade, bringing together all domain leads under one unified
                  platform. The event serves as a comprehensive showcase where
                  each domain lead introduces their respective area—ranging from
                  development and cloud to AI, design, and beyond—providing
                  students with a clear understanding of the opportunities
                  within each field. Each lead presents structured insights into
                  their domain, supported by growth graphs, real-world trends,
                  and potential career trajectories. This data-driven approach
                  helps participants visualize learning paths, industry demand,
                  and the long-term scope of each domain, enabling more informed
                  decision-making. To ensure active engagement, the session
                  incorporates interactive preference polling, allowing students
                  to express their interests in real time. This is complemented
                  by live Q&A sessions, where participants can directly interact
                  with domain leads, clarify doubts, and gain deeper insights
                  into specific fields. Overall, Genesis 3.0 emphasizes
                  collaboration, cross-domain awareness, and student-driven
                  participation. It creates an environment where learning is not
                  just informative but also interactive, empowering students to
                  align their interests with the right domain and take
                  meaningful steps forward in their technical journey.
                </p>
              </div>

              <div className="grid gap-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-20 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm font-semibold text-slate-500 flex items-center justify-center"
                  >
                    EVENT IMAGE {idx + 1}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        <Section
          id="team"
          title="Our Team"
          subtitle="Driven by passion, led by excellence."
        >
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <TeamCard
                name="Priyanshu Rohilla"
                role="Lead"
                year="3rd Year CSE"
                photoLabel="PHOTO HERE"
              />
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <TeamCard
                name="Anshuman Tripathi"
                role="Co-Lead"
                year="2nd Year CSE"
                photoLabel="PHOTO HERE"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Dhiraj Khuswaha"
              role="Web Dev Lead"
              year="2nd Year AIDE"
            />
            <TeamCard
              name="Arjun Sharma"
              role="App Dev Lead"
              year="2nd Year CSE"
            />
            <TeamCard
              name="Divyanshi Purohit"
              role="AI/ML Lead"
              year="2nd Year CSE"
            />
            <TeamCard
              name="Om Upadhyay"
              role="GenAI Lead"
              year="2nd Year CSE"
            />
            <TeamCard
              name="Parvika Shekhawat"
              role="Cloud Lead"
              year="2nd Year CSE"
            />
            <TeamCard
              name="Ayush Singh"
              role="Social Media Lead"
              year="2nd Year ECE"
            />
            <TeamCard
              name="Siddhant Dixit"
              role="Event Manager"
              year="2nd Year AIDE"
            />
            <TeamCard
              name="Vishesh Goel"
              role="Event Manager"
              year="2nd Year CSE"
            />
            <TeamCard name="Akash" role="Event Manager" year="2nd Year ECE" />
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact Us"
          subtitle="Get in touch for collaborations, mentorship, and event participation."
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg text-slate-700">
              Email:{" "}
              <span className="font-semibold text-slate-900">
                <a href="priyanshurohilla001@gmail.com">
                  priyanshurohilla001@gmail.com
                </a>
              </span>
            </p>
            <div className="mt-4 flex items-center gap-3 text-2xl text-slate-500">
              <a href="#" className="transition hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href="#" className="transition hover:text-slate-800">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </Section>

        <footer className="mb-12 mt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} GDG IIIT Kota. Crafted with Tailwind +
          Framer Motion.
        </footer>
      </main>
    </div>
  );
}
