"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
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
  Zap,
  FlaskConical,
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
  <FlaskConical size={22} key="flask" />,
  <BrainCircuit size={22} key="brain" />,
  <Database size={22} key="database" />,
  <FileBarChart size={22} key="filechart" />,
  <BarChart3 size={22} key="barchart" />,
];

const experienceData = [
  {
    role: "AI Evaluation & Harness Engineer",
    company: "StatusNeo",
    period: "Sep 2026 – Present",
    badge: "Current",
    points: [
      "Expanded automated follow-ups in KARMA, StatusNeo's in-house applicant tracking system, from 1 reminder type (interviewer feedback) to 6 across 3 stakeholder groups (customers, candidates, interview panels), shipping 5 workflow automations.",
      "Shipped customer self-scheduling where each slot reply books the interview or escalates to the recruiter, plus customer feedback capture that stores feedback on the candidate record and notifies the recruiter.",
      "Built candidate non-reply nudges for 3 drop-off points (slots not chosen, assessment link unopened, AI interview not taken) with configurable cadence and an automatic stop after N attempts, plus once-per-interview panel reminders.",
      "Build evaluation harnesses for KARMA's AI flows and develop LLM-as-judge scoring and observability for their outputs.",
      "Support release QA and documentation for AI features, and analyze recruitment process data.",
    ],
  },
  {
    role: "Operations Analyst Intern",
    company: "The Chicago School",
    period: "Jun 2026 – Aug 2026",
    badge: null,
    points: [
      "Architected and deployed 7 production Power Automate flows across SharePoint Lists (28 and 23 tracked fields), automating onboarding for 1,000+ onboarding cases/month and eliminating single-point-of-failure dependency on 1 HR staff member.",
      "Engineered multi-branch conditional logic across employee type, rehire status, location, and I-9 compliance stage to dynamically route 12 email templates, cutting onboarding processing time by ~90%.",
      "Automated I-9 compliance tracking, document-chase escalation, and completion notifications on daily scheduled triggers with 3-day recurring cycles, replacing manual monitoring by HR.",
      "Delivered automated Microsoft Teams provisioning across 5 campus-specific channels and authored full system documentation and maintenance ownership handoff for the live production system.",
    ],
  },
  {
    role: "Business Analyst",
    company: "JityAI",
    period: "Jan 2025 – Oct 2025",
    badge: null,
    points: [
      "Analyzed 10,000+ SKU-level pricing, sales, and inventory records for retail clients, identifying demand patterns and pricing gaps that informed product setup, inventory allocation, and replenishment decisions.",
      "Built and validated regression and time-series forecasting models in Python (Pandas, Scikit-learn), improving demand forecast accuracy by 15–20% and reducing planning errors across client product lines.",
      "Designed Power BI and Tableau dashboards integrating SKU-level pricing, sales velocity, and inventory data, replacing ad hoc spreadsheet reviews with structured stakeholder-ready reporting used in weekly business reviews.",
    ],
  },
  {
    role: "Operations & Business Analyst",
    company: "Harsiddhi Foods Pvt. Ltd.",
    period: "Jan 2024 – Nov 2024",
    badge: null,
    points: [
      "Queried and analyzed 20,000+ procurement, production, and export records in SQL and Excel, surfacing supplier pricing gaps and cost variances that directly informed sourcing decisions and operational reviews.",
      "Built a regression-based demand forecasting model trained on 12 months of sales and procurement data, improving inventory planning accuracy by 15% and reducing overstock and stockout risk.",
      "Developed Power BI dashboards tracking cost drivers, contribution margins, and supply chain KPIs - replacing manual Excel reviews and giving leadership real-time visibility into product-level and operational performance.",
      "Automated vendor payment and AR reconciliation workflows using Excel Power Query and VBA, cutting monthly reporting time by 25% and reducing manual errors across finance and operations teams.",
    ],
  },
  {
    role: "Accounts & Audit Trainee",
    company: "Dipankar Gupta & Co.",
    period: "May 2024 – Jun 2024",
    badge: null,
    points: [
      "Reviewed and reconciled financial records across multiple client portfolios, strengthening reporting accuracy through standardized validation workflows and audit support.",
      "Performed compliance checks and data-quality audits on 30+ client document sets, identifying discrepancies and escalating issues for timely review and resolution.",
      "Built reusable Excel templates with dynamic formulas and PivotTables, reducing recurring report preparation time by 20% and improving standardization across engagements.",
    ],
  },
];

const flagshipProject = {
  title: "ML-Powered Warehouse Decision System",
  subtitle: "Operations ML · Python · scikit-learn · Random Forest · SQL · R · SHAP · Streamlit",
  description:
    "A warehouse decision-support app built on 1,200 simulated shift-level records: Random Forest models for throughput (R²=0.934, 0.931 cross-validated) and operational risk (91.7% accuracy), a What-If optimizer over 81 staffing and disruption scenarios, SQL over a 5-table MySQL schema, 6 statistical tests in R, and SHAP explainability, served in a 5-tab Streamlit app.",
  highlights: [
    { label: "Throughput model R²", value: "0.934" },
    { label: "Risk classifier accuracy", value: "91.7%" },
    { label: "Scenarios searched by optimizer", value: "81" },
    { label: "Statistical tests in R", value: "6" },
  ],
  bullets: [
    "Trained Random Forest models on 1,200 simulated shift-level records: throughput prediction (R²=0.934 on held-out data, 0.931 cross-validated) and Low/Medium/High risk classification (91.7% accuracy), with analytical SQL over a 5-table MySQL schema.",
    "Ran 6 statistical tests in R (including ANOVA, correlation, and distribution tests) and used SHAP to show which inputs drive each model; disruption hours are the strongest driver of both throughput and risk.",
    "Designed a 5-tab Streamlit app: Overview (live KPIs), A/B Comparison (side-by-side scenario radar), What-If Optimizer (81-combination grid search heatmap), Model Intelligence (SHAP feature importance), and Export Reports.",
    "Built a What-If Optimizer searching all combinations of staff hours (4–12) and disruption hours (0–8) to find the cheapest configuration meeting a user-defined throughput target and budget.",
    "Generated a multi-sheet openpyxl Excel dashboard with live Scenario Prediction sheet (KPI table, feature impact table, embedded bar chart) and a one-page reportlab PDF executive summary with automated recommendations.",
    "Optimized performance using Streamlit caching - prediction loop, optimizer grid, and Excel reads are cached so tab switching and slider changes respond near-instantly after first load.",
  ],
  github: "https://github.com/garvit-mittal04/warehouse-decision-system",
  liveApp: "https://warehouse-garvit.streamlit.app",
};

const fpaProject = {
  title: "FP&A AI Analyst Agent",
  subtitle: "Finance AI · Python · SQL · Scikit-learn · Groq LLM · Streamlit",
  description:
    "An FP&A automation pipeline that compares actuals to budget, flags unusual line items, and drafts management commentary in one run. Uses a SQLite CTE-based variance engine with full outer join emulation, Isolation Forest anomaly detection with a stability check, and Groq LLM commentary with a rule-based fallback - shipped with a 15-test validation suite.",
  highlights: [
    { label: "Validation tests passing", value: "15 / 15" },
    { label: "Anomalies flagged (sample)", value: "25 / 408 records" },
    { label: "Budget-only rows lost", value: "0" },
    { label: "Excel report", value: "3 sheets" },
  ],
  bullets: [
    "Engineered an end-to-end FP&A pipeline that turns actual and budget files into variance analysis, department summaries, rolling trends, and commentary in one run - using a SQLite CTE-based variance engine with full outer join emulation to prevent budget-only row loss.",
    "Flagged 25 anomalies across 408 synthetic financial records using Isolation Forest with a stability check and adaptive contamination (stable data returns zero); integrated Groq LLM commentary with a rule-based fallback.",
    "Shipped with a 15-test validation suite covering variance math, data integrity, and anomaly detection, all 15 passing.",
    "Built a formatted 3-sheet Excel export (Executive Summary, Variance Detail, AI Commentary) and deployed the full system as a live Streamlit app with sample data preloaded.",
    "Implemented FULL OUTER JOIN-style logic via UNION of keys so budget-only and actual-only records are preserved - not dropped - in analysis.",
    "Inspired by hands-on experience analyzing 20,000+ procurement and production records at Harsiddhi Foods - this project is the AI-powered version of that manual workflow.",
  ],
  github: "https://github.com/garvit-mittal04/fpa-ai-agent",
  liveApp: "https://fpa-ai-agent-garvit.streamlit.app",
};

const processXrayProject = {
  title: "Process X-Ray",
  subtitle: "Multi-Agent AI · Python · Gemini & Groq LLMs · Process Mining · Streamlit",
  description:
    "An AI system that reads a small business's WhatsApp order group and shows where time is really lost. Five AI agents rebuild the real process, trace every order message by message, design automations and challenge them, then a deterministic replay engine re-runs the business's own history to prove what would have changed.",
  highlights: [
    { label: "Waiting removed", value: "28.6 h / week" },
    { label: "Goods dispatched sooner", value: "9.3 h per order" },
    { label: "AI agents", value: "5 incl. devil's advocate" },
    { label: "Cost to run", value: "₹0 (free tiers)" },
  ],
  bullets: [
    "Built a 5-agent LLM pipeline (Mapper, Event-log Tracer, Analyst, Recommender, Devil's Advocate) that turns an unstructured, Hinglish WhatsApp export into a structured event log, tested on a fictional two-month chat with 32 interleaved orders.",
    "Designed a counterfactual replay engine that re-runs real order timelines with automation rules applied, measuring waits in working hours instead of estimating savings with formulas.",
    "Caught an AI failure where the model claimed 237 h/week of savings by 'speeding up' customer payments; replaced prompt instructions with code-enforced guardrails so only waits an automation controls can be shortened.",
    "Engineered a free-tier resilience layer: Gemini → Groq fallback chain with per-minute vs daily quota cooldowns, adaptive token budgets, chunked processing of long chats, and per-visitor key isolation.",
    "Built privacy in from the start: participant, customer, phone and email masking before any AI call, in-memory processing with no storage, and AI-generated flowcharts rendered in a sandboxed frame.",
    "Shipped a Streamlit app with a custom ledger-inspired design, instant demo mode, one-click sample analysis, Word report export, and a known-answer test suite (8/8 checks) validating the pipeline against ground truth.",
  ],
  github: "https://github.com/garvit-mittal04/process-xray",
  liveApp: "https://process-xray.streamlit.app",
};

const opsresolveProject = {
  title: "OpsResolve AI",
  subtitle: "AI Evaluation · Python · Decimal Rules Engine · Anthropic API · Streamlit · pytest · GitHub Actions",
  description:
    "An operations exception investigator that matches purchase orders, supplier invoices and goods receipts, flags 9 types of discrepancy with exact amounts and the source rows behind them, and tests candidate explanations against the records. AI only explains a finding and never calculates; every answer is checked by a deterministic validator before it is shown, and the whole engine is scored against a hand-labelled benchmark in CI.",
  highlights: [
    { label: "Benchmark F1", value: "0.986" },
    { label: "Precision / Recall", value: "1.000 / 0.973" },
    { label: "Exact amounts", value: "36 / 36" },
    { label: "Automated tests", value: "1,152" },
  ],
  bullets: [
    "Built a deterministic three-way match engine for purchase orders, supplier invoices and goods receipts that detects 9 exception types with exact Decimal arithmetic, severity, amount impact and the file and line of every source row.",
    "Evaluated it against a hand-labelled 36-scenario benchmark (precision 1.000, recall 0.973, F1 0.986, exact amounts on 36/36 matches) and pinned the scores in CI, so any change in detection fails the build until reviewed. The one miss (S36) is documented as a known limitation.",
    "Added optional, advisory AI explanations that never calculate: each answer is checked by a deterministic validator (citations, identifiers, numbers, signs, dates, supplier names) and rejected with problem codes if it doesn't match the evidence.",
    "Protected data sent to the model: supplier IDs are pseudonymised, names and descriptions are never sent, and a privacy guard blocks the request if any real identifier remains.",
    "Built 5 deterministic investigation checks (receipt not posted, unit mix-up, mistyped PO number, document under another PO, price from another order) that label each explanation consistent, contradicted or can't-be-checked, never a confirmed cause.",
    "Shipped a CLI, a localhost-only Streamlit app and a locked-down public demo (synthetic data only, no uploads, no AI), covered by 1,152 automated tests including Streamlit UI tests and formula-injection-safe CSV exports.",
  ],
  github: "https://github.com/garvit-mittal04/opsresolve-ai",
  liveApp: "https://opsresolve-ai.streamlit.app",
};

const challengeProject = {
  title: "60-Day Claude AI Build Challenge",
  subtitle: "AB Talks #60DayClaudeChallenge · Jun–Jul 2026 · Prompt Engineering · AI Apps · Multi-Agent Systems · Product Launch",
  description:
    "Built and shipped something every day for 60 days, progressing from prompt engineering fundamentals to custom Claude skills, business simulators and multi-agent systems, and ending in a 10-day capstone that took Kickoff from product discovery to a live v1.0.0 launch.",
  highlights: [
    { label: "Days shipped", value: "60 / 60" },
    { label: "Interactive apps built", value: "40" },
    { label: "Commits", value: "70" },
    { label: "Capstone to launch", value: "10 days" },
  ],
  journey: [
    { days: "Days 1–7", title: "Prompt foundations", text: "Role-based and chain-of-thought prompting, context engineering, model selection and reasoning strategy." },
    { days: "Days 8–20", title: "First AI apps and skills", text: "AI dashboards, a nutrition analytics app, this portfolio site, an ATS resume optimizer and custom Claude skills." },
    { days: "Days 21–31", title: "Business simulators", text: "Startup validation reports, prior-authorization and hospital admission simulators, and a supply chain control tower." },
    { days: "Days 32–45", title: "Learning tools", text: "Marketing strategy and prompt puzzles, a SQL window functions studio, PDF tools and a personal finance command center." },
    { days: "Days 46–50", title: "Multi-agent AI", text: "A 6-agent autonomous loop, 6 parallel multimodal reviewers, an LLM comparison builder and an adversarial interview simulator." },
    { days: "Days 51–60", title: "Capstone: Kickoff", text: "PRD, pitch deck and system design, then Cloudflare Workers AI, KV permalinks, a release audit and the v1.0.0 launch." },
  ],
  bullets: [
    "Shipped a build every day for 60 days in the AB Talks #60DayClaudeChallenge: 40 single-file interactive HTML apps, documented across 70 commits with daily write-ups and screenshots.",
    "Progressed from prompt engineering to custom Claude skills and multi-agent systems, including a 6-agent autonomous loop with plateau, threshold and cap stop conditions, and 6 parallel multimodal AI reviewers.",
    "Built operations simulators grounded in real workflows: prior authorization and hospital admission, a randomized supply-chain crisis, and a real-time supply chain control tower tracking 8 KPIs.",
    "Produced consulting-grade strategy deliverables: a startup validation report (TAM/SAM/SOM, founder-market fit 78/100, go/no-go with a kill switch) and a 14-section business strategy report.",
    "Capstone: took Kickoff from product discovery to launch in 10 days, with a PRD, pitch deck, 5 system-design docs, Cloudflare Workers AI (Llama 3.2), KV-backed permalinks and a v1.0.0 release.",
    "Ran the launch like a product: an hour-by-hour launch plan, LinkedIn plus 3 Reddit communities, 15 personal outreach messages, metrics snapshots and a written retrospective with a 30-day growth plan.",
  ],
  repo: "https://github.com/garvit-mittal04/claude-60-days-challenge",
  kickoffLive: "https://kickoff-5r0.pages.dev",
  kickoffCode: "https://github.com/garvit-mittal04/kickoff",
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
  "AI Evaluation & LLM Systems": [
    "LLM Evaluation & Eval Harnesses", "LLM-as-Judge", "LLM Observability",
    "Benchmark Design & Labelled Datasets", "Precision / Recall / F1",
    "Regression Testing in CI (GitHub Actions)", "pytest",
    "AI Output Validation & Guardrails", "Anthropic API (Claude)",
    "LLM Agents (Gemini, Groq)", "Prompt Engineering",
  ],
  "Analytics & Modeling": [
    "Forecasting & Regression", "Classification", "A/B Testing", "Anomaly Detection",
    "Statistical Hypothesis Testing", "Machine Learning (XGBoost, Random Forest, Isolation Forest)",
    "Demand Forecasting", "Root-Cause Analysis", "Decision Support",
  ],
  "Data & Programming": [
    "SQL (Joins, CTEs, Window Functions, Stored Procedures)", "Python (Pandas, NumPy, Scikit-learn)",
    "R", "Excel (PivotTables, Power Query, VBA)", "Power Automate", "ETL & Data Cleaning",
    "Facebook Prophet", "SHAP Explainability",
    "Process Mining",
  ],
  "BI & Visualization": [
    "Power BI (DAX)", "Tableau", "KPI Dashboards", "Data Storytelling",
    "Plotly", "Streamlit",
  ],
  "Business & Operations": [
    "Financial & Operational Reporting", "Pricing Operations Support", "Supply Chain Analytics",
    "Cross-Functional Coordination", "Margin Analysis", "Process Improvement",
    "Reporting Automation", "Stakeholder Communication", "Project Tracking",
  ],
};

const certifications = [
  "Data Science & Business Analytics – University of Maryland",
  "Power BI – Udemy",
  "Tableau Desktop Specialist",
  "Economics & Sustainability – Wayland Baptist University",
];

const quickStats = [
  { label: "Onboarding Processing Time Cut", value: "~90%", numericEnd: null, icon: <Zap size={18} /> },
  { label: "Onboarding Cases Automated / Month", value: "1,000+", numericEnd: 1000, icon: <Database size={18} /> },
  { label: "Forecast Accuracy Lift", value: "15–20%", numericEnd: null, icon: <TrendingUp size={18} /> },
  { label: "Benchmark F1 (OpsResolve AI)", value: "0.986", numericEnd: null, icon: <FlaskConical size={18} /> },
];

const educationData = [
  {
    degree: "Master of Science in Business Analytics & Artificial Intelligence (Remote)",
    school: "The University of Texas at Dallas",
    period: "Aug 2025 – Present",
    details: "Relevant Coursework: Data Analytics, Advanced Statistics, A/B Testing, Applied Econometrics, Operations Management.",
  },
  {
    degree: "Bachelor of Business Administration (Hons.) – Finance",
    school: "Christ University, Bangalore",
    period: "May 2025",
    details: "Built a foundation in finance, accounting, business analysis, and quantitative decision-making.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Hooks ─────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

// Animated counter for numeric stats
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

// Tilt card with glow on hover
function TiltCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000, ...style }}
      className={`relative ${className}`}
    >
      {hovered && (
        <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-60"
          style={{ background: "radial-gradient(400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.12), transparent 80%)" }} />
      )}
      {children}
    </motion.div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle }: {
  eyebrow: string; title: string; subtitle?: string;
}) {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="mb-10"
    >
      <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-indigo-400">{eyebrow}</motion.p>
      <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</motion.h2>
      {subtitle && <motion.p variants={fadeUp} className="mt-4 max-w-3xl leading-7 text-gray-400">{subtitle}</motion.p>}
    </motion.div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-gray-300">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
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
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
          >
            <Sparkles size={15} aria-hidden="true" />
            MS Business Analytics &amp; AI · UT Dallas (Remote)
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-sm uppercase tracking-[0.22em] text-gray-500"
          >
            AI Evaluation · Business Analytics · Operations · BI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            From data to decisions,
            <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
              driving business outcomes through analytics and AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
          >
            I&apos;m Garvit Mittal - an AI Evaluation &amp; Harness Engineer at StatusNeo and a Business
            Analytics &amp; AI graduate student, building evaluation harnesses, forecasting, and
            decision-support systems across AI, operations, supply chain, and finance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78 }}
            className="mt-5 max-w-3xl text-base leading-8 text-gray-300"
          >
            My strongest work combines SQL, Python, BI tools, machine learning, and LLMs
            to solve real business problems, and proves they work with tests and evals
            instead of stopping at a demo.
          </motion.p>

        </div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-sm"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(0,0,0,0.4) 100%)" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {quickStats.map((item) => (
              <div key={item.label}
                className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-indigo-500/30 hover:bg-indigo-500/5">
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-indigo-400 transition">
                  <span aria-hidden="true">{item.icon}</span>
                  <p className="text-sm">{item.label}</p>
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {item.numericEnd
                    ? <AnimatedCounter value={item.numericEnd} suffix="+" />
                    : item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
            <p className="text-sm text-indigo-400">What I bring</p>
            <p className="mt-2 text-lg font-semibold text-white leading-7">
              Analytics depth, business context, and the ability to turn data into decision-ready action.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isInView } = useScrollReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"
      >
        <div>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.22em] text-indigo-400">About</motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My approach</motion.h2>
          <motion.div
            variants={fadeUp}
            className="relative mt-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl shadow-indigo-500/10"
          >
            <img
              src="/garvit.png"
              alt="Garvit Mittal"
              className="h-full w-full object-cover object-[50%_25%] grayscale-[15%]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{ background: "linear-gradient(180deg, rgba(3,3,3,0) 55%, rgba(3,3,3,0.55) 100%), radial-gradient(120% 90% at 50% 30%, transparent 60%, rgba(3,3,3,0.35) 100%)" }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-indigo-500/20" aria-hidden="true" />
          </motion.div>
        </div>
        <motion.div variants={staggerContainer} className="space-y-5 leading-8 text-gray-300">
          {[
            "My background in finance, business analysis, and operations shapes how I approach data and AI problems. I build systems that improve planning, cost visibility, and forecasting quality, and I hold AI outputs to the same standard as any other analysis: measured against ground truth before anyone relies on them.",
            "Today at StatusNeo I build evaluation harnesses for AI flows and have shipped scheduling and follow-up automation in KARMA, its applicant tracking system. Before that, I automated HR onboarding for 1,000+ onboarding cases a month (cutting processing time by ~90%), improved forecast accuracy by 15–20%, analyzed 20,000+ operational records for cost and supplier insights, and cut monthly reporting time by 25%. In my own projects I test AI the same way: Process X-Ray is checked by a known-answer test suite against a ground-truth event log, and reports openly where the model falls short.",
            "I'm interested in roles where analytics and AI directly shape decisions, across AI evaluation, business analytics, operations, and BI. My long-term goal is to build systems that move teams from reactive reporting to structured, forward-looking action, with AI they can trust.",
          ].map((text, i) => (
            <motion.p key={i} custom={i} variants={fadeUp}>{text}</motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function EducationSection() {
  const { ref, isInView } = useScrollReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        subtitle="A mix of analytics, quantitative thinking, business context, and applied problem-solving."
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid gap-6"
      >
        {educationData.map((item, i) => (
          <TiltCard key={`${item.school}-${item.degree}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <motion.div custom={i} variants={fadeUp} className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="mt-1 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300" aria-hidden="true">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="mt-1 text-gray-400">{item.school}</p>
                    <p className="mt-3 max-w-3xl leading-7 text-gray-300">{item.details}</p>
                  </div>
                </div>
                <p className="shrink-0 text-sm text-gray-500 md:pl-6">{item.period}</p>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, isInView } = useScrollReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Experience"
        title="Work that created business value"
        subtitle="Experience across AI evaluation, university operations, retail analytics, food manufacturing, finance, and business-facing analytical support."
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="space-y-6"
      >
        {experienceData.map((item, i) => (
          <TiltCard key={`${item.company}-${item.role}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <motion.div custom={i} variants={fadeUp} className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className={`mt-1 rounded-2xl border p-3 ${item.badge ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300" : "border-white/10 bg-black/40 text-gray-300"}`} aria-hidden="true">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      {item.badge && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300 font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-gray-400">{item.company}</p>
                  </div>
                </div>
                <p className="shrink-0 text-sm text-gray-500">{item.period}</p>
              </div>
              <div className="mt-5 pl-0 md:pl-[68px]">
                <BulletList items={item.points} />
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const { ref: refOps, isInView: inViewOps } = useScrollReveal();
  const { ref: ref0, isInView: inView0 } = useScrollReveal();
  const { ref: refChallenge, isInView: inViewChallenge } = useScrollReveal();
  const { ref: ref1, isInView: inView1 } = useScrollReveal();
  const { ref: ref2, isInView: inView2 } = useScrollReveal();
  const { ref: ref3, isInView: inView3 } = useScrollReveal();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Projects"
        title="Featured work"
        subtitle="Production-grade systems built around business problems, measurable outcomes, and usable decision tools."
      />

      {/* ── OpsResolve AI (flagship) ── */}
      <motion.div
        ref={refOps}
        initial={{ opacity: 0, y: 28 }}
        animate={inViewOps ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <TiltCard className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl"
          style={{ background: "linear-gradient(135deg, rgba(20,184,166,0.07) 0%, rgba(0,0,0,0.5) 100%)" } as React.CSSProperties}>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-teal-300">Flagship Project</span>
              <span className="rounded-full border border-white/10 px-3 py-1">AI Evaluation</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Finance Operations</span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Live Demo</span>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <div className="rounded-2xl border border-teal-500/20 bg-teal-500/10 p-3 text-teal-300" aria-hidden="true">
                <FlaskConical size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {opsresolveProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{opsresolveProject.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{opsresolveProject.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {opsresolveProject.highlights.map((item) => (
                <div key={item.label}
                  className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-4 transition hover:border-teal-500/40 hover:bg-teal-500/10">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { label: "Problem", text: "Before paying a supplier, finance teams match each invoice to its purchase order and to the goods actually received. Quantity, price, unit and duplicate-bill mismatches are found by hand across spreadsheets, and AI tools that 'reconcile' can't show how they got a number." },
                  { label: "Approach", text: "Every match and amount is rule-based Python with exact decimal arithmetic and cited source rows. Investigation checks test possible explanations against the records, and optional AI only explains a finding, with every answer validated against the evidence before it is shown." },
                  { label: "Outcome", text: "On a hand-labelled 36-scenario benchmark: 36 of 37 expected exceptions found, no false alarms, every amount exact. Built and tested on synthetic data only, and the repo says so: it has not yet been validated on real supplier data." },
                ].map((block) => (
                  <div key={block.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-teal-400">{block.label}</p>
                    <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
              <img src="/opsresolve.png"
                alt="OpsResolve public demo: 62 rows read, 3 validation issues and 18 exceptions by severity"
                className="w-full" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {opsresolveProject.bullets.map((bullet, index) => (
                <div key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-teal-500/20 hover:bg-teal-500/5">
                  <p className="leading-7 text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-400">Key Differentiators</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "Measured, not claimed: precision, recall and F1 on a labelled benchmark, pinned in CI",
                  "AI explains, code calculates, and a validator checks every answer",
                  "Limitations and the one known miss are documented, not hidden",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-4 text-gray-300">
                    <ShieldCheck size={16} className="shrink-0 mt-0.5 text-teal-400" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={opsresolveProject.liveApp} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-teal-500/25 transition hover:scale-[1.02] hover:shadow-teal-500/40">
                <Globe size={16} aria-hidden="true" />
                Launch Live Demo
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={opsresolveProject.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> View Code
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── Process X-Ray ── */}
      <motion.div
        ref={ref0}
        initial={{ opacity: 0, y: 28 }}
        animate={inView0 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <TiltCard className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl"
          style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(0,0,0,0.5) 100%)" } as React.CSSProperties}>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sky-300">Known-Answer Tested</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Multi-Agent AI</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Process Mining</span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Live App</span>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-300" aria-hidden="true">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {processXrayProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{processXrayProject.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{processXrayProject.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {processXrayProject.highlights.map((item) => (
                <div key={item.label}
                  className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 transition hover:border-sky-500/40 hover:bg-sky-500/10">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { label: "Problem", text: "Millions of Indian small businesses run operations on WhatsApp, not ERPs. Orders wait on stock replies, approvals and chasers, but the delays are buried in hundreds of messages, and ERP-based process-mining tools can't read a group chat." },
                  { label: "Approach", text: "Five LLM agents rebuild the process and trace every order through the interleaved chat. Deterministic code measures waits in working hours, enforces guardrails on what can be sped up, and replays the real history with the approved automations." },
                  { label: "Outcome", text: "On a two-month, 32-order sample: 28.6 h of waiting removed per week, goods dispatched 9.3 working hours sooner, 18 reminder messages avoided. Live, free, private, and needs no sign-up or API key." },
                ].map((block) => (
                  <div key={block.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-sky-400">{block.label}</p>
                    <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
              <img src="/process-xray.png"
                alt="Process X-Ray: an order's journey today versus with automations, replayed from real chat history"
                className="w-full" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {processXrayProject.bullets.map((bullet, index) => (
                <div key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-sky-500/20 hover:bg-sky-500/5">
                  <p className="leading-7 text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-400">Key Differentiators</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "Replays the business's real history instead of estimating savings with formulas",
                  "Code-enforced guardrails: the AI proposes, the code measures",
                  "Reads WhatsApp, the data India's MSMEs actually have",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4 text-gray-300">
                    <ShieldCheck size={16} className="shrink-0 mt-0.5 text-sky-400" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={processXrayProject.liveApp} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:shadow-sky-500/40">
                <Globe size={16} aria-hidden="true" />
                Launch Live App
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={processXrayProject.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> View Code
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── 60-Day Claude AI Build Challenge ── */}
      <motion.div
        ref={refChallenge}
        initial={{ opacity: 0, y: 28 }}
        animate={inViewChallenge ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <TiltCard className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(0,0,0,0.5) 100%)" } as React.CSSProperties}>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-300">60-Day Challenge</span>
              <span className="rounded-full border border-white/10 px-3 py-1">AB Talks · Claude AI</span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Completed</span>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300" aria-hidden="true">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {challengeProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{challengeProject.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{challengeProject.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {challengeProject.highlights.map((item) => (
                <div key={item.label}
                  className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 transition hover:border-indigo-500/40 hover:bg-indigo-500/10">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
              <img src="/challenge-60-days.png"
                alt="60-Day Claude AI Build Challenge: one square per day across six phases, ending in the Kickoff launch"
                className="w-full" />
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-indigo-400">The Journey</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {challengeProject.journey.map((phase, i) => (
                  <div key={phase.days}
                    className={`rounded-2xl border p-5 ${i === challengeProject.journey.length - 1
                      ? "border-violet-500/30 bg-violet-500/10"
                      : "border-white/10 bg-white/[0.03]"}`}>
                    <p className="text-xs uppercase tracking-[0.18em] text-indigo-300">{phase.days}</p>
                    <p className="mt-2 font-semibold text-white">{phase.title}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{phase.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-[24px] border border-violet-500/25 bg-violet-500/5 p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3 text-violet-300" aria-hidden="true">
                  <Target size={22} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-violet-400">Capstone · Kickoff v1.0.0</p>
                  <p className="mt-2 text-lg font-semibold text-white">The analysis brief you write before you write any SQL.</p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-300">
                    For analysts and ops teams handed vague executive questions: an AI interview turns the question into a structured analysis brief with a shareable permalink. Built on Cloudflare Pages, Workers AI and KV.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {challengeProject.bullets.map((bullet, index) => (
                <div key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-indigo-500/20 hover:bg-indigo-500/5">
                  <p className="leading-7 text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={challengeProject.kickoffLive} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:scale-[1.02] hover:shadow-indigo-500/40">
                <Globe size={16} aria-hidden="true" />
                Launch Kickoff
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={challengeProject.repo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> 60-Day Challenge Repo
              </a>
              <a href={challengeProject.kickoffCode} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> Kickoff Code
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── Warehouse Flagship ── */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 28 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <TiltCard className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(0,0,0,0.5) 100%)" } as React.CSSProperties}>
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-300">Machine Learning</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Operations Analytics</span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Live App</span>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300" aria-hidden="true">
                <Boxes size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {flagshipProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{flagshipProject.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{flagshipProject.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {flagshipProject.highlights.map((item) => (
                <div key={item.label}
                  className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 transition hover:border-indigo-500/40 hover:bg-indigo-500/10">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { label: "Problem", text: "Warehouse teams make staffing and scheduling decisions without forward-looking signals - disruptions are noticed late, costs escalate reactively, and throughput variation across shifts goes unexplained." },
                  { label: "Approach", text: "Simulated 1,200 shift-level records from realistic patterns, trained Random Forest models for throughput and risk, explained them with SHAP, tested the patterns with 6 statistical tests in R, and prototyped 30-day demand forecasts with Prophet." },
                  { label: "Outcome", text: "A live Streamlit app with R²=0.934 throughput prediction and 91.7% risk accuracy, where a planner compares scenarios and finds the cheapest staffing plan that meets a throughput target, using adjustable cost assumptions." },
                ].map((block) => (
                  <div key={block.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-indigo-400">{block.label}</p>
                    <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
              <img src="/warehouse-v2.png"
                alt="Warehouse Decision Support System v2 – 5-tab Streamlit app"
                className="w-full" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {flagshipProject.bullets.map((bullet, index) => (
                <div key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-indigo-500/20 hover:bg-indigo-500/5">
                  <p className="leading-7 text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={flagshipProject.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> View Code
              </a>
              <a href={flagshipProject.liveApp} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:scale-[1.02] hover:shadow-indigo-500/40">
                <Globe size={16} aria-hidden="true" />
                Launch Live App
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── FP&A AI Agent ── */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 28 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-8"
      >
        <TiltCard className="rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl">
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-violet-300">Finance AI</span>
              <span className="rounded-full border border-white/10 px-3 py-1">FP&amp;A Automation</span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Live App</span>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3 text-violet-300" aria-hidden="true">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {fpaProject.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{fpaProject.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300">{fpaProject.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {fpaProject.highlights.map((item) => (
                <div key={item.label}
                  className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 transition hover:border-violet-500/40 hover:bg-violet-500/10">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-dashed border-white/15 bg-black/30 p-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  { label: "Problem", text: "Month-end variance analysis is often done by hand in Excel: comparing actuals to budget, writing commentary, and sending reports to leadership - a repetitive and error-prone process." },
                  { label: "Approach", text: "Built a full pipeline using SQL CTEs for variance analysis with full outer join emulation, Isolation Forest adaptive anomaly detection, and a Groq LLM prompt chain to generate structured management commentary automatically." },
                  { label: "Outcome", text: "Variance analysis, anomaly flags, and draft commentary in a single run. 25 anomalies flagged across 408 synthetic records. 15 of 15 tests passing. Live Streamlit app with sample data preloaded." },
                ].map((block) => (
                  <div key={block.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-violet-400">{block.label}</p>
                    <p className="mt-3 leading-7 text-gray-300">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
              <img src="/fpa-ai-agent.png"
                alt="FP&A AI Analyst Agent: department variance vs budget, AI commentary and the five-step pipeline"
                className="w-full" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {fpaProject.bullets.map((bullet, index) => (
                <div key={index}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-violet-500/20 hover:bg-violet-500/5">
                  <p className="leading-7 text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-violet-400">Key Differentiators</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "No data loss via FULL OUTER JOIN-style logic",
                  "Smart anomaly detection that avoids false positives on stable datasets",
                  "Board-ready AI commentary with finance-style structure + rule-based fallback",
                ].map((text) => (
                  <div key={text} className="flex gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 text-gray-300">
                    <FlaskConical size={16} className="shrink-0 mt-0.5 text-violet-400" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={fpaProject.liveApp} target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.02]">
                <Globe size={16} aria-hidden="true" />
                Launch Live App
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={fpaProject.github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-medium text-gray-200 transition hover:bg-white/10">
                <ExternalLink size={16} aria-hidden="true" /> View Code
              </a>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      {/* ── Secondary projects ── */}
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="mt-8 grid gap-6 lg:grid-cols-3"
      >
        {projectData.map((project, idx) => (
          <TiltCard key={project.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <motion.div custom={idx} variants={fadeUp} className="p-6 h-full">
              <div className="inline-flex rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300" aria-hidden="true">
                {project.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-indigo-400">{project.subtitle}</p>
              <p className="mt-4 leading-7 text-gray-300">{project.description}</p>
              <div className="mt-5"><BulletList items={project.bullets} /></div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  const { ref, isInView } = useScrollReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionHeader
        eyebrow="Skills"
        title="Tools, methods, and business strengths"
        subtitle="Technical capability is strongest when paired with business understanding and clear communication."
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid gap-6 lg:grid-cols-2"
      >
        {Object.entries(skillsData).map(([category, skills], index, all) => (
          <TiltCard key={category} className={`rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-sm${all.length % 2 === 1 && index === all.length - 1 ? " lg:col-span-2" : ""}`}>
            <motion.div custom={index} variants={fadeUp} className="p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300" aria-hidden="true">
                  {SKILL_ICONS[index]}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" role="list" aria-label={`${category} skills`}>
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    role="listitem"
                    whileHover={{ scale: 1.06, backgroundColor: "rgba(99,102,241,0.15)", borderColor: "rgba(99,102,241,0.4)" }}
                    className="cursor-default rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-gray-300 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3 text-violet-300" aria-hidden="true">
            <Award size={22} />
          </div>
          <h3 className="text-xl font-semibold">Certifications</h3>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-gray-300 transition hover:border-violet-500/20 hover:bg-violet-500/5">
              <Zap size={14} className="shrink-0 text-violet-400" />
              {cert}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const { ref, isInView } = useScrollReveal();
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="rounded-[30px] border border-white/10 p-8 md:p-10 backdrop-blur-sm"
        style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(139,92,246,0.04) 50%, rgba(0,0,0,0.5) 100%)" }}
      >
        <p className="text-sm uppercase tracking-[0.22em] text-indigo-400">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Let&apos;s connect
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-gray-300">
          I&apos;m interested in AI evaluation, business analytics, operations, and BI roles where
          analytics and AI can directly improve planning, performance, and business decisions.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { href: "mailto:garvitm534@gmail.com", icon: <Mail size={18} />, label: "Email", sub: "garvitm534@gmail.com", accent: "indigo" },
            { href: "https://www.linkedin.com/in/garvit-mittal04/", icon: <ExternalLink size={18} />, label: "LinkedIn", sub: "Connect professionally", target: "_blank", accent: "violet" },
            { href: "https://github.com/garvit-mittal04", icon: <ExternalLink size={18} />, label: "GitHub", sub: "Explore code and project work", target: "_blank", accent: "indigo" },
          ].map((item) => (
            <a key={item.label} href={item.href} target={item.target} rel={item.target ? "noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-indigo-500/30 hover:bg-indigo-500/5">
              <div className="flex items-center gap-3 text-white group-hover:text-indigo-300 transition">
                {item.icon}
                <span className="font-medium">{item.label}</span>
                <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
              <p className="mt-3 text-gray-400">{item.sub}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
            <MapPin size={14} aria-hidden="true" /> Chandigarh, India
          </div>
          <a href="https://github.com/garvit-mittal04" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-300">
            <ExternalLink size={14} aria-hidden="true" /> View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function GarvitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <main className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/40 selection:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        {/* Gradient mesh */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.08), transparent)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)" }} />
        {/* Animated subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{
          background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          scaleX: scrollY / (typeof document !== "undefined" ? Math.max(document.body.scrollHeight - window.innerHeight, 1) : 1),
        }}
      />

      {/* ── Header ── */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl"
        style={{ background: "rgba(3,3,3,0.8)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <button
            onClick={() => goTo(null, -1)}
            className="group flex items-center gap-2 text-lg font-semibold tracking-wide transition hover:text-indigo-300"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500 transition group-hover:scale-125" />
            Garvit Mittal
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((item) => {
              const isActive = activeTab === item.href;
              return (
                <button key={item.href} onClick={() => goTo(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-300 border border-indigo-500/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/[0.06] px-6 pb-4 md:hidden overflow-hidden"
            >
              <nav className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3" aria-label="Mobile navigation">
                <button onClick={() => goTo(null, -1)}
                  className="rounded-xl px-3 py-2 text-left text-gray-300 transition hover:bg-white/10 hover:text-white">
                  Home
                </button>
                {navLinks.map((item) => (
                  <button key={item.href} onClick={() => goTo(item.href)}
                    className={`rounded-xl px-3 py-2 text-left transition hover:text-white ${
                      activeTab === item.href
                        ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        : "text-gray-300 hover:bg-white/10"
                    }`}>
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next navigation ── */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-2 md:px-8">
        <div className="flex items-center justify-between">
          <button onClick={goPrev} disabled={!hasPrev}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasPrev
                ? "border-white/15 text-gray-200 hover:bg-white/10 hover:border-indigo-500/30"
                : "cursor-not-allowed border-white/5 text-gray-700"
            }`}>
            <ArrowLeft size={16} aria-hidden="true" />
            {currentIndex === 0 ? "Home" : currentIndex > 0 ? navLinks[currentIndex - 1].label : ""}
          </button>

          <div className="flex items-center gap-2" aria-label="Page indicators">
            {[null, ...TAB_ORDER].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button key={tab ?? "home"} onClick={() => goTo(tab)}
                  aria-label={tab ? navLinks.find((n) => n.href === tab)?.label : "Home"}
                  className={`rounded-full transition-all ${
                    isActive
                      ? "h-2.5 w-6 bg-gradient-to-r from-indigo-500 to-violet-500"
                      : "h-2 w-2 bg-white/20 hover:bg-white/40"
                  }`} />
              );
            })}
          </div>

          <button onClick={goNext} disabled={!hasNext}
            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition ${
              hasNext
                ? "border-white/15 text-gray-200 hover:bg-white/10 hover:border-indigo-500/30"
                : "cursor-not-allowed border-white/5 text-gray-700"
            }`}>
            {activeTab === null ? navLinks[0].label : currentIndex < TAB_ORDER.length - 1 ? navLinks[currentIndex + 1].label : ""}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </main>
  );
}
