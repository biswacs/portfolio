import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Github, ChevronRight, Twitter } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8">
      <motion.button
        className="w-full text-left flex items-center justify-between py-2 px-4 bg-neutral-100 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-mono text-neutral-600 font-semibold">
          {title}
        </span>
        <ChevronRight
          className={`transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </motion.button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 px-4">{children}</div>
      </motion.div>
    </div>
  );
};

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-block px-4 py-1 m-2 font-mono text-sm bg-neutral-200 rounded-full">
    {skill}
  </span>
);

const App: React.FC = () => {
  const downloadPDF = () => {
    const input = document.getElementById("content");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("biswarupsen-resume.pdf");
      });
    }
  };

  return (
    <div className="h-screen overflow-y-auto no-scrollbar bg-white text-neutral-800 flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" id="content">
          <div className="mb-12 text-center">
            <motion.img
              src="/me.gif"
              alt="Biswarup Sen"
              className="w-36 h-36 mx-auto rounded-full mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <h1 className="text-4xl font-mono font-bold mb-2">Biswarup Sen</h1>
            <p className="text-xl font-mono text-neutral-600">
              Backend | System Design | DevOps
            </p>
          </div>

          <div className="space-y-6">
            <Section title="About Me">
              <p className="text-neutral-800 font-mono leading-relaxed">
                I am a backend developer with experience in DevOps and system
                design, as well as additional experience in the MERN stack and
                frontend development. I'm passionate about building technology.
              </p>
            </Section>

            <Section title="Experience">
              <div className="space-y-6 font-mono">
                <div>
                  <h3 className="font-semibold text-neutral-600">
                    Greenwave group of companies Limited
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Backend Developer | Jan 2024 - May 2024
                  </p>
                  <p className="mt-2 text-neutral-800">
                    Implemented a serverless architecture to enhance
                    scalability, reduce operational overhead, and improve the
                    overall performance and reliability of their hiring
                    platform.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-600">
                    Webkites Websolutions Private Limited
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Fullstack Developer | June 2024
                  </p>
                  <p className="mt-2 text-neutral-800">
                    Developed the frontend portal for Yogasana Bharat and the
                    World Yogasana Federation, handling backend logic and the
                    admin side for registering users and managing their data,
                    utilizing AWS for cloud services.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Projects">
              <div className="space-y-6 font-mono">
                <div>
                  <h3 className="font-semibold">Kribble 200+ users</h3>
                  <p className="text-neutral-800">
                    A social platform for college students to share and stream
                    video and images. Built with React.js, Node.js, and
                    PostgreSQL, Ec2, S3, CloudFront.
                  </p>
                  <a
                    onClick={() => {
                      window.open("https://www.kribble.net");
                    }}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    View Project
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">StockIt 1200+ users</h3>
                  <p className="text-neutral-800">
                    An advanced stock analysis platform using Next.js and
                    Node.js.
                  </p>
                  <a
                    onClick={() => {
                      window.open("https://stockit.algabay.com/");
                    }}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    View Project
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold">Centralized Exchange</h3>
                  <p className="text-neutral-800">
                    Built a centralized exchange platform focusing on high
                    availability, low latency, and secure transactions using
                    Node.js, PostgreSQL, and Redis.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Skills">
              <div className="flex flex-wrap -m-1">
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
                <SkillBadge skill="Serverless Architecture" />
                <SkillBadge skill="Redis" />
                <SkillBadge skill="System Design" />
                <SkillBadge skill="WebRTC" />
              </div>
            </Section>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:biswarupsen.work@gmail.com"
                className="text-neutral-600 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <Mail size={24} />
              </a>
              <a
                onClick={() => {
                  window.open("https://github.com/bsen/");
                }}
                className="text-neutral-600 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <Github size={24} />
              </a>
              <a
                onClick={() => {
                  window.open("https://www.linkedin.com/in/biswarup-sen/");
                }}
                className="text-neutral-600 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <Linkedin size={24} />
              </a>
              <a
                onClick={() => {
                  window.open("https://x.com/biswasys");
                }}
                className="text-neutral-600 hover:text-neutral-800 transition-colors cursor-pointer"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={downloadPDF}
            className="px-4 py-1.5 bg-neutral-800 text-white rounded-md"
          >
            Download as PDF
          </button>
        </div>
      </div>

      <footer>
        <div className="container mx-auto px-4 mb-2 font-mono text-center text-neutral-600">
          © {new Date().getFullYear()} bsen.tech
        </div>
      </footer>
    </div>
  );
};

export default App;
