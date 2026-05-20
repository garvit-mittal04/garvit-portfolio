"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
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
  TrendingUp,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const TAB_ORDER = ["about", "education", "experience", "projects", "skills", "contact"];

const SKILL_ICONS = [
  <BrainCircuit size={22} key="brain" />,
  <Database size={22} key="database" />,
  <FileBarChart size={22} key="filechart" />,
  <BarChart3 size={22} key="barchart" />,
];

const experienceData = [
  {
    role: "Business Analyst",
    company: "JityAI",
    period: "Jan 2025 – Aug 2025",
    points: [
      "Performed SKU-level pricing, demand, and assortment analysis for retail use cases, building KPI views and forecasting workflows that supported inventory allocation and product-mix decisions.",
      "Developed regression and time-series models on sales velocity, margin, and assortment data, improving forecast accuracy by 15–20% through feature engineering and iterative refinement.",
      "Translated analytical outputs into structured business reporting for stakeholders, helping standardize decision workflows across pricing, inventory, and roadmap prioritization.",
    ],
  },
  {
    role: "Operations & Business Analyst",
    company: "Harsiddhi Foods Pvt. Ltd.",
    period: "Apr 2025 – Jul 2025",
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
    period: "May 2024 – Jun 2024",
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
    "Flagship Project · Python · scikit-learn · Random Forest · SQL · Streamlit · openpyxl · reportlab",
  description:
    "An end-to-end warehouse analytics and decision-support system built on 1,200 rows of realistic operational data. Combines Random Forest throughput prediction, risk classification, confidence interval estimation, and an interactive 5-tab Streamlit app — turning model outputs into staffing decisions, scenario comparisons, and one-click executive reports.",
  highlights: [
    { label: "Throughput model R²", value: "0.934" },
    { label: "Risk classifier accuracy", value: "91.7%" },
    { label: "Disruption cost impact", value: "$2,286/hour" },
    { label: "Prediction confidence", value: "P10/P90 across 150 trees" },
  ],
  bullets: [
    "Built an end-to-end warehouse decision system on 1,200 rows of operational data — Morning, Afternoon, and Night shifts with realistic distributions across staff hours, order volume, disruption hours, and risk levels.",
    "Trained Random Forest models (150 trees) for throughput prediction (R² = 0.934, MAE ±192 units) and risk classification (91.7% accuracy), with P10/P90 confidence intervals derived from individual tree predictions.",
    "Designed a 5-tab Streamlit app: Overview (live KPIs and charts), A/B Comparison (side-by-side scenario cards and radar chart), What-If Optimizer (81-combination grid search with heatmap), Model Intelligence (feature importance and prediction distribution), and Export Reports.",
    "Built a What-If Optimizer that searches all combinations of staff hours (4–12) and disruption hours (0–8) to find the cheapest configuration that meets a user-defined throughput target and budget.",
    "Generated a multi-sheet openpyxl Excel dashboard with a live Scenario Prediction sheet (KPI table, feature impact table, embedded bar chart) and a one-page reportlab PDF executive summary with automated recommendations.",
    "Optimized performance using Streamlit caching — the 150-tree prediction loop, the 81-cell optimizer grid, and the Excel file read are all cached so tab switching and slider changes respond near-instantly after first load.",
  ],
  github: "https://github.com/garvit-mittal04/warehouse-decision-system",
  liveApp: "https://warehouse-garvit.streamlit.app",
};

const fpaProject = {
  title: "FP&A AI Analyst Agent",
  subtitle: "Finance AI · Python · SQL · Scikit-learn · Groq LLM · Streamlit",
  description:
    "An end-to-end AI agent that automates the monthly FP&A workflow — ingesting actuals vs. budget data, running multi-period variance analysis in SQL, detecting anomalies with machine learning, and generating board-ready management commentary using an LLM. Designed to replicate real FP&A workflows used in finance teams — not just a dashboard.",
  highlights: [
    { label: "Financial records processed", value: "10,000+ scalable" },
    { label: "Anomalies auto-detected", value: "Adaptive ML detection" },
    { label: "Departments analyzed", value: "Multi-department support" },
    { label: "Time to full analysis", value: "< 2 minutes" },
  ],
  bullets: [
    "Built a SQL variance engine using CTEs and window functions to compute dollar and percentage variance per line item, period, and department — and identify the largest gaps automatically.",
    "Implemented FULL OUTER JOIN-style logic using UNION of keys so budget-only and actual-only records are preserved instead of being dropped in analysis.",
    "Integrated Scikit-learn Isolation Forest with stability-aware gating to flag statistically unusual line items while avoiding false positives on clean datasets.",
    "Engineered a Groq LLM prompt pipeline that takes structured variance summaries as input and outputs board-ready management commentary with decision-focused risk flags.",
    "Built a formatted 3-sheet Excel export (Executive Summary, Variance Detail, AI Commentary) and deployed the full system as a live Streamlit app with sample data preloaded.",
    "Inspired by hands-on experience analyzing 20,000+ financial records at Harsiddhi Foods — this project is the AI-powered version of that manual workflow.",
  ],
  github: "https://github.com/garvit-mittal04/fpa-ai-agent",
  liveApp: "https://fpa-ai-agent-garvit.streamlit.app",
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
    "Decision Systems",
  ],
  "Data & Programming": ["SQL", "Python", "R", "Excel", "Power Query", "VBA", "Workflow Automation (Power Automate)"],
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
    "Process Automation",
    "Event-Driven Workflows",
  ],
};

const certifications = [
  "Data Science & Business Analytics – University of Maryland",
  "Power BI – Udemy",
  "Tableau Desktop Specialist",
  "Economics & Sustainability – Wayland Baptist University",
];

const quickStats = [
  { label: "Forecast Accuracy Lift", value: "15–20%", icon: <Target size={18} /> },
  { label: "Operational Records Analyzed", value: "20,000+", icon: <Database size={18} /> },
  { label: "Monthly Close Time Reduced", value: "25%", icon: <BarChart3 size={18} /> },
  { label: "Warehouse Throughput Model", value: "R² 0.934", icon: <ShieldCheck size={18} /> },
];

const educationData = [
  {
    degree: "Master of Science in Business Analytics & Artificial Intelligence",
    school: "The University of Texas at Dallas",
    period: "August 2025 – Present",
    details:
      "Focused on business analytics, machine learning, operations, decision support, and data-driven problem solving.",
  },
  {
    degree: "Bachelors of Business Administration Hons. - Finance",
    school: "Christ University, Bangalore",
    period: "May 2025",
    details:
      "Built a foundation in finance, accounting, business analysis, and quantitative decision-making.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 72 : -72,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -72 : 72,
    opacity: 0,
    transition: { duration: 0.24, ease: [0.55, 0, 1, 0.45] },
  }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────

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
      <p className="text-sm uppercase tracking-[0.22em] text-teal-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl text-white">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl leading-7 text-gray-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-gray-300">
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-400/80" />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Section views ─────────────────────────────────────────────────────────────

function HeroSection({ onNav }: { onNav: (tab: string) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-300"
          >
            <Sparkles size={15} aria-hidden="true" />
            MS Business Analytics &amp; AI · UT Dallas
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-sm uppercase tracking-[0.22em] text-teal-500"
          >
            Business Analytics · Operations · Supply Chain · BI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            From data to decisions —
            <span className="block text-teal-300">Driving business outcomes
              through analytics.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
          >
            I&apos;m Garvit Mittal, a Business Analytics &amp; AI graduate student
            focused on building forecasting, reporting, and decision-support systems that improve
            business performance across operations, supply chain, and finance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78 }}
            className="mt-5 max-w-3xl text-base leading-8 text-gray-300"
          >
            My strongest work combines SQL, Python, BI tools, and machine learning
            to solve real business problems — not just build technical demos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => onNav("projects")}
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 font-medium text-white transition hover:bg-teal-400 hover:scale-[1.02]"
            >
              View Projects <ArrowRight size={16} aria-hidden="true" />
            </button>

            <a
              href={flagshipProject.liveApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-teal-500/30 px-6 py-3 font-medium text-teal-300 transition hover:bg-teal-500/10"
            >
              <Globe size={16} aria-hidden="true" /> Launch Live App
            </a>

            <a
              href="/RESUME.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-medium text-gray-300 transition hover:bg-white/5"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-teal-500/30 hover:text-teal-300"
            >
              <Mail size={14} aria-hidden="true" /> garvitm534@gmail.com
            </a>
            <a
              href="https://github.com/garvit-mittal04"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-teal-500/30 hover:text-teal-300"
            >
              <ExternalLink size={14} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-teal-500/30 hover:text-teal-300"
            >
              <ExternalLink size={14} aria-hidden="true" /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="rounded-[30px] border border-teal-500/20 bg-teal-950/30 p-6 shadow-2xl shadow-teal-900/20"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-teal-500/15 bg-black/50 p-5">
                <div className="flex items-center gap-2 text-teal-500">
                  <span aria-hidden="true">{item.icon}</span>
                  <p className="text-sm">{item.label}</p>
                </div>
                <p className="mt-3 text-2xl font-semibold text-teal-300">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-teal-500/15 bg-black/50 p-5">
            <p className="text-sm text-teal-500">What I bring</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Analytics depth, business context, and the ability to turn data into decision-ready action.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-teal-500">About</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">My approach</h2>
        </div>

        <div className="space-y-5 leading-8 text-gray-300">
          <p>
            My background in finance, business analysis, and operations shapes how I approach
            data problems. I focus on building analytics that improve planning, cost visibility,
            forecasting quality, and business execution.
          </p>
          <p>
            Across my work, I have improved forecast accuracy by 15–20%, analyzed 20,000+
            operational records to uncover cost and supplier insights, and automated reporting
            workflows that reduced monthly close time by 25%.
          </p>
          <p>
            I am especially interested in business analytics, operations, supply chain, and BI
            roles where analytical work directly influences planning, performance, and
            decision-making. My long-term goal is to build systems that move teams from reactive
            reporting to structured, forward-looking action.
          </p>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        subtitle="A mix of analytics, quantitative thinking, business context, and applied problem-solving."
      />

      <div className="grid gap-6">
        {educationData.map((item) => (
          <div
            key={`${item.school}-${item.degree}`}
            className="rounded-[24px] border border-teal-500/15 bg-teal-950/20 p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div
                  className="mt-1 rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400"
                  aria-hidden="true"
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-teal-400">{item.school}</p>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-300">{item.details}</p>
                </div>
              </div>
              <p className="text-sm text-teal-600 md:pl-6 shrink-0">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Work that created business value"
        subtitle="Experience across retail analytics, operations, finance, reporting, and business-facing analytical support."
      />

      <div className="space-y-6">
        {experienceData.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="rounded-[24px] border border-teal-500/15 bg-teal-950/20 p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div
                  className="mt-1 rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400"
                  aria-hidden="true"
                >
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-teal-400">{item.company}</p>
                </div>
              </div>
              <p className="text-sm text-teal-600 shrink-0">{item.period}</p>
            </div>

            <div className="mt-5 pl-0 md:pl-[68px]">
              <BulletList items={item.points} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Featured work"
        subtitle="My strongest work is built around business problems, measurable outcomes, and usable decision systems."
      />

      {/* ── Warehouse Flagship ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className="rounded-[28px] border border-teal-500/20 bg-teal-950/20 p-8 shadow-xl shadow-teal-900/10 transition-transform"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-teal-500">
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">Flagship Project</span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">Operations Analytics</span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">Live App</span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400" aria-hidden="true">
            <Boxes size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{flagshipProject.title}</h3>
            <p className="mt-2 text-sm text-teal-500">{flagshipProject.subtitle}</p>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">
          {flagshipProject.description}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flagshipProject.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-teal-500/15 bg-black/40 p-4">
              <p className="text-sm text-teal-600">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-teal-300">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-dashed border-teal-500/20 bg-black/30 p-6">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Problem</p>
              <p className="mt-3 leading-7 text-gray-300">
                Warehouse teams make staffing and scheduling decisions without forward-looking
                signals — disruptions are noticed late, costs escalate reactively, and
                throughput variation across shifts goes unexplained.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Approach</p>
              <p className="mt-3 leading-7 text-gray-300">
                Trained Random Forest models on 1,200 rows of realistic operational data for
                throughput prediction and risk classification, with P10/P90 confidence intervals
                from 150 individual trees — then built a 5-tab decision app with A/B comparison,
                a grid-search optimizer, and one-click Excel and PDF exports.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Outcome</p>
              <p className="mt-3 leading-7 text-gray-300">
                A live decision system with R² = 0.934 throughput prediction, 91.7% risk
                accuracy, a What-If Optimizer that searches 81 staffing configurations
                instantly, and downloadable executive reports — all running on Streamlit Cloud
                with performance caching.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-teal-500/20">
          <img
            src="/warehouse-v2.png"
            alt="Warehouse Decision Support System v2 – 5-tab Streamlit app showing predicted throughput, risk level, disruption cost, and ML model insights"
            className="w-full"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {flagshipProject.bullets.map((bullet, index) => (
            <div key={index} className="rounded-2xl border border-teal-500/15 bg-black/40 p-4">
              <p className="leading-7 text-gray-300">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={flagshipProject.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-teal-500/30 px-5 py-3 font-medium text-teal-300 transition hover:bg-teal-500/10"
          >
            <ExternalLink size={16} aria-hidden="true" /> View Code
          </a>
          <a
            href={flagshipProject.liveApp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-5 py-3 font-medium text-white transition hover:bg-teal-400 hover:scale-[1.02]"
          >
            <Globe size={16} aria-hidden="true" /> Launch Live App
          </a>
        </div>
      </motion.div>

      {/* ── FP&A AI Agent ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -4 }}
        className="mt-8 rounded-[28px] border border-teal-500/20 bg-teal-950/20 p-8 shadow-xl shadow-teal-900/10 transition-transform"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-teal-500">
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">Finance AI</span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">FP&amp;A Automation</span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1">Live App</span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400" aria-hidden="true">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{fpaProject.title}</h3>
            <p className="mt-2 text-sm text-teal-500">{fpaProject.subtitle}</p>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">
          {fpaProject.description}
        </p>

        <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-400">
          Converts raw financial data into decision-ready variance insights in minutes.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fpaProject.highlights.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-teal-500/15 bg-black/40 p-4"
            >
              <p className="text-sm text-teal-600">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-teal-300">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-dashed border-teal-500/20 bg-black/30 p-6">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Problem</p>
              <p className="mt-3 leading-7 text-gray-300">
                Finance teams spend 2–5 days every month-end manually comparing actuals to budget
                in Excel, writing variance commentary, and sending reports to leadership — a
                repetitive and error-prone process.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Approach</p>
              <p className="mt-3 leading-7 text-gray-300">
                Built a full pipeline using SQL CTEs for variance analysis, adaptive ML-based
                anomaly detection, and an LLM prompt chain to generate structured
                management commentary automatically.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Outcome</p>
              <p className="mt-3 leading-7 text-gray-300">
                Delivered an end-to-end FP&amp;A automation system reducing month-end analysis time
                from 2–5 days to under 2 minutes, while improving anomaly detection accuracy and
                standardizing executive reporting.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {fpaProject.bullets.map((bullet, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-teal-500/15 bg-black/40 p-4"
            >
              <p className="leading-7 text-gray-300">{bullet}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-teal-500/15 bg-black/40 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-teal-500">Key Differentiators</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-4 text-gray-300">
              No data loss via FULL OUTER JOIN-style logic
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-4 text-gray-300">
              Smart anomaly detection that avoids false positives
            </div>
            <div className="rounded-2xl border border-teal-500/15 bg-teal-950/30 p-4 text-gray-300">
              Board-ready AI commentary with finance-style structure
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={fpaProject.liveApp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-5 py-3 font-medium text-white transition hover:bg-teal-400 hover:scale-[1.02]"
          >
            <Globe size={16} aria-hidden="true" /> Launch Live App
          </a>
          <a
            href={fpaProject.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-teal-500/30 px-5 py-3 font-medium text-teal-300 transition hover:bg-teal-500/10"
          >
            <ExternalLink size={16} aria-hidden="true" /> View Code
          </a>
        </div>
      </motion.div>

      {/* ── Secondary projects ── */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projectData.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className="rounded-[24px] border border-teal-500/15 bg-teal-950/20 p-6"
          >
            <div className="inline-flex rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400" aria-hidden="true">
              {project.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-teal-500">{project.subtitle}</p>
            <p className="mt-4 leading-7 text-gray-300">{project.description}</p>
            <div className="mt-5">
              <BulletList items={project.bullets} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Tools, methods, and business strengths"
        subtitle="Technical capability is strongest when paired with business understanding and clear communication."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div
            key={category}
            className="rounded-[24px] border border-teal-500/15 bg-teal-950/20 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400" aria-hidden="true">
                {SKILL_ICONS[index]}
              </div>
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-3" role="list" aria-label={`${category} skills`}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  role="listitem"
                  className="rounded-full border border-teal-500/20 bg-teal-950/40 px-4 py-2 text-sm text-teal-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[24px] border border-teal-500/15 bg-teal-950/20 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-teal-500/20 bg-black/40 p-3 text-teal-400" aria-hidden="true">
            <Award size={22} />
          </div>
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert} className="rounded-2xl border border-teal-500/15 bg-black/40 p-4 text-gray-300">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="rounded-[30px] border border-teal-500/20 bg-teal-950/20 p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.22em] text-teal-500">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl text-white">Let&apos;s connect</h2>

        <p className="mt-5 max-w-3xl leading-8 text-gray-300">
          I&apos;m actively interested in business analytics, operations, supply chain, BI, and
          data-focused roles where analytical work can directly improve planning, performance,
          and business decisions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:garvitm534@gmail.com"
            className="rounded-2xl border border-teal-500/15 bg-black/40 p-5 transition hover:border-teal-500/40 hover:bg-teal-500/10"
          >
            <div className="flex items-center gap-3 text-teal-300">
              <Mail size={18} aria-hidden="true" />
              <span className="font-medium">Email</span>
            </div>
            <p className="mt-3 text-gray-300">garvitm534@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-teal-500/15 bg-black/40 p-5 transition hover:border-teal-500/40 hover:bg-teal-500/10"
          >
            <div className="flex items-center gap-3 text-teal-300">
              <ExternalLink size={18} aria-hidden="true" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <p className="mt-3 text-gray-300">Connect professionally</p>
          </a>

          <a
            href="https://github.com/garvit-mittal04"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-teal-500/15 bg-black/40 p-5 transition hover:border-teal-500/40 hover:bg-teal-500/10"
          >
            <div className="flex items-center gap-3 text-teal-300">
              <ExternalLink size={18} aria-hidden="true" />
              <span className="font-medium">GitHub</span>
            </div>
            <p className="mt-3 text-gray-300">Explore code and project work</p>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 px-4 py-2 text-teal-500">
            <MapPin size={14} aria-hidden="true" />
            Dallas, Texas
          </div>

          <a
            href={flagshipProject.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 px-4 py-2 text-teal-500 transition hover:bg-teal-500/10"
          >
            <ExternalLink size={14} aria-hidden="true" /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function GarvitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const headerRef = useRef<HTMLElement>(null);

  const currentIndex = activeTab ? TAB_ORDER.indexOf(activeTab) : -1;

  const goTo = (tab: string | null, dir?: number) => {
    const newIndex = tab ? TAB_ORDER.indexOf(tab) : -1;
    setDirection(dir !== undefined ? dir : newIndex > currentIndex ? 1 : -1);
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    if (activeTab === null) goTo(TAB_ORDER[0], 1);
    else if (currentIndex < TAB_ORDER.length - 1) goTo(TAB_ORDER[currentIndex + 1], 1);
  };

  const goPrev = () => {
    if (currentIndex === 0) goTo(null, -1);
    else if (currentIndex > 0) goTo(TAB_ORDER[currentIndex - 1], -1);
  };

  const hasPrev = activeTab !== null;
  const hasNext = activeTab === null || currentIndex < TAB_ORDER.length - 1;

  const renderSection = () => {
    switch (activeTab) {
      case "about":      return <AboutSection />;
      case "education":  return <EducationSection />;
      case "experience": return <ExperienceSection />;
      case "projects":   return <ProjectsSection />;
      case "skills":     return <SkillsSection />;
      case "contact":    return <ContactSection />;
      default:           return <HeroSection onNav={(tab) => goTo(tab, 1)} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#060d0c] text-white selection:bg-teal-400 selection:text-black">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-teal-400/6 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-[280px] w-[280px] rounded-full bg-cyan-500/6 blur-3xl" />
      </div>

      {/* ── Header ── */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-teal-500/15 bg-[#060d0c]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <button
            onClick={() => goTo(null, -1)}
            className="text-lg font-semibold tracking-wide text-white transition hover:text-teal-300"
          >
            Garvit Mittal
          </button>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
            {navLinks.map((item) => {
              const isActive = activeTab === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-teal-500 text-white"
                      : "text-gray-400 hover:bg-teal-500/10 hover:text-teal-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-teal-500/20 p-2 text-gray-300 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-teal-500/15 px-6 pb-4 md:hidden">
            <nav
              className="mt-4 flex flex-col gap-2 rounded-2xl border border-teal-500/15 bg-teal-950/40 p-3"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => goTo(null, -1)}
                className="rounded-xl px-3 py-2 text-left text-gray-300 transition hover:bg-teal-500/10 hover:text-teal-300"
              >
                Home
              </button>
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className={`rounded-xl px-3 py-2 text-left transition hover:bg-teal-500/10 hover:text-teal-300 ${
                    activeTab === item.href ? "bg-teal-500/15 text-teal-300" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ── Animated section content ── */}
      <div className="relative overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab ?? "home"}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next navigation ── */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-2 md:px-8">
        <div className="flex items-center justify-between">
          {/* Previous button */}
          <button
            onClick={goPrev}
            disabled={!hasPrev}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasPrev
                ? "border-teal-500/30 text-teal-300 hover:bg-teal-500/10"
                : "cursor-not-allowed border-white/5 text-gray-700"
            }`}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {currentIndex === 0
              ? "Home"
              : currentIndex > 0
              ? navLinks[currentIndex - 1].label
              : ""}
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" aria-label="Page indicators">
            {[null, ...TAB_ORDER].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab ?? "home"}
                  onClick={() => goTo(tab)}
                  aria-label={tab ? navLinks.find((n) => n.href === tab)?.label : "Home"}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "h-2.5 w-6 bg-teal-400"
                      : "h-2 w-2 bg-teal-400/25 hover:bg-teal-400/50"
                  }`}
                />
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={goNext}
            disabled={!hasNext}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasNext
                ? "border-teal-500/30 text-teal-300 hover:bg-teal-500/10"
                : "cursor-not-allowed border-white/5 text-gray-700"
            }`}
          >
            {activeTab === null
              ? navLinks[0].label
              : currentIndex < TAB_ORDER.length - 1
              ? navLinks[currentIndex + 1].label
              : ""}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </main>
  );
}
