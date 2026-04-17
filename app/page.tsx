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
} from "lucide-react";

export default function GarvitPortfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Garvit Mittal</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#experience" className="hover:text-gray-400">Experience</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl font-bold leading-tight"
        >
          Business Analytics & AI Student
          <br />
          Building Data-Driven Systems
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          I'm Garvit Mittal, currently pursuing my Master’s in Business Analytics & AI at UT Dallas. 
          I specialize in combining business strategy with data science to build real-world decision systems.
        </p>

        <div className="flex gap-4 mt-8">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
            View Projects <ArrowRight size={16}/>
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-xl">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-20 max-w-5xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I am a Business Analytics & AI graduate student at the University of Texas at Dallas, 
          with a strong foundation in finance and data analytics. My work focuses on building 
          end-to-end analytical systems — from data engineering and SQL architecture to machine 
          learning models and decision dashboards.
          <br /><br />
          I have hands-on experience in predictive modeling, forecasting, and optimization, and 
          I aim to leverage data to solve complex business problems in operations, finance, and supply chain.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-400">
            🎓 MS in Business Analytics & Artificial Intelligence — University of Texas at Dallas (2025–2027)
            <br />
            🎓 BBA in Finance — Christ University, India
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-8 py-20 max-w-5xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6">

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">Operations & Business Analytics Intern</h3>
            <p className="text-gray-400">Harsiddhi Foods Pvt. Ltd.</p>
            <ul className="mt-3 text-gray-400 list-disc list-inside">
              <li>Improved gross margins by 8–12% through pricing and cost optimization</li>
              <li>Built demand forecasting models increasing planning accuracy by 15%</li>
              <li>Developed financial models for contribution and cost analysis</li>
            </ul>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">Audit & Analytics Intern</h3>
            <p className="text-gray-400">Dipankar Gupta & Co.</p>
            <ul className="mt-3 text-gray-400 list-disc list-inside">
              <li>Performed financial audits and analytical reviews</li>
              <li>Worked on financial statements and compliance reporting</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-20 max-w-5xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 border border-gray-800 rounded-xl">
            <BarChart3 className="mb-4"/>
            <h3 className="text-xl font-semibold">Warehouse Decision System</h3>
            <p className="text-gray-400 mt-2">
              ML-powered system for demand forecasting, risk detection, and throughput prediction.
            </p>
            <a 
              href="https://github.com/garvit-mittal04/warehouse-decision-system"
              target="_blank"
              className="flex items-center gap-2 mt-4 text-sm text-gray-300"
            >
              View Project <ExternalLink size={14}/>
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-20 max-w-5xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="space-y-3 text-gray-400">
          <p className="flex items-center gap-2">
            <Mail size={16}/> garvitm534@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16}/> Dallas, Texas
          </p>
        </div>
      </section>

    </div>
  );
}