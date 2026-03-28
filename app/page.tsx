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
      <main className="pt-[7rem]">
        <div className="w-full overflow-hidden bg-slate-50">
          <img
            src="/images/GDGbaner.png"
            alt="GDG Banner"
            className="h-64 w-full object-contain"
            style={{ minHeight: "16rem", backgroundColor: "#0f172a" }}
          />
        </div>

        <section
          id="home"
          className="grid min-h-screen w-full max-w-7xl gap-12 px-6 py-12 md:grid-cols-2 md:px-10"
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
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {[
              "/collage/cloudstudy.jpeg",
              "/collage/googlesol.jpeg",
              "/collage/webrelay.jpeg",
              "/collage/winterBreak.jpeg",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
              >
                <img
                  src={src}
                  alt={`Collage ${idx + 1}`}
                  className="h-80 w-full object-cover"
                />
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
              className="grid gap-6 rounded-2xl border border-transparent bg-white p-6 md:grid-cols-2"
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
                  Participants collaborate to brainstorm a random idea within
                  one hour, quickly shaping it into a clear and presentable
                  concept. Afterward, teams present their ideas to GDG members,
                  followed by a fun, roasting-style questioning round that tests
                  creativity, feasibility, and clarity. Teams are evaluated on
                  innovation, practicality, presentation, and how well they
                  handle questions. The highest-scoring team is declared the
                  winner, making the session both competitive and engaging.
                </p>
              </div>

              <div className="grid gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden bg-transparent"
                >
                  <img
                    src="/images/GDGgotlatent.png"
                    alt="GDG Got Latent Event"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 rounded-2xl border border-transparent bg-white p-6 md:grid-cols-2"
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
                  Cloud Arcade 2025–26 is a Google Cloud–hosted program that
                  provides hands-on experience through interactive labs covering
                  cloud infrastructure, deployment, data management, and modern
                  workflows. Participants complete real-world challenges to
                  build practical skills. The program fosters a learn-by-doing
                  approach, helping students gain confidence in using cloud
                  tools and services in practical scenarios. It also encourages
                  consistency and problem-solving through structured lab
                  progressions. This year, the program achieved Tier 1 status,
                  with 100+ students successfully finishing all labs.
                  Participants were also rewarded with exclusive Google Cloud
                  goodies for their accomplishment.
                </p>
              </div>

              <div className="grid gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-xl overflow-hidden bg-transparent"
                >
                  <img
                    src="/images/GOOGLECLOUD.jpeg"
                    alt="Cloud Arcade Event"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
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
                  Genesis 3.0 is a follow-up to Cloud Arcade that brings all
                  domain leads onto a single platform. Each lead introduces
                  their domain—such as development, cloud, AI, and design—while
                  sharing insights, growth trends, and career opportunities to
                  help students understand each field better. The session
                  includes interactive preference polling and live Q&A, allowing
                  students to engage directly and explore domains based on their
                  interests. Overall, the event focuses on collaboration,
                  awareness, and helping students choose the right path for
                  their technical journey.
                </p>
              </div>

              <div className="grid gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-xl overflow-hidden bg-transparent"
                >
                  <img
                    src="/images/genisis.jpeg"
                    alt="Genisis 3.0 Event"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 rounded-2xl border border-transparent bg-white p-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Git Sprint
                  </h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    Workshop
                  </span>
                </div>
                <p className="text-slate-700">
                  Git Sprint is a 2-day workshop offering prizes, hands-on
                  experience, quizzes, and interactive sessions teaching the
                  working and basic fundamentals of Git and GitHub. Participants
                  engage in practical exercises to master version control,
                  collaboration tools, and essential workflows for developers.
                </p>
              </div>

              <div className="grid gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-xl overflow-hidden bg-transparent"
                >
                  <img
                    src="/images/gitSprint.png"
                    alt="Git Sprint Event"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
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
                photoSrc="/team/priyanshu.png"
              />
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <TeamCard
                name="Anshuman Tripathi"
                role="Co-Lead"
                year="2nd Year CSE"
                photoSrc="/team/anshuman.png"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Dhiraj Khuswaha"
              role="Web Dev Lead"
              year="2nd Year AIDE"
              photoSrc="/team/dhiraj.png"
            />
            <TeamCard
              name="Arjun Sharma"
              role="App Dev Lead"
              year="2nd Year CSE"
              photoSrc="/team/arjun.png"
            />
            <TeamCard
              name="Divyanshi Purohit"
              role="AI/ML Lead"
              year="2nd Year CSE"
              photoSrc="/team/divyasnhi.jpeg"
            />
            <TeamCard
              name="Om Upadhyay"
              role="GenAI Lead"
              year="2nd Year CSE"
              photoSrc="/team/om.png"
            />
            <TeamCard
              name="Parvika Shekhawat"
              role="Cloud Lead"
              year="2nd Year CSE"
              photoSrc="/team/priyanshu.png"
            />
            <TeamCard
              name="Ayush Singh"
              role="Social Media Lead"
              year="2nd Year ECE"
              photoSrc="/team/ayush.jpeg"
            />
            <TeamCard
              name="Siddhant Dixit"
              role="Event Manager"
              year="2nd Year AIDE"
              photoSrc="/team/siddhant.png"
            />
            <TeamCard
              name="Vishesh Goel"
              role="Event Manager"
              year="2nd Year CSE"
              photoSrc="/team/vishesh.png"
            />
            <TeamCard
              name="Akash"
              role="Event Manager"
              year="2nd Year ECE"
              photoSrc="/team/akash.jpeg"
            />
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact Us"
          subtitle="Get in touch for collaborations, mentorship, and event participation."
        >
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
            <div>
              <p className="text-lg text-slate-700">
                Email:{" "}
                <a
                  href="mailto:office@iiitkota.ac.in"
                  className="font-semibold text-blue-600 hover:text-blue-800"
                >
                  office@iiitkota.ac.in
                </a>
              </p>
              <p className="mt-3 text-slate-700">Phone: +91 744 266 7000</p>
              <p className="text-slate-700">
                Address: IIIT Kota Permanent Campus
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 text-2xl text-slate-500">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:office@iiitkota.ac.in"
                className="transition hover:text-slate-800"
              >
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
