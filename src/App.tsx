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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
    className="inline-block px-4 py-1.5 m-2 font-mono text-sm bg-neutral-200 text-neutral-800 rounded-full shadow-md"
  >
    {skill}
  </motion.span>
);

const App: React.FC = () => {
  const downloadPDF = async () => {
    const content = document.getElementById("content");
    if (!content) return;

    const scale = 2;
    const padding = 20;

    const canvas = await html2canvas(content, {
      scale: scale,
      useCORS: true,
      logging: false,
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [imgWidth, imgHeight + (padding * 2) / scale],
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    pdf.addImage(imgData, "JPEG", 0, padding / scale, imgWidth, imgHeight);

    pdf.save("biswarupsen-resume.pdf");
  };

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
            <div className="mt-8 flex justify-center">
              <img
                className="h-32 shadow-lg"
                src="https://camo.githubusercontent.com/440a5e97734a233cc7093917cd3fd3699795c52134d5024cab8f5961f0b5bb35/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6273656e26"
              />
            </div>
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
                  Greenwave group of companies Limited
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Backend Developer | Jan 2024 - May 2024
                </p>
                <p className="text-neutral-600">
                  Implemented a serverless architecture to enhance scalability,
                  reduce operational overhead, and improve the overall
                  performance and reliability of their hiring platform.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Webkites Websolutions Private Limited
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Fullstack Developer | June 2024
                </p>
                <p className="text-neutral-600">
                  Developed the frontend portal for Yogasana Bharat and the
                  World Yogasana Federation, handling backend logic for
                  admin-side user registration and data management, and utilized
                  AWS for cloud services.
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
                  Developed a social platform for college students to share and
                  stream videos and images. Built with React.js, Node.js, and
                  PostgreSQL, and utilizing AWS services such as EC2, S3, and
                  CloudFront.
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
                  StockIt{" "}
                  <span className="text-neutral-600 font-light">
                    1200+ users
                  </span>
                </h3>
                <p className="mb-4 text-neutral-600">
                  Developed an advanced AI-based stock analysis platform
                  utilizing Next.js, Node.js, OpenAI, and MongoDB. The platform
                  provides detailed financial insights and analytics to help
                  users make informed investment decisions.
                </p>
                <a
                  onClick={() => window.open("https://stockit.algabay.com/")}
                  className="text-blue-600 cursor-pointer"
                >
                  View Project →
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <h3 className="font-semibold text-xl text-neutral-600">
                  Centralized Exchange
                </h3>
                <p className="mb-4 text-neutral-600">
                  Built a centralized exchange platform focusing on high
                  availability, low latency, and secure transactions using
                  Node.js, PostgreSQL, and Redis.
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
      </div>

      <footer className="py-8 text-center text-neutral-400">
        <p>© {new Date().getFullYear()} bsen.tech</p>
      </footer>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={downloadPDF}
        className="hidden fixed bottom-8 right-8 px-6 py-3 bg-neutral-200 text-black rounded-full shadow-lg items-center justify-center"
      >
        <Download size={20} className="mr-2" />
        Download Resume
      </motion.button>
    </div>
  );
};

export default App;
