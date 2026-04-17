"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowRight,
  BarChart3,
  Database,
  BrainCircuit,
  BriefcaseBusiness,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function GarvitPortfolio() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Garvit Mittal
        </motion.h1>

        <p className="text-gray-400 text-lg mb-6">
          Business Analytics & AI • Decision Systems • Supply Chain Intelligence
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          I build data-driven systems that replace intuition with measurable decision-making —
          improving operations, forecasting, and real-time business outcomes.
        </p>

        {/* METRICS */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="border border-gray-700 px-4 py-2 rounded-lg text-sm">
            R² = 0.874
          </div>
          <div className="border border-gray-700 px-4 py-2 rounded-lg text-sm">
            89% Shift Gap Identified
          </div>
          <div className="border border-gray-700 px-4 py-2 rounded-lg text-sm">
            ML + SQL + Decision Systems
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/garvit-mittal04/warehouse-decision-system"
            target="_blank"
            className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg hover:scale-105 transition"
          >
            <ExternalLink className="h-4 w-4" />
            View Project
          </a>

          <a
            href="https://www.linkedin.com/in/garvit-mittal-81171632a/"
            target="_blank"
            className="flex items-center gap-2 border border-gray-600 px-5 py-3 rounded-lg hover:scale-105 transition"
          >
            <ExternalLink className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-6">About</h2>

        <p className="text-gray-400 leading-relaxed">
          I’m a Master’s student in Business Analytics & AI at UT Dallas, focused on
          building systems that turn raw operational data into strategic decisions.
          My work combines machine learning, SQL analytics, and business logic
          to solve real-world problems in supply chain and operations.
        </p>
      </section>

      {/* PROJECT */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Sparkles className="text-cyan-400" />
          Featured Project
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border border-gray-800 rounded-xl p-8 hover:border-cyan-400 transition"
        >
          <h3 className="text-xl font-semibold mb-3">
            ML-Powered Warehouse Decision System
          </h3>

          <p className="text-gray-400 mb-6">
            Built an end-to-end system integrating demand forecasting,
            risk classification, and throughput prediction to optimize
            warehouse operations and workforce planning.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Demand Forecasting (Prophet)
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" /> SQL Data Modeling
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-4 w-4" /> ML Models (XGBoost, GBM)
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4" /> Decision Engine
            </div>
          </div>

          <a
            href="https://github.com/garvit-mittal04/warehouse-decision-system"
            target="_blank"
            className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
          >
            View Full Project <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          {[
            "Python",
            "SQL",
            "Machine Learning",
            "XGBoost",
            "Time Series Forecasting",
            "Excel Modeling",
            "Power BI",
            "Tableau",
            "R",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-gray-700 px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* WHY ME */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-6">What I Bring</h2>

        <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
          <div>
            • Strong foundation in business + analytics  
            <br />• Ability to translate data → decisions  
            <br />• Real-world operations experience  
          </div>
          <div>
            • End-to-end system thinking  
            <br />• Focus on measurable impact  
            <br />• Clear communication of insights  
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-400 mb-6">
          Open to Summer 2026 internships in Business Analytics, Data Science, and Strategy roles.
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-gray-300">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> garvitm534@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Dallas, TX
          </span>
        </div>
      </section>

    </div>
  );
}