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
    "Forecasting", "Regression", "Classification", "Hypothesis Testing",
    "Root-Cause Analysis", "Decision Support", "Decision Systems",
  ],
  "Data & Programming": [
    "SQL", "Python", "R", "Excel", "Power Query", "VBA", "Workflow Automation (Power Automate)",
  ],
  "BI & Visualization": [
    "Power BI", "DAX", "Tableau", "KPI Dashboards", "Data Storytelling",
  ],
  "Business & Operations": [
    "Supply Chain Analytics", "Operational Reporting", "Financial Analysis",
    "Margin Analysis", "Stakeholder Communication", "Process Improvement",
    "Process Automation", "Event-Driven Workflows",
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
    details: "Focused on business analytics, machine learning, operations, decision support, and data-driven problem solving.",
  },
  {
    degree: "Bachelors of Business Administration Hons. - Finance",
    school: "Christ University, Bangalore",
    period: "May 2025",
    details: "Built a foundation in finance, accounting, business analysis, and quantitative decision-making.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 72 : -72, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -72 : 72, opacity: 0 }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle }: {
  eyebrow: string; title: string; subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm uppercase tracking-[0.22em] text-amber-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-3xl leading-7 text-gray-400">{subtitle}</p>}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-gray-300">
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500/70" />
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
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/8 px-4 py-2 text-sm text-amber-400"
          >
            <Sparkles size={15} aria-hidden="true" />
            MS Business Analytics &amp; AI · UT Dallas
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-sm uppercase tracking-[0.22em] text-amber-600"
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
            <span className="block text-amber-400">Driving business outcomes
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

          {/* Two primary CTAs only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => onNav("projects")}
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-medium text-black transition hover:bg-amber-400"
            >
              View Projects <ArrowRight size={16} aria-hidden="true" />
            </button>
            <a
              href="/RESUME.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-500/30 px-6 py-3 font-medium text-amber-400 transition hover:bg-amber-500/10"
            >
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </motion.div>

          {/* Subtle text links — not pill buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.92 }}
            className="mt-6 flex items-center gap-5 text-sm text-gray-500"
          >
            <a
              href="https://github.com/garvit-mittal04"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-amber-400"
            >
              <ExternalLink size={13} aria-hidden="true" /> GitHub
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-amber-400"
            >
              <ExternalLink size={13} aria-hidden="true" /> LinkedIn
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="mailto:garvitm534@gmail.com"
              className="inline-flex items-center gap-1.5 transition hover:text-amber-400"
            >
              <Mail size={13} aria-hidden="true" /> garvitm534@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="rounded-[30px] border border-amber-500/15 bg-white/[0.02] p-6 shadow-2xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/8 bg-black/50 p-5">
                <div className="flex items-center gap-2 text-amber-600">
                  <span aria-hidden="true">{item.icon}</span>
                  <p className="text-sm">{item.label}</p>
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/8 bg-black/50 p-5">
            <p className="text-sm text-amber-600">What I bring</p>
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
          <p className="text-sm uppercase tracking-[0.22em] text-amber-500">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">My approach</h2>
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
            className="rounded-[24px] border border-white/8 bg-white/[0.03] p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="mt-1 rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-amber-500">{item.school}</p>
                  <p className="mt-3 max-w-3xl leading-7 text-gray-300">{item.details}</p>
                </div>
              </div>
              <p className="shrink-0 text-sm text-gray-500 md:pl-6">{item.period}</p>
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
            className="rounded-[24px] border border-white/8 bg-white/[0.03] p-6"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="mt-1 rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-amber-500">{item.company}</p>
                </div>
              </div>
              <p className="shrink-0 text-sm text-gray-500">{item.period}</p>
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
        whileHover={{ y: -3 }}
        className="rounded-[28px] border border-amber-500/15 bg-white/[0.03] p-8 shadow-xl transition-transform"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-600">
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">Flagship Project</span>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">Operations Analytics</span>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">Live App</span>
        </div>
        <div className="mt-5 flex items-start gap-4">
          <div className="rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
            <Boxes size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{flagshipProject.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{flagshipProject.subtitle}</p>
          </div>
        </div>
        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{flagshipProject.description}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {flagshipProject.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/8 bg-black/40 p-4">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-amber-400">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-dashed border-amber-500/15 bg-black/20 p-6">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { label: "Problem", text: "Warehouse teams make staffing and scheduling decisions without forward-looking signals — disruptions are noticed late, costs escalate reactively, and throughput variation across shifts goes unexplained." },
              { label: "Approach", text: "Trained Random Forest models on 1,200 rows of realistic operational data for throughput prediction and risk classification, with P10/P90 confidence intervals from 150 individual trees — then built a 5-tab decision app with A/B comparison, a grid-search optimizer, and one-click Excel and PDF exports." },
              { label: "Outcome", text: "A live decision system with R² = 0.934 throughput prediction, 91.7% risk accuracy, a What-If Optimizer that searches 81 staffing configurations instantly, and downloadable executive reports — all running on Streamlit Cloud with performance caching." },
            ].map((block) => (
              <div key={block.label} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-amber-500">{block.label}</p>
                <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-white/8">
          <img
            src="/warehouse-v2.png"
            alt="Warehouse Decision Support System v2 – 5-tab Streamlit app"
            className="w-full"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {flagshipProject.bullets.map((bullet, index) => (
            <div key={index} className="rounded-2xl border border-white/8 bg-black/40 p-4">
              <p className="leading-7 text-gray-300">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={flagshipProject.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-amber-500/25 px-5 py-3 font-medium text-amber-400 transition hover:bg-amber-500/10">
            <ExternalLink size={16} aria-hidden="true" /> View Code
          </a>
          <a href={flagshipProject.liveApp} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-medium text-black transition hover:bg-amber-400">
            <Globe size={16} aria-hidden="true" /> Launch Live App
          </a>
        </div>
      </motion.div>

      {/* ── FP&A AI Agent ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        whileHover={{ y: -3 }}
        className="mt-8 rounded-[28px] border border-amber-500/15 bg-white/[0.03] p-8 shadow-xl transition-transform"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-600">
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">Finance AI</span>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">FP&amp;A Automation</span>
          <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1">Live App</span>
        </div>
        <div className="mt-5 flex items-start gap-4">
          <div className="rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{fpaProject.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{fpaProject.subtitle}</p>
          </div>
        </div>
        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{fpaProject.description}</p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-500">
          Converts raw financial data into decision-ready variance insights in minutes.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fpaProject.highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/8 bg-black/40 p-4">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-amber-400">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-dashed border-amber-500/15 bg-black/20 p-6">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { label: "Problem", text: "Finance teams spend 2–5 days every month-end manually comparing actuals to budget in Excel, writing variance commentary, and sending reports to leadership — a repetitive and error-prone process." },
              { label: "Approach", text: "Built a full pipeline using SQL CTEs for variance analysis, adaptive ML-based anomaly detection, and an LLM prompt chain to generate structured management commentary automatically." },
              { label: "Outcome", text: "Delivered an end-to-end FP&A automation system reducing month-end analysis time from 2–5 days to under 2 minutes, while improving anomaly detection accuracy and standardizing executive reporting." },
            ].map((block) => (
              <div key={block.label} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-amber-500">{block.label}</p>
                <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {fpaProject.bullets.map((bullet, index) => (
            <div key={index} className="rounded-2xl border border-white/8 bg-black/40 p-4">
              <p className="leading-7 text-gray-300">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-white/8 bg-black/40 p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-500">Key Differentiators</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              "No data loss via FULL OUTER JOIN-style logic",
              "Smart anomaly detection that avoids false positives",
              "Board-ready AI commentary with finance-style structure",
            ].map((text) => (
              <div key={text} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-gray-300">{text}</div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href={fpaProject.liveApp} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-medium text-black transition hover:bg-amber-400">
            <Globe size={16} aria-hidden="true" /> Launch Live App
          </a>
          <a href={fpaProject.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-amber-500/25 px-5 py-3 font-medium text-amber-400 transition hover:bg-amber-500/10">
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
            whileHover={{ y: -3 }}
            className="rounded-[24px] border border-white/8 bg-white/[0.03] p-6"
          >
            <div className="inline-flex rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
              {project.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{project.subtitle}</p>
            <p className="mt-4 leading-7 text-gray-300">{project.description}</p>
            <div className="mt-5"><BulletList items={project.bullets} /></div>
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
          <div key={category} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
                {SKILL_ICONS[index]}
              </div>
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3" role="list" aria-label={`${category} skills`}>
              {skills.map((skill) => (
                <span key={skill} role="listitem"
                  className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[24px] border border-white/8 bg-white/[0.03] p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-amber-500/20 bg-black/40 p-3 text-amber-500" aria-hidden="true">
            <Award size={22} />
          </div>
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert} className="rounded-2xl border border-white/8 bg-black/40 p-4 text-gray-300">{cert}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="rounded-[30px] border border-amber-500/15 bg-white/[0.03] p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-500">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Let&apos;s connect</h2>
        <p className="mt-5 max-w-3xl leading-8 text-gray-300">
          I&apos;m actively interested in business analytics, operations, supply chain, BI, and
          data-focused roles where analytical work can directly improve planning, performance,
          and business decisions.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { href: "mailto:garvitm534@gmail.com", icon: <Mail size={18} />, label: "Email", sub: "garvitm534@gmail.com" },
            { href: "https://www.linkedin.com/in/garvit-mittal-81171632a/", icon: <ExternalLink size={18} />, label: "LinkedIn", sub: "Connect professionally", target: "_blank" },
            { href: "https://github.com/garvit-mittal04", icon: <ExternalLink size={18} />, label: "GitHub", sub: "Explore code and project work", target: "_blank" },
          ].map((item) => (
            <a key={item.label} href={item.href} target={item.target} rel={item.target ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/8 bg-black/40 p-5 transition hover:border-amber-500/25 hover:bg-amber-500/5">
              <div className="flex items-center gap-3 text-amber-400">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
              <p className="mt-3 text-gray-400">{item.sub}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="inline-flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" /> Dallas, Texas
          </div>
          <span>·</span>
          <a href={flagshipProject.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-amber-400">
            <ExternalLink size={13} aria-hidden="true" /> View GitHub
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
    <main className="min-h-screen bg-[#080705] text-white selection:bg-amber-400 selection:text-black">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-amber-400/4 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-[280px] w-[280px] rounded-full bg-amber-600/3 blur-3xl" />
      </div>

      {/* ── Header ── */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-white/8 bg-[#080705]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <button
            onClick={() => goTo(null, -1)}
            className="text-lg font-semibold tracking-wide text-white transition hover:text-amber-400"
          >
            Garvit Mittal
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((item) => {
              const isActive = activeTab === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-amber-500 text-black font-medium"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 text-gray-400 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/8 px-6 pb-4 md:hidden">
            <nav className="mt-4 flex flex-col gap-1 rounded-2xl border border-white/8 bg-white/[0.03] p-3" aria-label="Mobile navigation">
              <button onClick={() => goTo(null, -1)}
                className="rounded-xl px-3 py-2 text-left text-gray-400 transition hover:bg-white/5 hover:text-white">
                Home
              </button>
              {navLinks.map((item) => (
                <button key={item.href} onClick={() => goTo(item.href)}
                  className={`rounded-xl px-3 py-2 text-left transition hover:bg-white/5 hover:text-white ${
                    activeTab === item.href ? "bg-amber-500/10 text-amber-400" : "text-gray-400"
                  }`}>
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
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next navigation ── */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-2 md:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={!hasPrev}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasPrev
                ? "border-white/10 text-gray-400 hover:border-amber-500/25 hover:text-amber-400"
                : "cursor-not-allowed border-white/5 text-gray-700"
            }`}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {currentIndex === 0 ? "Home" : currentIndex > 0 ? navLinks[currentIndex - 1].label : ""}
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
                    isActive ? "h-2.5 w-6 bg-amber-500" : "h-2 w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>

          <button
            onClick={goNext}
            disabled={!hasNext}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasNext
                ? "border-white/10 text-gray-400 hover:border-amber-500/25 hover:text-amber-400"
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
