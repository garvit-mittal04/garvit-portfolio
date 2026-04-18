"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  X,
  BriefcaseBusiness,
  GraduationCap,
  BrainCircuit,
  BarChart3,
  Database,
  LineChart,
  Boxes,
  FileBarChart,
  Award,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const experienceData = [
  {
    role: "Business Analyst",
    company: "JityAI",
    period: "Jan 2025 - Aug 2025",
    points: [
      "Performed SKU-level pricing and demand analysis for retail clients, building time-series forecasting models in Python and interactive dashboards in Power BI and Tableau to support inventory allocation and product-mix decisions.",
      "Developed and validated regression and time-series models on sales velocity, margin, and product-mix data; improved forecast accuracy by 15–20% through feature engineering and iterative model tuning.",
      "Translated model outputs into structured pricing and inventory scenario reports for stakeholder review, supporting product roadmap prioritization and establishing standardized reporting workflows.",
    ],
  },
  {
    role: "Operations & Business Analyst",
    company: "Harsiddhi Foods Pvt. Ltd.",
    period: "Apr 2025 – Jul 2025",
    points: [
      "Analyzed 20,000+ procurement, production, and export records in SQL and Excel to identify cost variances and supplier pricing gaps; findings informed gross margin decisions in quarterly business reviews.",
      "Built a regression-based demand forecasting model on 12 months of sales and procurement data, improving inventory planning accuracy by 15% and reducing stockout and overstock incidents.",
      "Presented product-line contribution margin and cost-allocation analyses through Power BI dashboards to senior leadership during supply chain reviews.",
      "Automated vendor payment and accounts receivable reconciliation using Excel Power Query and VBA, reducing monthly close time by 25% and standardizing reporting formats across the finance team.",
    ],
  },
  {
    role: "Accounts & Audit Trainee",
    company: "Dipankar Gupta & Co.",
    period: "May 2024 - Jun 2024",
    points: [
      "Reviewed and reconciled financial records across multiple client portfolios in Excel; standardized data-validation checklists and review workflows to improve accuracy and reduce manual errors.",
      "Performed compliance checks and data-quality audits on 30+ client document sets, identifying discrepancies and flagging issues for audit review and resolution.",
      "Built automated Excel templates using dynamic formulas and PivotTables, cutting recurring report preparation time by 20%; templates were adopted across the team for standard engagements.",
    ],
  },
];

const projectData = [
  {
    icon: <Boxes size={22} />,
    title: "ML-Powered Warehouse Decision System",
    subtitle: "Python · SQL · XGBoost · Prophet · SHAP",
    description:
      "End-to-end ML decision system built on ~53,000 supply chain records, combining forecasting, disruption risk classification, and throughput prediction into one operational workflow.",
    bullets: [
      "Built forecasting and throughput models using Facebook Prophet, XGBoost, and Gradient Boosting (R² = 0.874)",
      "Designed a 5-table MySQL schema and validated model outputs with 6 statistical tests in R",
      "Used SHAP to identify key cost drivers ($2,286 per disruption hour) and translated findings into staffing recommendations projecting $840K+ in annual savings",
    ],
    link: "https://github.com/garvit-mittal04/warehouse-decision-system",
    linkLabel: "View GitHub Project",
  },
  {
    icon: <LineChart size={22} />,
    title: "Revenue Prediction & Customer Segmentation",
    subtitle: "Predictive Analytics · Regression · Classification",
    description:
      "Developed predictive models for revenue forecasting and customer segmentation to support targeted business planning, prioritization, and performance analysis.",
    bullets: [
      "Built regression and classification workflows for forecasting and customer targeting",
      "Improved decision quality by translating model outputs into actionable business insights",
      "Structured the project to connect analytics with growth and profitability objectives",
    ],
    link: "",
    linkLabel: "",
  },
  {
    icon: <Database size={22} />,
    title: "SQL Database Design & KPI Dashboard",
    subtitle: "SQL · Power BI · DAX · Business Reporting",
    description:
      "Designed a normalized relational schema and built a multi-period KPI dashboard layer to support stakeholder performance monitoring and reduce manual data pulls.",
    bullets: [
      "Wrote optimized queries using JOINs, CTEs, and window functions; improved retrieval performance through strategic indexing and stored procedures",
      "Built rolling-revenue metrics and multi-period KPI dashboards in Power BI with DAX measures",
      "Enabled stakeholders to track performance trends without relying on manual pulls from operational systems",
    ],
    link: "",
    linkLabel: "",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "JityAI Analytics Platform",
    subtitle: "Pricing Analytics · Forecasting · Inventory Insights",
    description:
      "Worked on an analytics platform centered on pricing analysis, demand forecasting, SKU-level performance, and inventory optimization for better business decisions.",
    bullets: [
      "Built analytics around product performance, sales trends, and inventory planning",
      "Supported pricing and assortment decisions using structured KPI views",
      "Connected business analysis with practical operating recommendations",
    ],
    link: "",
    linkLabel: "",
  },
];

const skillsData = {
  "Query & Programming": [
    "SQL (Joins, CTEs, Window Functions)",
    "Python (Pandas, NumPy, Scikit-learn)",
    "R",
    "VBA",
  ],
  "BI & Visualization": [
    "Power BI (DAX)",
    "Tableau",
    "Excel (Pivot Tables, Power Query)",
    "KPI Dashboard Development",
    "Data Storytelling",
  ],
  "Analytics Methods": [
    "Forecasting & Regression",
    "A/B & Hypothesis Testing",
    "Customer Segmentation",
    "Variance Analysis",
    "ETL & Data Cleaning",
    "Reporting Automation",
  ],
  "Business & Finance": [
    "Financial & Operational Reporting",
    "FP&A Support",
    "Root-Cause Analysis",
    "Stakeholder Communication",
  ],
};

const certifications = [
  "Data Science & Business Analytics — University of Maryland",
  "Power BI — Udemy",
  "Tableau Desktop Specialist",
  "Economics & Sustainability — Wayland Baptist",
];

export default function GarvitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;
      let current = "about";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="text-lg font-semibold tracking-wide">
            Garvit Mittal
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 pb-4 md:hidden">
            <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="top"
        className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-sm uppercase tracking-[0.22em] text-gray-500"
            >
              Business Analytics · AI · Finance · Operations
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            >
              Turning operational data
              <span className="block text-gray-300">
                into decisions leaders can act on.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
            >
              I&apos;m Garvit Mittal — MS Business Analytics & AI student at UT Dallas
              with hands-on experience translating financial, sales, and operational
              data into forecasting models, KPI dashboards, and automated reporting
              systems that support real business decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                View Projects <ArrowRight size={16} />
              </a>

              <a
                href="/RESUME.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
              >
                <Download size={16} /> Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-gray-500">Current Program</p>
                <p className="mt-2 text-lg font-semibold">MS Business Analytics & AI</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-2 text-lg font-semibold">Dallas, Texas</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-gray-500">Core Stack</p>
                <p className="mt-2 text-lg font-semibold">SQL · Python · Power BI</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-sm text-gray-500">Focus Areas</p>
                <p className="mt-2 text-lg font-semibold">Analytics · Strategy · ML</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-gray-500">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Who I am</h2>
          </div>

          <div className="space-y-5 text-gray-300 leading-8">
            <p>
              My finance background shapes how I think about business — in terms of
              cost, margin, growth, and performance. My analytics training gives me
              the tools to measure, predict, and improve those outcomes through
              data.
            </p>

            <p>
              Across my work, I&apos;ve built forecasting models that lifted accuracy
              15–20%, analyzed 20,000+ operational records to surface cost drivers,
              and automated reporting workflows that cut monthly close time by 25%.
              I care most about projects where data doesn&apos;t just get reported
              — it actually changes what decision gets made.
            </p>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="mb-8 flex items-center gap-3">
          <GraduationCap size={24} />
          <h2 className="text-3xl font-semibold md:text-4xl">Education</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-gray-500">Expected May 2027</p>
            <h3 className="mt-2 text-xl font-semibold">
              MS in Business Analytics & Artificial Intelligence
            </h3>
            <p className="mt-2 text-gray-300">The University of Texas at Dallas</p>
            <p className="mt-1 text-sm text-gray-500">GPA: 3.44 / 4.0</p>
            <p className="mt-4 leading-7 text-gray-400">
              Relevant Coursework: Data Analytics, Advanced Statistics, A/B Testing,
              Applied Econometrics, Operations Management.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-gray-500">Completed May 2025</p>
            <h3 className="mt-2 text-xl font-semibold">BBA (Hons.) in Finance</h3>
            <p className="mt-2 text-gray-300">Christ University, Bangalore, India</p>
            <p className="mt-4 leading-7 text-gray-400">
              Built a strong foundation in finance, business analysis, reporting,
              and performance evaluation that now complements my analytics and AI
              work.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-center gap-3">
            <Award size={20} />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-3 text-gray-300 leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="mb-10 flex items-center gap-3">
          <BriefcaseBusiness size={24} />
          <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
        </div>

        <div className="relative ml-3 space-y-10 border-l border-white/10">
          {experienceData.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-white" />
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-gray-300">{item.company}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-gray-500">{item.period}</p>
                </div>

                <ul className="mt-5 space-y-3 text-gray-400 leading-7">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="mb-10 flex items-center gap-3">
          <BrainCircuit size={24} />
          <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                {project.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{project.subtitle}</p>
              <p className="mt-4 leading-7 text-gray-400">{project.description}</p>

              <ul className="mt-5 space-y-3 text-gray-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-white hover:text-gray-300"
                >
                  {project.linkLabel} <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="mb-10 flex items-center gap-3">
          <FileBarChart size={24} />
          <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-gray-500">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-gray-400">
            I&apos;m building toward roles in business analytics, AI, operations,
            strategy, and data-driven decision-making. I&apos;d be glad to connect
            for internships, projects, or professional opportunities.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:garvitm534@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <Mail size={20} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-200">garvitm534@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5">
              <MapPin size={20} />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-200">Dallas, Texas</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <ExternalLink size={20} />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="text-gray-200">garvit-mittal-81171632a</p>
              </div>
            </a>

            <a
              href="https://github.com/garvit-mittal04"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <ExternalLink size={20} />
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="text-gray-200">garvit-mittal04</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl border-t border-white/10 px-6 py-8 text-sm text-gray-500 md:px-8">
        © {new Date().getFullYear()} Garvit Mittal. Built as a premium analytics portfolio.
      </footer>
    </main>
  );
}