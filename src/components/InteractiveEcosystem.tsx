"use client";

import React, { useState } from "react";
import {
  Database,
  Brain,
  BarChart3,
  Code2,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Eye,
  MessageSquareCode,
  LineChart,
  Activity,
  Binary,
  ArrowUpRight,
  Check,
} from "lucide-react";

export interface SubCategory {
  id: string;
  title: string;
  countLabel: string;
  tagline: string;
  iconType: "code" | "brain" | "chart" | "zap" | "shield";
  services: string[];
}

export interface CoreOffering {
  id: "engineering" | "ai" | "analytics";
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  iconType: "database" | "brain" | "chart";
  featured?: boolean;
  subCategories: SubCategory[];
}

export const coreOfferingsData: CoreOffering[] = [
  {
    id: "engineering",
    title: "Data Engineering",
    badge: "Infrastructure & Pipelines",
    tagline: "Build scalable data foundations, pipelines and services that support AI applications, analytics and business intelligence.",
    summary: "Scalable pipelines, warehouses and data services that form the foundation for AI and analytics.",
    iconType: "database",
    subCategories: [
      {
        id: "app-dev",
        title: "Application Development",
        countLabel: "5 services within Data Engineering",
        tagline: "High performance transactional layers, APIs and event streams powering modern software.",
        iconType: "code",
        services: [
          "Databases & Data Models",
          "APIs & Data Services",
          "Event Streaming",
          "Application Logs & Monitoring",
          "Performance & Scalability",
        ],
      },
      {
        id: "ai-ml-eng",
        title: "AI / ML",
        countLabel: "6 services within Data Engineering",
        tagline: "End to end dataset pipelines, feature stores, and automated model deployment infrastructure.",
        iconType: "brain",
        services: [
          "Data Collection",
          "Data Cleaning",
          "Feature Engineering",
          "Training Datasets & Versioning",
          "Model Deployment Pipelines",
          "Data Quality",
        ],
      },
      {
        id: "bi-eng",
        title: "Business Intelligence",
        countLabel: "6 services within Data Engineering",
        tagline: "Unified lakehouses, semantic layers, and real time marts for executive decisions.",
        iconType: "chart",
        services: [
          "ELT / ETL",
          "Data Warehouse & Data Lake",
          "Data Modeling",
          "Data Quality",
          "Data Freshness & Streaming",
          "Semantic Layer & Data Marts",
        ],
      },
      {
        id: "usecases-eng",
        title: "Enterprise Use Cases",
        countLabel: "4 services within Data Engineering",
        tagline: "Mission critical architectures for real time applications and massive data volumes.",
        iconType: "zap",
        services: [
          "Real Time Fraud & Anomaly Ingestion",
          "High Throughput Stream Ingestion",
          "IoT & Telemetry Scalable Storage",
          "Multi Cloud Lakehouse & Data Marts",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "Data for AI",
    badge: "Most Popular",
    tagline: "We provide high quality, diverse and domain specific data to build, train and evaluate AI models. Our end to end data services support accurate, scalable and responsible AI development.",
    summary: "High quality, domain specific data to build, train and evaluate accurate AI models.",
    iconType: "brain",
    featured: true,
    subCategories: [
      {
        id: "ai-ml-data",
        title: "AI / ML",
        countLabel: "8 services within Data for AI",
        tagline: "End to end data collection, annotation, augmentation and governance for robust AI models.",
        iconType: "brain",
        services: [
          "Data Collection",
          "Data Annotation",
          "Data Quality",
          "Training Data Preparation",
          "Model Evaluation",
          "Data Augmentation",
          "Production Monitoring & Feedback",
          "Responsible AI & Data Governance",
        ],
      },
      {
        id: "nlp",
        title: "NLP",
        countLabel: "9 services within Data for AI",
        tagline: "High precision natural language understanding, entity extraction, sentiment and transcription.",
        iconType: "code",
        services: [
          "Text Annotation",
          "Text Classification",
          "Video Transcription",
          "Relation Extraction",
          "Named Entity Recognition",
          "Chatbot Training",
          "Sentiment Analysis",
          "Feature Classification",
          "Intent Classification",
        ],
      },
      {
        id: "genai",
        title: "GenAI",
        countLabel: "6 services within Data for AI",
        tagline: "Generative AI data services that help businesses build, test, and improve reliable AI applications.",
        iconType: "zap",
        services: [
          "RLHF",
          "Stress Testing AI Models",
          "Reliable Generative AI Training Data",
          "Data Labelling for Large Language Models",
          "Prompt & Response Generation",
          "Generative AI Research & Testing",
        ],
      },
      {
        id: "computer-vision",
        title: "Computer Vision",
        countLabel: "8 services within Data for AI",
        tagline: "AI-powered vision solutions that help machines understand images, videos, 3D data, and real-world environments.",
        iconType: "shield",
        services: [
          "Image Annotation",
          "Video Annotation",
          "Types of Image Annotation",
          "Types of Video Annotation",
          "3D Point Cloud Annotation",
          "AI Assisted Data Labeling",
          "Machine Learning Model Validation",
          "Time Series Data Labeling",
        ],
      },
      {
        id: "usecases-ai",
        title: "Enterprise Use Cases",
        countLabel: "4 services within Data for AI",
        tagline: "Industry proven dataset pipelines deployed across healthcare, vision, and enterprise agents.",
        iconType: "zap",
        services: [
          "Autonomous Vision & Robotics Datasets",
          "Healthcare & Clinical Extraction",
          "Conversational AI & Enterprise Copilots",
          "Financial Sentiment & Document OCR",
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Data Science & Intelligence",
    badge: "Actionable Intelligence",
    tagline: "Analytics, machine learning and BI that turn complex data into confident decisions and data driven decision making.",
    summary: "Analytics, machine learning and BI that turn complex data into confident decisions.",
    iconType: "chart",
    subCategories: [
      {
        id: "data-analytics",
        title: "Data Analytics",
        countLabel: "7 services within Data Science & Intelligence",
        tagline: "Turn business data into meaningful insights that help identify trends, solve problems, and support better decisions.",
        iconType: "chart",
        services: [
          "Descriptive Analytics",
          "Diagnostic Analytics",
          "Exploratory Data Analysis",
          "Statistical Analysis",
          "Trend Analysis",
          "Customer Analysis",
          "Operational Analytics",
        ],
      },
      {
        id: "ds-bi",
        title: "Business Intelligence",
        countLabel: "6 services within Data Science & Intelligence",
        tagline: "Transform business data into clear dashboards, reports, and insights for smarter and faster decision-making.",
        iconType: "code",
        services: [
          "Executive Dashboards",
          "Automated Reporting",
          "Self Service BI",
          "Data Warehousing",
          "Real Time Monitoring",
          "Governance & Security",
        ],
      },
      {
        id: "decision-intel",
        title: "Decision Intelligence",
        countLabel: "6 services within Data Science & Intelligence",
        tagline: "Use data, AI, and business insights to evaluate options, predict outcomes, and make better decisions.",
        iconType: "zap",
        services: [
          "Decision Modeling",
          "Scenario Analysis",
          "What if Analysis",
          "Prescriptive Analytics",
          "Optimization",
          "Recommendation Engines",
        ],
      },
      {
        id: "data-vis",
        title: "Data Visualization & Storytelling",
        countLabel: "7 services within Data Science & Intelligence",
        tagline: "Turn complex data into clear, interactive visuals that make insights easier to understand and act on.",
        iconType: "shield",
        services: [
          "Interactive Dashboards",
          "Executive Dashboards",
          "KPI Visualization",
          "Charts & Reports",
          "Trend Visualization",
          "Geographic Visualization",
          "Data Storytelling",
        ],
      },
      {
        id: "ds-advanced",
        title: "Data Science & Advanced Analytics",
        countLabel: "7 services within Data Science & Intelligence",
        tagline: "Use advanced analytics and machine learning to predict outcomes, identify patterns, and solve complex business problems.",
        iconType: "brain",
        services: [
          "Machine Learning",
          "Predictive Modeling",
          "Regression Analysis",
          "Classification",
          "Clustering",
          "Forecasting",
          "Anomaly Detection",
        ],
      },
      {
        id: "usecases-ds",
        title: "Enterprise Use Cases",
        countLabel: "4 services within Data Science & Intelligence",
        tagline: "Strategic analytics frameworks delivering revenue acceleration and predictive intelligence.",
        iconType: "zap",
        services: [
          "Customer Lifetime Value & Churn Prediction",
          "Demand Forecasting & Supply Chain ML",
          "Revenue Attribution & Scenario Simulation",
          "Operational Bottleneck & Real Time Alerts",
        ],
      },
    ],
  },
];

const serviceMetaMap: Record<string, { desc: string; icon: any }> = {
  // Application Development
  "Databases & Data Models": { desc: "MySQL, PostgreSQL & NoSQL databases for secure and organized data management.", icon: Database },
  "APIs & Data Services": { desc: "REST APIs, GraphQL & microservices for smooth application connectivity.", icon: Code2 },
  "Event Streaming": { desc: "Kafka & real-time data pipelines for fast and continuous data processing.", icon: Zap },
  "Application Logs & Monitoring": { desc: "Application logging, system monitoring & alerts for better performance and reliability.", icon: Activity },
  "Performance & Scalability": { desc: "Caching, indexing & scalable architecture for faster applications as business grows.", icon: Cpu },

  // AI / ML (Eng)
  "Data Collection": { desc: "Collect and organize text, images, video, and other data for AI projects.", icon: Database },
  "Data Cleaning": { desc: "Remove errors, duplicates and unwanted data to improve data quality.", icon: CheckCircle2 },
  "Feature Engineering": { desc: "Transform raw data into useful features that help AI models make better predictions.", icon: Cpu },
  "Training Datasets & Versioning": { desc: "Create, manage and track datasets used for training AI models.", icon: Layers },
  "Model Deployment Pipelines": { desc: "Automate model testing and deployment for faster and reliable AI applications.", icon: Zap },
  "Data Quality": { desc: "Check, validate, and improve data accuracy before model training.", icon: ShieldCheck },

  // BI (Eng)
  "ELT / ETL": { desc: "Collect and transform data from multiple sources for analysis.", icon: Activity },
  "Data Warehouse & Data Lake": { desc: "Store and manage large business datasets in one place.", icon: Database },
  "Data Modeling": { desc: "Organize data into structured models for accurate reporting.", icon: Layers },
  "Data Freshness & Streaming": { desc: "Deliver up-to-date data for real-time business insights.", icon: Zap },
  "Semantic Layer & Data Marts": { desc: "Create trusted business metrics and focused data for teams.", icon: BarChart3 },

  // Data for AI - AI/ML
  "Data Annotation": { desc: "Label data accurately to help AI models learn and recognize patterns.", icon: CheckCircle2 },
  "Training Data Preparation": { desc: "Prepare and organize high-quality datasets for effective model training.", icon: Cpu },
  "Model Evaluation": { desc: "Test AI models for accuracy, reliability, and real-world performance.", icon: Activity },
  "Data Augmentation": { desc: "Create variations of existing data to improve model learning and performance.", icon: Sparkles },
  "Production Monitoring & Feedback": { desc: "Monitor deployed models and use feedback to improve results.", icon: Eye },
  "Responsible AI & Data Governance": { desc: "Protect sensitive data and ensure secure, compliant, and responsible AI usage.", icon: ShieldCheck },

  // NLP
  "Text Annotation": { desc: "Label words, sentences, and documents to help AI understand text.", icon: MessageSquareCode },
  "Text Classification": { desc: "Categorize text into meaningful groups for faster analysis and automation.", icon: Layers },
  "Video Transcription": { desc: "Convert spoken audio from videos into accurate, searchable text.", icon: Activity },
  "Relation Extraction": { desc: "Identify relationships between people, organizations, products, and other entities.", icon: Binary },
  "Named Entity Recognition": { desc: "Identify names, locations, organizations, dates, and other key information from text.", icon: CheckCircle2 },
  "Chatbot Training": { desc: "Prepare conversation data to build smarter and more responsive chatbots.", icon: MessageSquareCode },
  "Sentiment Analysis": { desc: "Analyze text to understand customer opinions, emotions, and feedback.", icon: Sparkles },
  "Feature Classification": { desc: "Identify and classify important information based on specific business requirements.", icon: Cpu },
  "Intent Classification": { desc: "Understand what users are trying to ask or achieve from their messages.", icon: Zap },

  // GenAI
  "RLHF": { desc: "Use human feedback to improve AI responses and make models more useful.", icon: Sparkles },
  "Stress Testing AI Models": { desc: "Test AI models against difficult, unexpected, and unsafe inputs.", icon: ShieldCheck },
  "Stress Testing AI Model": { desc: "Test AI models against difficult, unexpected, and unsafe inputs.", icon: ShieldCheck },
  "Reliable Generative AI Training Data": { desc: "Prepare high-quality data for training and fine-tuning GenAI models.", icon: Database },
  "Data Labelling for Large Language Models": { desc: "Label conversations, instructions, and responses to improve LLM performance.", icon: Brain },
  "Prompt & Response Generation": { desc: "Create diverse prompts and responses for better AI training and evaluation.", icon: MessageSquareCode },
  "Prompt and Response Generation": { desc: "Create diverse prompts and responses for better AI training and evaluation.", icon: MessageSquareCode },
  "Generative AI Research & Testing": { desc: "Create test datasets and synthetic content to evaluate GenAI systems.", icon: Cpu },
  "Generative AI Driven Research Ops": { desc: "Create test datasets and synthetic content to evaluate GenAI systems.", icon: Cpu },

  // Computer Vision
  "Image Annotation": { desc: "Label objects, shapes, and key points in images for AI model training.", icon: Eye },
  "Video Annotation": { desc: "Track objects and actions across video frames for better AI understanding.", icon: Activity },
  "Types of Image Annotation": { desc: "Use bounding boxes, polygons, keypoints, and segmentation based on project needs.", icon: Layers },
  "Types of Video Annotation": { desc: "Label objects, activities, movements, and events across video frames.", icon: Activity },
  "3D Point Cloud Annotation": { desc: "Label objects in LiDAR and 3D data for applications like autonomous systems.", icon: Cpu },
  "AI Assisted Data Labeling": { desc: "Use AI-powered pre-labeling to speed up annotation while maintaining quality.", icon: Sparkles },
  "Machine Learning Model Validation": { desc: "Test model predictions for accuracy and identify incorrect results.", icon: CheckCircle2 },
  "Time Series Data Labeling": { desc: "Label patterns, trends, and unusual events in sensor and time-based data.", icon: LineChart },

  // Enterprise Use Cases
  "Real Time Fraud & Anomaly Ingestion": { desc: "Sub-second transaction stream anomaly identification.", icon: ShieldCheck },
  "High Throughput Stream Ingestion": { desc: "Millions of events per second with zero-loss durability.", icon: Zap },
  "IoT & Telemetry Scalable Storage": { desc: "Time-series compression & ultra-fast querying at scale.", icon: Database },
  "Multi Cloud Lakehouse & Data Marts": { desc: "Zero-copy data sharing across AWS, Azure and GCP.", icon: Layers },
  "Autonomous Vision & Robotics Datasets": { desc: "Edge-case driving & robotics multimodal perception data.", icon: Eye },
  "Healthcare & Clinical Extraction": { desc: "HIPAA-compliant medical image & EHR clinical data structuring.", icon: ShieldCheck },
  "Conversational AI & Enterprise Copilots": { desc: "Domain-specific grounding for customer & internal copilots.", icon: MessageSquareCode },
  "Financial Sentiment & Document OCR": { desc: "SEC filings, invoices & market report automated indexing.", icon: BarChart3 },

  // Data Science & Analytics
  "Descriptive Analytics": { desc: "Understand past performance through reports, summaries, and key business metrics.", icon: BarChart3 },
  "Diagnostic Analytics": { desc: "Find the reasons behind business changes, issues, and unexpected results.", icon: Activity },
  "Exploratory Data Analysis": { desc: "Explore data to discover patterns, relationships, and useful insights.", icon: LineChart },
  "Statistical Analysis": { desc: "Apply statistical methods to understand data and support reliable decisions.", icon: Cpu },
  "Trend Analysis": { desc: "Identify changing patterns and business trends over time.", icon: LineChart },
  "Customer Analysis": { desc: "Analyze customer behavior, preferences, and engagement to improve business outcomes.", icon: ShieldCheck },
  "Operational Analytics": { desc: "Use real-time and historical data to improve daily operations and business performance.", icon: Activity },
  "Trend & Cohort Analysis": { desc: "Customer lifecycle cohorts, churn tracking & growth trajectories.", icon: Layers },
  "Executive Dashboards": { desc: "Visualize key business metrics and KPIs in one easy-to-understand dashboard.", icon: BarChart3 },
  "Automated Reporting": { desc: "Generate accurate business reports automatically and save time on manual reporting.", icon: LineChart },
  "Self Service BI": { desc: "Help teams explore data and create reports without depending on technical teams.", icon: Cpu },
  "Self-Service BI": { desc: "Help teams explore data and create reports without depending on technical teams.", icon: Cpu },
  "Data Warehousing": { desc: "Centralize and organize business data for reliable reporting and analysis.", icon: Database },
  "Real Time Monitoring": { desc: "Track important business metrics and changes as they happen.", icon: Activity },
  "Real-Time Monitoring": { desc: "Track important business metrics and changes as they happen.", icon: Activity },
  "Governance & Security": { desc: "Keep business data secure with controlled access, data policies, and monitoring.", icon: ShieldCheck },
  "BI Reporting & Metrics": { desc: "Automated scheduled reporting and enterprise metric frameworks.", icon: LineChart },
  "Self-Service BI Enablement": { desc: "Empower non-technical teams with governed semantic models.", icon: Cpu },
  "Data Warehousing Integration": { desc: "Direct BI connectors for Snowflake, BigQuery & Databricks.", icon: Database },
  "Decision Modeling": { desc: "Build data-driven models to compare options and support business decisions.", icon: Brain },
  "Scenario Analysis": { desc: "Evaluate different situations and understand their possible business outcomes.", icon: LineChart },
  "What if Analysis": { desc: "Test “what if” situations to see how changes may affect business results.", icon: Sparkles },
  "What-If Analysis": { desc: "Test “what if” situations to see how changes may affect business results.", icon: Sparkles },
  "Prescriptive Analytics": { desc: "Identify the best actions based on data, business goals, and expected outcomes.", icon: Activity },
  "Optimization": { desc: "Find the most efficient solutions while balancing cost, time, and business objectives.", icon: Cpu },
  "Recommendation Engines": { desc: "Deliver personalized recommendations based on data, behavior, and business needs.", icon: Zap },
  "Simulation & What-If Analysis": { desc: "Monte Carlo simulations & dynamic scenario stress-testing.", icon: Sparkles },
  "Scenario Planning": { desc: "Market shift forecasts and strategic revenue sensitivity models.", icon: LineChart },
  "Optimization Models": { desc: "Linear programming for supply chain, logistics & cost reduction.", icon: Cpu },
  "Interactive Dashboards": { desc: "Explore business data through dynamic dashboards with filters and real-time updates.", icon: BarChart3 },
  "KPI Visualization": { desc: "Track important performance indicators through clear and meaningful visuals.", icon: LineChart },
  "Charts & Reports": { desc: "Convert data into easy-to-read charts and reports for better understanding.", icon: BarChart3 },
  "Trend Visualization": { desc: "Visualize changes and patterns over time to identify important trends.", icon: LineChart },
  "Geographic Visualization": { desc: "Display location-based data using maps and interactive geographic visuals.", icon: Layers },
  "Data Storytelling": { desc: "Present data as a clear story that highlights key insights and business outcomes.", icon: MessageSquareCode },
  "Executive KPIs & Scorecards": { desc: "Unified scorecards tracking strategic company performance.", icon: ShieldCheck },
  "Geospatial & Complex Charts": { desc: "Map overlays, heatmaps & multi-dimensional spatial plots.", icon: Layers },
  "Machine Learning": { desc: "Build AI models that learn from data and improve business processes.", icon: Brain },
  "Predictive Modeling": { desc: "Use historical data to predict future outcomes and business trends.", icon: LineChart },
  "Regression Analysis": { desc: "Understand relationships between data points and predict numerical outcomes.", icon: Activity },
  "Classification": { desc: "Categorize data into meaningful groups for automated decision-making.", icon: Binary },
  "Clustering": { desc: "Group similar data points to discover hidden patterns and customer segments.", icon: Layers },
  "Forecasting": { desc: "Predict future demand, sales, or trends using historical and real-time data.", icon: LineChart },
  "Anomaly Detection": { desc: "Identify unusual patterns, errors, or potential risks in business data.", icon: ShieldCheck },
  "Predictive Forecasting": { desc: "ARIMA & ML-based demand, revenue and inventory forecasting.", icon: LineChart },
  "Propensity Scoring": { desc: "Predictive customer conversion, upsell & churn probability.", icon: Sparkles },
  "Classification Models": { desc: "Multi-class categorization & risk classification algorithms.", icon: Binary },
  "Customer Lifetime Value (CLV)": { desc: "Longitudinal value modeling and acquisition payback tracking.", icon: BarChart3 },
  "Supply Chain Optimization": { desc: "Inventory replenishment and fulfillment routing intelligence.", icon: Layers },
  "Marketing Attribution": { desc: "Multi-touch attribution models calculating true channel ROI.", icon: Activity },
  "Predictive Maintenance Alerts": { desc: "IoT failure warning alerts preventing costly equipment downtime.", icon: Zap },
};

export default function InteractiveEcosystem() {
  const [selectedCoreId, setSelectedCoreId] = useState<"engineering" | "ai" | "analytics">("engineering");

  const activeCore = coreOfferingsData.find((c) => c.id === selectedCoreId) || coreOfferingsData[0];
  const [activeSubId, setActiveSubId] = useState<string>("app-dev");

  const handleSelectCore = (coreId: "engineering" | "ai" | "analytics") => {
    setSelectedCoreId(coreId);
    const newCore = coreOfferingsData.find((c) => c.id === coreId);
    if (newCore && newCore.subCategories.length > 0) {
      setActiveSubId(newCore.subCategories[0].id);
    }
  };

  const activeSub =
    activeCore.subCategories.find((s) => s.id === activeSubId) || activeCore.subCategories[0];

  return (
    <section id="services" className="py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-3 reveal-heading">
            Our 3 Core <span className="gradient-text">Data Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed reveal-on-scroll delay-100">
            Engineered data infrastructure, high-precision AI dataset curation, and advanced decision intelligence built for modern enterprises.
          </p>
        </div>

        {/* Top 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {coreOfferingsData.map((core, cIdx) => {
            const isSelected = selectedCoreId === core.id;
            const delayClass = cIdx === 0 ? "delay-100" : cIdx === 1 ? "delay-200" : "delay-300";
            return (
              <div
                key={core.id}
                onClick={() => handleSelectCore(core.id)}
                className={`reveal-card ${delayClass} rounded-[1.75rem] p-7 md:p-8 flex flex-col transition-all duration-300 cursor-pointer relative border text-left group ${
                  isSelected
                    ? "bg-white border-[#2ec4b6] shadow-xl shadow-[#1f6fb2]/15 -translate-y-1.5 ring-2 ring-[#2ec4b6]/30"
                    : "bg-white/95 border-slate-200/90 shadow-xs hover:border-[#2ec4b6] hover:shadow-xl hover:shadow-[#1f6fb2]/12 hover:-translate-y-1.5"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                    isSelected || core.featured
                      ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-md shadow-[#1f6fb2]/30"
                      : "bg-[#1f6fb2]/10 border border-[#2ec4b6]/30 text-[#1f6fb2]"
                  }`}
                >
                  {core.iconType === "database" && <Database className="w-6 h-6" />}
                  {core.iconType === "brain" && <Brain className="w-6 h-6" />}
                  {core.iconType === "chart" && <BarChart3 className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#123c64] mb-2.5 tracking-tight">
                  {core.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {core.summary}
                </p>

                {/* Quick Highlights - All Subcategories */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-100 mt-auto">
                  {core.subCategories.map((sub, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-[14.5px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2ec4b6] shrink-0" />
                      <span className="truncate">{sub.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Layout with Rich Color Accents & Zero Gaps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          
          {/* Left Column: Category Domain List Sidebar */}
          <div className="reveal-left delay-150 w-full lg:w-80 shrink-0 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-[2rem] p-4 sm:p-5 shadow-xs flex flex-col justify-start gap-2.5">
            <div className="px-3 pt-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
              <span>Domain Tracks</span>
            </div>

            {activeCore.subCategories.map((sub) => {
              const isCur = activeSub.id === sub.id;
              const SubIcon = (() => {
                if (sub.id === "app-dev") return Code2;
                if (sub.id.includes("ai-ml")) return Brain;
                if (sub.id === "bi-eng" || sub.id === "data-analytics") return BarChart3;
                if (sub.id === "nlp") return MessageSquareCode;
                if (sub.id === "genai") return Sparkles;
                if (sub.id === "computer-vision") return Eye;
                if (sub.id === "ds-bi") return LineChart;
                if (sub.id === "decision-intel") return Cpu;
                if (sub.id === "data-vis") return Activity;
                if (sub.id === "ds-advanced") return Binary;
                return Layers;
              })();

              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubId(sub.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isCur
                      ? "bg-gradient-to-r from-[#2ec4b6]/15 via-[#1f6fb2]/8 to-white border border-[#2ec4b6]/60 shadow-xs ring-1 ring-[#2ec4b6]/30"
                      : "bg-transparent border border-transparent hover:bg-slate-50/90 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isCur
                          ? "bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] text-white shadow-xs"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#2ec4b6]/10 group-hover:text-[#1f6fb2]"
                      }`}
                    >
                      <SubIcon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-sm sm:text-[14.5px] transition-colors ${
                        isCur ? "font-bold text-[#1f6fb2]" : "font-semibold text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {sub.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detail Canvas with Rich Enterprise Service Cards */}
          <div className="reveal-right delay-250 flex-1 w-full bg-white border border-slate-200/90 rounded-[2rem] p-7 sm:p-8 md:p-9 shadow-xs relative overflow-hidden flex flex-col justify-start">
            
            {/* Subtle Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#2ec4b6]/15 via-[#1f6fb2]/8 to-transparent blur-3xl pointer-events-none" />

            {/* Content Area of the Canvas */}
            <div className="z-10 w-full">
              
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#123c64] tracking-tight mb-2.5">
                {activeSub.title}
              </h3>

              {/* Tagline Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal max-w-3xl">
                {activeSub.tagline}
              </p>

              {/* Rich 2-Column Services Cards Grid (linear-gradient(135deg, #1f6fb2, #2ec4b6) styling) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSub.services.map((srv, idx) => {
                  const meta = serviceMetaMap[srv] || {
                    desc: "Enterprise data & AI service engineered for production scale.",
                    icon: CheckCircle2,
                  };
                  const ServiceIcon = meta.icon;

                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-4.5 rounded-2xl bg-[#f8fafc]/60 hover:bg-white border border-slate-200/80 hover:border-[#2ec4b6] shadow-2xs hover:shadow-md hover:shadow-[#1f6fb2]/10 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 group cursor-default"
                    >
                      {/* Icon Container with linear-gradient(135deg, #1f6fb2, #2ec4b6) on hover */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1f6fb2]/10 to-[#2ec4b6]/15 border border-[#2ec4b6]/30 flex items-center justify-center text-[#1f6fb2] shrink-0 group-hover:bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-2xs">
                        <ServiceIcon className="w-5 h-5" />
                      </div>

                      {/* Title & Description */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-800 group-hover:text-[#1f6fb2] transition-colors mb-1 leading-snug">
                          {srv}
                        </h4>
                        <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-normal">
                          {meta.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
