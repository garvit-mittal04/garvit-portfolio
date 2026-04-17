"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  Database,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "XGBoost",
  "Time Series Forecasting",
  "Excel Modeling",
  "Power BI",
  "Tableau",
  "R",
  "Decision Systems",
];

const metrics = [
  "R² = 0.874",
  "89% Shift Gap Identified",
  "ML + SQL + Decision Systems",
];

export default function GarvitPortfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-10 top-[500px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Business Analytics • AI • Decision Systems
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Garvit Mittal
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-2xl mx-auto mb-6"
          >
            I build data-driven systems that replace intuition with measurable
            decision-making across operations and forecasting.
          </motion.p>

          {/* Metrics */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {metrics.map((metric) => (
              <div
                key={metric}
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
              >
                {metric}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/garvit-mittal04/warehouse-decision-system"
              target="_blank"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              View Project <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
              target="_blank"
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              LinkedIn <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-gray-500"
        >
          <ChevronDown />
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        className="max-w-5xl mx-auto px-6 mb-24"
      >
        <h2 className="text-2xl font-semibold mb-6">About</h2>
        <p className="text-gray-400">
          I’m a Master’s student in Business Analytics & AI at UT Dallas,
          focused on building systems that convert raw operational data into
          strategic decisions using ML, SQL, and analytics.
        </p>
      </motion.section>

      {/* PROJECT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-6 mb-24"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-6">
          Featured Project
        </motion.h2>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="border border-gray-800 p-8 rounded-xl"
        >
          <h3 className="text-xl mb-4">
            ML-Powered Warehouse Decision System
          </h3>

          <p className="text-gray-400 mb-6">
            End-to-end system combining forecasting, ML models,
            and decision logic to optimize warehouse operations.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
            <div className="flex gap-2">
              <BarChart3 /> Forecasting
            </div>
            <div className="flex gap-2">
              <Database /> SQL Modeling
            </div>
            <div className="flex gap-2">
              <BrainCircuit /> ML Models
            </div>
            <div className="flex gap-2">
              <BriefcaseBusiness /> Decision Engine
            </div>
          </div>

          <a
            href="https://github.com/garvit-mittal04/warehouse-decision-system"
            target="_blank"
            className="text-cyan-400 flex items-center gap-2"
          >
            View Project <ArrowRight />
          </a>
        </motion.div>
      </motion.section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-2xl mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="border px-3 py-1 rounded-lg text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center pb-16">
        <h2 className="text-2xl mb-4">Contact</h2>
        <p className="text-gray-400 mb-6">
          Open to Summer 2026 internships
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <span className="flex gap-2">
            <Mail /> garvitm534@gmail.com
          </span>
          <span className="flex gap-2">
            <MapPin /> Dallas, TX
          </span>
        </div>
      </section>

    </div>
  );
}