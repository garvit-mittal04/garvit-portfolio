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
  Sparkles,
  ShieldCheck,
  Target,
  Globe,
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
      "Performed SKU-level pricing and demand analysis for retail-focused use cases, building forecasting workflows and KPI views that supported inventory allocation and product-mix decisions.",
      "Developed regression and time-series models on sales velocity, margin, and assortment data, improving forecast accuracy by 15–20% through feature engineering and iterative refinement.",
      "Translated analytical outputs into structured business reports and decision views for stakeholders, helping standardize reporting workflows around pricing, inventory, and roadmap prioritization.",
    ],
  },
  {
    role: "Operations & Business Analyst",
    company: "Harsiddhi Foods Pvt. Ltd.",
    period: "Apr 2025 – Jul 2025",
    points: [
      "Analyzed 20,000+ procurement, production, and export records in SQL and Excel to identify supplier pricing gaps, cost variances, and margin pressure points for quarterly business reviews.",
      "Built a regression-based demand forecasting workflow using 12 months of sales and procurement data, improving inventory planning accuracy by 15% and reducing stockout and overstock risks.",
      "Presented product-line contribution margin and cost-allocation insights through Power BI dashboards to support supply chain and leadership decision-making.",
      "Automated vendor payment and accounts receivable reconciliation with Excel Power Query and VBA, reducing monthly close time by 25% and improving reporting consistency.",
    ],
  },
  {
    role: "Accounts & Audit Trainee",
    company: "Dipankar Gupta & Co.",
    period: "May 2024 - Jun 2024",
    points: [
      "Reviewed and reconciled financial records across multiple client portfolios, strengthening reporting accuracy through standardized validation workflows and audit support.",
      "Performed compliance checks and data-quality audits on 30+ client document sets, identifying discrepancies and escalating issues for timely review and resolution.",
      "Built reusable Excel templates with dynamic formulas and PivotTables, cutting recurring report preparation time by 20% and improving standardization across engagements.",
    ],
  },
];

const flagshipProject = {
  title: "ML-Powered Warehouse Decision System",
  subtitle: "Flagship Project · Python · SQL · XGBoost · Prophet · SHAP · R",
  description:
    "A business-focused decision system designed to improve warehouse operations by turning shipment, disruption, and throughput data into better staffing, flow, and risk-management decisions.",
  bullets: [
    "Built an end-to-end workflow across ~53,000 supply chain records covering demand forecasting, disruption risk classification, throughput prediction, and decision support.",
    "Developed forecasting and predictive models using Prophet, XGBoost, and Gradient Boosting, with throughput prediction reaching R² = 0.874.",
    "Designed a 5-table MySQL schema, ran 8 analytical SQL queries, and validated insights with 6 statistical tests in R.",
    "Applied SHAP explainability to identify operational cost drivers, including an estimated $2,286 cost per disruption hour, and translated findings into staffing and flow recommendations.",
    "Structured the project as a realistic operations decision engine rather than a standalone model, aligning analytics outputs with warehouse manager and leadership decisions.",
  ],
  github: "https://github.com/garvit-mittal04/warehouse-decision-system",
};

const projectData = [
  {
    icon: <LineChart size={22} />,
    title: "Revenue Prediction & Customer Segmentation",
    subtitle: "Predictive Analytics · Regression · Classification",
    description:
      "Built predictive workflows for revenue forecasting and customer segmentation to support prioritization, business planning, and performance improvement initiatives.",
    bullets: [
      "Designed regression and classification workflows for forecasting and customer targeting.",
      "Connected model outputs with business actions instead of stopping at technical metrics.",
      "Framed the work around growth, profitability, and decision support.",
    ],
    link: "",
    linkLabel: "",
  },
  {
    icon: <Database size={22} />,
    title: "SQL Database Design & KPI Dashboard",
    subtitle: "SQL · Power BI · DAX · Reporting Automation",
    description:
      "Designed a normalized relational database structure and KPI dashboard layer to reduce manual reporting effort and improve stakeholder visibility into performance trends.",
    bullets: [
      "Wrote optimized SQL queries using JOINs, CTEs, and window functions for operational and performance analysis.",
      "Built KPI dashboards in Power BI with DAX to track multi-period trends and business performance.",
      "Reduced reliance on manual operational data pulls by structuring reusable reporting logic.",
    ],
    link: "",
    linkLabel: "",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "JityAI Analytics Platform Work",
    subtitle: "Pricing Analytics · Forecasting · Inventory Insights",
    description:
      "Worked on analytics use cases involving pricing, demand forecasting, SKU-level performance, and inventory analysis to support better operating decisions.",
    bullets: [
      "Built analysis around sales trends, product mix, and inventory planning.",
      "Supported pricing and assortment decisions using structured KPI views.",
      "Connected analytics with practical recommendations for decision-makers.",
    ],
    link: "",
    linkLabel: "",
  },
];

const skillsData = {
  "Analytics & Decisioning": [
    "Forecasting",
    "Regression",
    "Classification",
    "Hypothesis Testing",
    "Root-Cause Analysis",
    "Decision Support",
  ],
  "Data & Programming": [
    "SQL",
    "Python",
    "R",
    "Excel",
    "Power Query",
    "VBA",
  ],
  "BI & Visualization": [
    "Power BI",
    "DAX",
    "Tableau",
    "KPI Dashboards",
    "Data Storytelling",
  ],
  "Business & Operations": [
    "Supply Chain Analytics",
    "Operational Reporting",
    "Financial Analysis",
    "Margin Analysis",
    "Stakeholder Communication",
    "Process Improvement",
  ],
};

const certifications = [
  "Data Science & Business Analytics - University of Maryland",
  "Power BI - Udemy",
  "Tableau Desktop Specialist",
  "Economics & Sustainability - Wayland Baptist",
];

const quickStats = [
  {
    label: "Forecast Accuracy Lift",
    value: "15–20%",
    icon: <Target size={18} />,
  },
  {
    label: "Operational Records Analyzed",
    value: "20,000+",
    icon: <Database size={18} />,
  },
  {
    label: "Monthly Close Time Reduced",
    value: "25%",
    icon: <BarChart3 size={18} />,
  },
  {
    label: "Warehouse Throughput Model",
    value: "R² 0.874",
    icon: <ShieldCheck size={18} />,
  },
];

export default function GarvitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 160;
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
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-[260px] w-[260px] rounded-full bg-white/5 blur-3xl" />
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              <Sparkles size={15} />
              MS Business Analytics & AI · UT Dallas
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-sm uppercase tracking-[0.22em] text-gray-500"
            >
              Business Analytics · Operations · Supply Chain · AI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            >
              Building data-driven systems
              <span className="block text-gray-300">
                for real-world operational decisions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
            >
              I&apos;m Garvit Mittal, a Business Analytics & AI graduate student with
              experience across operations, forecasting, reporting automation, and
              business analysis. I work at the intersection of analytics and business
              decision-making, building models, dashboards, and reporting systems that
              help leaders act with more clarity, speed, and confidence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78 }}
              className="mt-5 max-w-3xl text-base leading-8 text-gray-300"
            >
              My strongest work includes an ML-powered warehouse decision system,
              forecasting projects, operational analysis, and KPI frameworks built to
              solve real business problems rather than showcase isolated tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
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
                href="https://www.garvitmittal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
              >
                <Globe size={16} /> Live Portfolio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.92 }}
              className="mt-10 flex flex-wrap gap-4 text-sm text-gray-400"
            >
              <a
                href="mailto:garvitm534@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/10"
              >
                <Mail size={14} /> garvitm534@gmail.com
              </a>
              <a
                href="https://github.com/garvit-mittal04"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/10"
              >
                <ExternalLink size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/10"
              >
                <ExternalLink size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="flex items-center gap-2 text-gray-500">
                    {item.icon}
                    <p className="text-sm">{item.label}</p>
                  </div>
                  <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm text-gray-500">Current Focus</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Business Analytics, Supply Chain, Operations, BI, and AI-driven
                decision support
              </p>
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
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">How I think</h2>
          </div>

          <div className="space-y-5 leading-8 text-gray-300">
            <p>
              My background in finance and business analysis shapes how I approach
              data. I do not look at analytics as just modeling or reporting. I look
              at it as a way to improve cost visibility, forecasting quality,
              operational efficiency, and business decision outcomes.
            </p>

            <p>
              Across my work, I have built forecasting models that improved planning
              accuracy by 15–20%, analyzed 20,000+ operational records to surface cost
              and supplier insights, and automated reporting workflows that reduced
              monthly close time by 25%.
            </p>

            <p>
              I am most interested in roles where data is used to drive better
              decisions in supply chain, operations, business intelligence, and
              performance management. My goal is to build systems that help teams move
              from reactive reporting to structured, forward-looking decision-making.
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
              Relevant areas: Data Analytics, Advanced Statistics, A/B Testing,
              Applied Econometrics, and Operations Management.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-gray-500">Completed May 2025</p>
            <h3 className="mt-2 text-xl font-semibold">BBA (Hons.) in Finance</h3>
            <p className="mt-2 text-gray-300">Christ University, Bangalore, India</p>
            <p className="mt-4 leading-7 text-gray-400">
              Built a foundation in finance, business reporting, analysis, and
              performance evaluation that now complements my analytics and AI work.
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-[30px] border border-white/10 bg-white/[0.05] p-7"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Sparkles size={15} />
            Flagship Project
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Boxes size={24} />
              </div>

              <h3 className="mt-5 text-3xl font-semibold">{flagshipProject.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{flagshipProject.subtitle}</p>
              <p className="mt-5 max-w-3xl leading-8 text-gray-300">
                {flagshipProject.description}
              </p>

              <a
                href={flagshipProject.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View GitHub Project <ExternalLink size={15} />
              </a>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                Why it stands out
              </p>
              <ul className="mt-5 space-y-4 text-gray-300">
                {flagshipProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
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
            Open to analytics and operations opportunities.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-gray-400">
            I&apos;m actively building toward roles in business analytics, operations,
            supply chain, business intelligence, and AI-enabled decision support. If
            you are hiring for internships, analyst roles, or project-based work, I&apos;d
            be glad to connect.
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
        © {new Date().getFullYear()} Garvit Mittal. Built to showcase business
        analytics, operations, and decision-focused project work.
      </footer>
    </main>
  );
}