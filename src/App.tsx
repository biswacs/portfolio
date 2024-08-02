import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Github,
  ChevronRight,
  Twitter,
  Download,
} from "lucide-react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-neutral-100 rounded-xl overflow-hidden shadow-lg"
    >
      <motion.button
        className="w-full text-left flex items-center justify-between py-4 px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-mono text-neutral-600 font-semibold">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-neutral-600" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white backdrop-blur-sm">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-neutral-700 text-neutral-100 rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-white text-black font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" id="content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src="/me.gif"
                alt="Biswarup Sen"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h1 className="text-5xl font-bold mb-4 text-neutral-600">
              Biswarup Sen
            </h1>
            <p className="text-2xl text-neutral-600">
              Backend | System Design | DevOps
            </p>
          </motion.div>

          <Section title="About Me">
            <p className="leading-relaxed">
              I'm a backend developer with expertise in DevOps, system design,
              and the MERN stack. I am passionate about building tech.
            </p>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Dukaan
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Backend Engineer | Current Role since July 2024
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Webkites
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Fullstack Developer | June 2024 - July 2024
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Algabay AI
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Founder & Tech Lead | April 2023 - April 2024
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-8">
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Kribble{" "}
                  <span className="text-neutral-4\600 font-light">
                    200+ users
                  </span>
                </h3>
                <p className="mb-4 text-neutral-600">
                  A social platform for college students to share and stream
                  video and images. The social platform has a monolithic backend
                  that originally used Hono.js and Cloudflare but later switched
                  to Express.js and AWS for better cost efficiency. Media files
                  are stored in S3 for scalable storage, while CloudFront helps
                  deliver these files quickly. Switching to Express.js and AWS
                  improved performance and reduced costs by taking advantage of
                  AWS's powerful infrastructure.
                </p>
                <a
                  onClick={() => window.open("https://www.kribble.net")}
                  className="text-blue-600 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Vipanie
                </h3>
                <p className="mb-4 text-neutral-600">
                  Vipanie is a platform that enables any business to
                  effortlessly launch their online store. Built with React,
                  Node.js, Postgres, and S3 with CloudFront, businesses can add
                  their products, and Vipanie generates a webstore for them,
                  allowing customers to place orders. It also includes a
                  dashboard to manage orders efficiently.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Centralized Exchange Server
                </h3>
                <p className="mb-4 text-neutral-600">
                  The centralized exchange server is built using Node.js for
                  efficient backend handling, PostgreSQL for reliable
                  transaction management, and Redis for fast data retrieval.
                  This setup ensures high availability, low latency, and secure
                  transactions.
                </p>
              </motion.div>
            </div>
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap -m-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="Express.js" />
              <SkillBadge skill="MongoDB" />
              <SkillBadge skill="PostgreSQL" />
              <SkillBadge skill="AWS" />
              <SkillBadge skill="Docker" />
              <SkillBadge skill="Kubernetes" />
              <SkillBadge skill="Git" />
              <SkillBadge skill="CI/CD" />
              <SkillBadge skill="Serverless" />
              <SkillBadge skill="Redis" />
              <SkillBadge skill="System Design" />
              <SkillBadge skill="WebRTC" />
            </div>
          </Section>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:biswarupsen.work@gmail.com"
              className="text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/bsen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.linkedin.com/in/biswarup-sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://x.com/biswasys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              <Twitter size={28} />
            </motion.a>
          </div>
        </motion.div>
        <div className="hidden  justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("/biswarupsen-resume.pdf");
            }}
            className="flex  px-6 py-3 bg-neutral-100 text-black rounded-full shadow-lg items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </div>

      <footer className="py-8 text-center text-neutral-400">
        <p>© {new Date().getFullYear()} bsen.tech</p>
      </footer>
    </div>
  );
};

export default App;
