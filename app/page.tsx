"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
  GraduationCap,
  BarChart3,
  Database,
  LineChart,
  FileBarChart,
  Award,
  Sparkles,
  ShieldCheck,
  Target,
  Globe,
  Boxes,
  BriefcaseBusiness,
  BrainCircuit,
  ExternalLink,
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
      "Performed SKU-level pricing, demand, and assortment analysis for retail use cases, building KPI views and forecasting workflows that supported inventory allocation and product-mix decisions.",
      "Developed regression and time-series models on sales velocity, margin, and assortment data, improving forecast accuracy by 15–20% through feature engineering and iterative refinement.",
      "Translated analytical outputs into structured business reporting for stakeholders, helping standardize decision workflows across pricing, inventory, and roadmap prioritization.",
    ],
  },
  {
    role: "Operations & Business Analyst",
    company: "Harsiddhi Foods Pvt. Ltd.",
    period: "Apr 2025 - Jul 2025",
    points: [
      "Analyzed 20,000+ procurement, production, and export records in SQL and Excel to identify supplier pricing gaps, cost variances, and margin pressure points for quarterly business reviews.",
      "Built a regression-based demand forecasting workflow using 12 months of sales and procurement data, improving inventory planning accuracy by 15% and reducing stockout and overstock risk.",
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
      "Built reusable Excel templates with dynamic formulas and PivotTables, reducing recurring report preparation time by 20% and improving standardization across engagements.",
    ],
  },
];

const flagshipProject = {
  title: "ML-Powered Warehouse Decision System",
  subtitle:
    "Flagship Project · Python · SQL · XGBoost · Prophet · SHAP · R · Streamlit",
  description:
    "A business-focused analytics system designed to improve warehouse staffing, shipment flow, disruption monitoring, and throughput planning through forecasting, machine learning, SQL architecture, and decision support logic.",
  highlights: [
    { label: "Supply chain records analyzed", value: "53,000+" },
    { label: "Throughput model performance", value: "R² = 0.874" },
    { label: "SQL architecture", value: "5-table MySQL schema" },
    { label: "Statistical validation", value: "6 tests in R" },
  ],
  bullets: [
    "Built a realistic warehouse decision workflow covering demand forecasting, disruption risk classification, throughput prediction, and scenario-based planning support.",
    "Developed models using Prophet, XGBoost, and Gradient Boosting to connect operational data with staffing, planning, and flow-management decisions.",
    "Designed a structured SQL layer and analytical queries to make shipment, disruption, and throughput analysis reproducible and business-ready.",
    "Applied SHAP explainability to identify operational cost drivers, including an estimated $2,286 cost per disruption hour.",
    "Deployed the work as a live Streamlit application so model outputs could be used in a decision-facing interface rather than a static notebook.",
  ],
  github: "https://github.com/garvit-mittal04/warehouse-decision-system",
  liveApp: "https://warehouse-garvit.streamlit.app",
};

const projectData = [
  {
    icon: <LineChart size={22} />,
    title: "Customer Revenue Forecasting & Segmentation Model",
    subtitle: "Predictive Analytics · Regression · Classification",
    description:
      "Built forecasting and segmentation workflows to support revenue planning, customer prioritization, and performance improvement decisions.",
    bullets: [
      "Designed regression and classification workflows for revenue forecasting and customer grouping.",
      "Connected model outputs to business actions instead of stopping at technical metrics.",
      "Framed the work around growth, prioritization, and decision support.",
    ],
  },
  {
    icon: <Database size={22} />,
    title: "Operational KPI Reporting System",
    subtitle: "SQL · Power BI · DAX · Reporting Automation",
    description:
      "Designed a structured relational database and KPI dashboard layer to reduce manual reporting effort and improve visibility into operational and performance trends.",
    bullets: [
      "Wrote SQL queries using JOINs, CTEs, and window functions for operational and performance analysis.",
      "Built KPI dashboards in Power BI with DAX to track multi-period trends and business performance.",
      "Reduced manual data-pull dependency by structuring reusable reporting logic.",
    ],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Retail Pricing & Inventory Insights Engine",
    subtitle: "Retail Analytics · Forecasting · SKU Performance",
    description:
      "Worked on pricing, demand, and inventory analysis use cases to support SKU-level decisions, assortment visibility, and inventory planning.",
    bullets: [
      "Built analysis around sales trends, product mix, and inventory planning.",
      "Supported pricing and assortment decisions using structured KPI views.",
      "Translated analytical work into practical recommendations for decision-makers.",
    ],
  },
];

const skillsData = {
  "Analytics & Modeling": [
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
  "Economics & Sustainability - Wayland Baptist University",
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

const educationData = [
  {
    degree: "Master of Science in Business Analytics & Artificial Intelligence",
    school: "The University of Texas at Dallas",
    period: "2025 - Present",
    details:
      "Focused on business analytics, machine learning, operations, decision support, and data-driven problem solving.",
  },
  {
    degree: "Bachelor’s in Commerce",
    school: "University of Delhi",
    period: "Completed",
    details:
      "Built a foundation in finance, accounting, business analysis, and quantitative decision-making.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.22em] text-gray-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl leading-7 text-gray-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function GarvitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 180;
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
      <div className="pointer-events-none fixed inset-0">
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
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
              Business Analytics · Operations · Supply Chain · BI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            >
              Turning data into
              <span className="block text-gray-300">
                better operational decisions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
            >
              I’m Garvit Mittal, a Business Analytics & AI graduate student focused on
              building forecasting, reporting, and decision-support systems for
              operations, supply chain, and business performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78 }}
              className="mt-5 max-w-3xl text-base leading-8 text-gray-300"
            >
              My strongest work combines SQL, Python, BI tools, and machine learning
              to solve real planning and operational problems, not just create
              technical demos.
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
                href={flagshipProject.liveApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
              >
                <Globe size={16} /> Launch Live App
              </a>

              <a
                href="/RESUME.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
              >
                <Download size={16} /> Download Resume
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
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
              >
                <Mail size={14} /> garvitm534@gmail.com
              </a>
              <a
                href="https://github.com/garvit-mittal04"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
              >
                <ExternalLink size={14} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
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
              <p className="text-sm text-gray-500">What I bring</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Analytics depth, business context, and a strong focus on operations
                and decision-making
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-gray-500">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What I bring
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-gray-300">
            <p>
              My background in finance, business analysis, and operations shapes how I
              approach data problems. I focus on building analytics that improve
              planning, cost visibility, forecasting quality, and business execution.
            </p>

            <p>
              Across my work, I have improved forecast accuracy by 15–20%, analyzed
              20,000+ operational records to uncover cost and supplier insights, and
              automated reporting workflows that reduced monthly close time by 25%.
            </p>

            <p>
              I am especially interested in business analytics, operations, supply
              chain, and BI roles where analytical work directly influences planning,
              performance, and decision-making. My long-term goal is to build systems
              that move teams from reactive reporting to structured, forward-looking
              action.
            </p>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          subtitle="A mix of analytics, quantitative thinking, business context, and applied problem-solving."
        />

        <div className="grid gap-6">
          {educationData.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="mt-1 rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="mt-1 text-gray-400">{item.school}</p>
                    <p className="mt-3 max-w-3xl leading-7 text-gray-300">
                      {item.details}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 md:pl-6">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <SectionHeader
          eyebrow="Experience"
          title="Work that created business value"
          subtitle="Experience across retail analytics, operations, finance, reporting, and business-facing analytical support."
        />

        <div className="space-y-6">
          {experienceData.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="mt-1 rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
                    <BriefcaseBusiness size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-gray-400">{item.company}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500">{item.period}</p>
              </div>

              <div className="mt-5 space-y-3 pl-0 md:pl-[68px]">
                {item.points.map((point, index) => (
                  <div key={index} className="flex gap-3 text-gray-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" />
                    <p className="leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <SectionHeader
          eyebrow="Projects"
          title="Featured work"
          subtitle="My strongest work is built around business problems, measurable outcomes, and usable decision systems."
        />

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Flagship Project
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Operations Analytics
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Live App
            </span>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
              <Boxes size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{flagshipProject.title}</h3>
              <p className="mt-2 text-sm text-gray-400">
                {flagshipProject.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">
            {flagshipProject.description}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {flagshipProject.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  Problem
                </p>
                <p className="mt-3 leading-7 text-gray-300">
                  Warehouse teams often make staffing, flow, and disruption decisions
                  reactively, with limited forecasting visibility and weak operational
                  planning support.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  Approach
                </p>
                <p className="mt-3 leading-7 text-gray-300">
                  Combined SQL, forecasting, classification, throughput prediction,
                  and explainability into a decision-oriented analytics workflow.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  Outcome
                </p>
                <p className="mt-3 leading-7 text-gray-300">
                  Produced a usable warehouse planning system with measurable model
                  performance, cost insights, and a live app interface for scenario
                  evaluation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Project visual placeholder
            </p>
            <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-center text-sm leading-7 text-gray-500">
              Add a screenshot of your Streamlit app, dashboard, or architecture
              diagram here to make this project instantly more credible.
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {flagshipProject.bullets.map((bullet, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <p className="leading-7 text-gray-300">{bullet}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10"
            >
              <ExternalLink size={16} />
              View Code
            </a>

            <a
              href={flagshipProject.liveApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]"
            >
              <Globe size={16} />
              Launch Live App
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="inline-flex rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
                {project.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{project.subtitle}</p>
              <p className="mt-4 leading-7 text-gray-300">{project.description}</p>

              <div className="mt-5 space-y-3">
                {project.bullets.map((bullet, index) => (
                  <div key={index} className="flex gap-3 text-gray-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" />
                    <p className="leading-7">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <SectionHeader
          eyebrow="Skills"
          title="Tools, methods, and business strengths"
          subtitle="Technical capability is strongest when paired with business understanding and clear communication."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills], index) => {
            const icons = [
              <BrainCircuit size={22} key="a" />,
              <Database size={22} key="b" />,
              <FileBarChart size={22} key="c" />,
              <BarChart3 size={22} key="d" />,
            ];

            return (
              <div
                key={category}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-gray-300">
              <Award size={22} />
            </div>
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-gray-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 md:px-8"
      >
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-gray-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Let&apos;s connect
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-300">
            I’m actively interested in business analytics, operations, supply chain,
            BI, and data-focused roles where analytical work can directly improve
            planning, performance, and business decisions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:garvitm534@gmail.com"
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <Mail size={18} />
                <span className="font-medium">Email</span>
              </div>
              <p className="mt-3 text-gray-300">garvitm534@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <ExternalLink size={18} />
                <span className="font-medium">LinkedIn</span>
              </div>
              <p className="mt-3 text-gray-300">Connect professionally</p>
            </a>

            <a
              href="https://github.com/garvit-mittal04"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <ExternalLink size={18} />
                <span className="font-medium">GitHub</span>
              </div>
              <p className="mt-3 text-gray-300">Explore code and project work</p>
            </a>

            <a
              href={flagshipProject.liveApp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <Globe size={18} />
                <span className="font-medium">Live App</span>
              </div>
              <p className="mt-3 text-gray-300">
                Open the warehouse decision system
              </p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <MapPin size={14} />
              Dallas, Texas
            </div>

            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
            >
              <ExternalLink size={14} />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}