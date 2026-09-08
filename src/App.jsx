import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaLayerGroup,
  FaBookOpen
} from "react-icons/fa6";
import profileImg from "./assets/main_image.png";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedExp, setExpandedExp] = useState({ kodo: false, quinlan: false, kukhareva: false });
  const [expandedProj, setExpandedProj] = useState({
    "10x": false,
    pedview: false,
    air: false,
    dklearn: false,
    disparities: false
  });

  const email = "ldkun2001@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExp = (key) => {
    setExpandedExp((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleProj = (key) => {
    setExpandedProj((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filterTabs = [
    { id: "all", label: "All Work" },
    { id: "swe", label: "Software Engineering" },
    { id: "de", label: "Data Engineering" },
    { id: "mle", label: "ML Engineering" }
  ];

  const experiences = [
    {
      id: "kodo",
      company: "Kodo",
      role: "Software Engineering Intern",
      period: "May 2026 – Jul 2026",
      categories: ["swe", "de"],
      tag: "SWE",
      summary:
        "Developed the WooCommerce merchant integration and backend services on Supabase, handling order ingestion, credential management, and reliable transaction attribution.",
      tech: ["TypeScript", "PostgreSQL", "Supabase", "PHP", "Docker", "Row Level Security"],
      bullets: [
        "Built a merchant-facing WooCommerce plugin and supporting backend API endpoints to track creator referral conversions and ingest order events.",
        "Implemented an asynchronous outbox pattern using WooCommerce's Action Scheduler to retry failed order webhooks with exponential backoff and UUID deduplication.",
        "Designed secure merchant onboarding workflows with hashed API keys, HMAC-verified webhooks for coupon sync, and PostgreSQL Row-Level Security for tenant data isolation.",
        "Created an internal Python CLI tool to generate scoped test transaction fixtures, allowing the team to test attribution and dashboard logic locally without modifying production data."
      ]
    },
    {
      id: "quinlan",
      company: "Quinlan Lab",
      role: "Data Engineering Intern",
      period: "Oct 2025 – Apr 2026",
      categories: ["de", "swe"],
      tag: "DE",
      summary:
        "Developed Pedview, an open-source CLI and browser-based tool for genomic pedigree visualization and variant interpretation, alongside Snakemake sequence processing pipelines.",
      tech: ["Python", "Snakemake", "High-Performance Computing", "Docker", "JavaScript"],
      bullets: [
        "Implemented Pedview as a dependency-free Python CLI and standalone HTML interface to ensure compatibility with restricted, offline clinical laboratory systems.",
        "Engineered a layered graph layout algorithm using barycenter ordering and edge-routing to render complex multi-generational family structures clearly.",
        "Built genotype parsers and chromosome-painting visualizations across 22 autosomes to identify parent-of-origin allele transmission from raw SNP data.",
        "Integrated polygenic risk scoring (PGS) against standard catalog datasets, automating previously manual calculations and variant filtering steps.",
        "Built Snakemake automated quality-control and variant-calling workflows for multi-tissue RNA-seq datasets on high-performance computing clusters."
      ]
    },
    {
      id: "kukhareva",
      company: "Kukhareva Lab, University of Utah Health",
      role: "Undergraduate Researcher",
      period: "Feb 2025 – Apr 2026",
      categories: ["mle", "de"],
      tag: "MLE",
      summary:
        "Researched longitudinal deep learning models on national EHR datasets and engineered high-throughput data loaders for GPU training. Co-authored published diabetes study in Diabetes, Obesity and Metabolism.",
      tech: ["Python", "PyTorch", "Transformers", "Polars", "PostgreSQL", "CUDA", "HPC / SLURM"],
      bullets: [
        "Developed DREAM, a transformer model predicting next HbA1c values from longitudinal EHR visit histories, medication combinations, and lab values, improving prediction accuracy over clinical baselines.",
        "Built memory-efficient data loaders using Polars and disk caching over 600+ GB of sharded Parquet EHR data, significantly improving GPU throughput during training.",
        "Implemented unsupervised longitudinal clustering across 10,500+ Type 2 Diabetes patients to analyze prescribing patterns of GLP-1 receptor agonists and other therapies.",
        "Co-authored research findings published in Diabetes, Obesity and Metabolism (Wiley, 2026)."
      ]
    }
  ];

  const projects = [
    {
      id: "10x",
      title: "10X",
      tagline: "Concurrent Multi-Agent Equity Research Pipeline",
      categories: ["swe", "mle"],
      tag: "SWE / MLE",
      tech: "Python · asyncio · OpenRouter · PostgreSQL",
      summary:
        "A concurrent research pipeline orchestrating specialist LLM agents across 14 financial and macroeconomic APIs (SEC EDGAR, FRED) with deterministic calculations and automated cost tracking.",
      bullets: [
        "Orchestrates concurrent specialist analyst pipelines with bounded critique and red-team review stages.",
        "Maintains strict boundaries separating deterministic financial calculation (Python) from LLM qualitative interpretation.",
        "Includes content-addressed response caching and an append-only token spending ledger to manage execution costs.",
        "Backed by 588 automated unit and integration tests."
      ],
      github: "https://github.com/DKunLee/10X"
    },
    {
      id: "pedview",
      title: "Pedview",
      tagline: "Genomics Pedigree & Genotype Visualization Engine",
      categories: ["swe", "de"],
      tag: "SWE / DE",
      tech: "Python · Genomics · JavaScript · SVG",
      summary:
        "An open-source Python tool and interactive visualization engine for clinical pedigree structures, parent-of-origin chromosome painting, and polygenic risk scoring handling ~677K SNPs per sample.",
      bullets: [
        "Interactive multi-generational pedigree layout engine using layered graph algorithms to untangle complex family structures.",
        "Parses AncestryDNA raw genotypes and paints autosomes across 17,600 bins to classify parent-of-origin allele dominance.",
        "Evaluated polygenic risk scoring (PGS) against catalog files with up to 34,000 variant rows.",
        "Designed to run self-contained without third-party package dependencies in locked-down laboratory environments."
      ],
      github: "https://github.com/DKunLee/Pedview"
    },
    {
      id: "air",
      title: "Air Quality Pipeline",
      tagline: "Cloud ELT & Geospatial Analytics Dashboard",
      categories: ["de"],
      tag: "DE",
      tech: "DuckDB · AWS S3 · SQL · Plotly Dash",
      summary:
        "An ELT pipeline querying partitioned OpenAQ sensor archives directly from Amazon S3 into DuckDB, modeling observations into analytical SQL views for an interactive Dash web application.",
      bullets: [
        "Queries Hive-partitioned S3 sensor archives directly via DuckDB httpfs, handling missing partitions gracefully.",
        "Two-layer warehouse schema (raw landing tables vs presentation views) with idempotent SQL deduplication.",
        "Interactive Plotly Dash web dashboard displaying geospatial sensor distributions and pollutant time-series."
      ],
      github: "https://github.com/DKunLee/Air_Quality_Pipeline"
    },
    {
      id: "dklearn",
      title: "dklearn",
      tagline: "Educational Machine Learning Library from Scratch",
      categories: ["mle"],
      tag: "MLE",
      tech: "Python · NumPy · joblib",
      summary:
        "An educational machine learning library implementing classical classifiers (Linear SVM, AdaBoost, Decision Trees, Logistic Regression) and cross-validation from scratch in NumPy.",
      bullets: [
        "Full scikit-learn-compatible fit/predict estimator contract with input validation and parameter cloning.",
        "Stochastic subgradient optimization for Linear SVM; L2-regularized logistic regression with learning rate decay.",
        "Parallelized cross-validation and hyperparameter grid search using joblib.",
        "Benchmarked side-by-side with scikit-learn in executed comparison notebooks."
      ],
      github: "https://github.com/DKunLee/MachineLearning"
    },
    {
      id: "disparities",
      title: "Quantifying Prescribing Disparities",
      tagline: "Clinical Unsupervised Learning Pipeline",
      categories: ["mle", "de"],
      tag: "MLE / DE",
      tech: "Python · pandas · SciPy · EHR Analytics",
      summary:
        "An unsupervised clinical data pipeline converting longitudinal EHR prescription records into temporal feature matrices to evaluate real-world medication patterns across 10,500+ patients.",
      bullets: [
        "Aggregated multi-year patient records into half-year longitudinal feature matrices spanning 2019 through 2024.",
        "Applied two-stage hybrid clustering (Ward-linkage + cosine medoids) to group patient medication trajectories.",
        "Deliberately excluded demographics from clustering inputs to evaluate post-hoc prescribing disparities cleanly.",
        "Contributed to published paper in Diabetes, Obesity and Metabolism (Wiley, 2026)."
      ],
      github: "https://github.com/DKunLee/Quantifying_Disparities",
      paperUrl: "https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.71013"
    }
  ];

  const filteredExperiences = experiences.filter(
    (exp) => activeFilter === "all" || exp.categories.includes(activeFilter)
  );

  const filteredProjects = projects.filter(
    (proj) => activeFilter === "all" || proj.categories.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#d4d4d8] selection:bg-zinc-800 selection:text-white">
      <main className="max-w-4xl mx-auto px-6 py-14 sm:py-20">
        {/* Header / Intro */}
        <header className="mb-12">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Dongkun (DK) Lee
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 mt-1">
                M.S. in Computer Science @ University of Maryland (UMD)
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                B.S. in Data Science @ University of Utah (Jan 2023 – May 2026)
              </p>
            </div>

            {/* Profile Photo in Full Color */}
            <div className="relative shrink-0">
              <img
                src={profileImg}
                alt="Dongkun Lee"
                className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-zinc-700 shadow-xl"
              />
              <span
                className="absolute bottom-1.5 right-1.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-emerald-500 border-2 border-[#0c0d0e]"
                title="Active Student & Researcher"
              />
            </div>
          </div>

          <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed mb-5">
            I am a Master's student in Computer Science at the{" "}
            <span className="text-white font-medium">University of Maryland, College Park</span> (Aug 2026 – May 2028), having graduated with a B.S. in Data Science from the{" "}
            <span className="text-white font-medium">University of Utah</span> (Jan 2023 – May 2026, GPA 3.82). My work centers on data systems, autonomous multi-LLM pipelines, and deep learning for biomedical applications.
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-850">
            <a
              href="https://github.com/DKunLee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
            >
              github.com/DKunLee
            </a>
            <a
              href="https://www.linkedin.com/in/dongkun-lee-4607a2228/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
            >
              linkedin/dongkun-lee
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer bg-zinc-900/60 hover:bg-zinc-800/80 px-2 py-1 rounded border border-zinc-800"
              title="Click to copy email"
            >
              <span>{email}</span>
              {copied ? (
                <FaCheck className="w-3 h-3 text-emerald-400" />
              ) : (
                <FaCopy className="w-3 h-3 text-zinc-500" />
              )}
            </button>
          </div>
        </header>

        {/* Interactive Topic Filter */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
          <span className="text-zinc-500 mr-1 text-[11px] uppercase tracking-wider">Filter:</span>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer border ${
                activeFilter === tab.id
                  ? "bg-zinc-200 text-zinc-950 font-medium border-zinc-200"
                  : "bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:text-white hover:border-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Education */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <FaGraduationCap className="text-blue-400 w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {/* UMD MSCS */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-medium text-white">
                  University of Maryland, College Park (UMD)
                </h3>
                <span className="text-xs font-mono text-zinc-400 shrink-0">
                  Aug 2026 – May 2028
                </span>
              </div>
              <p className="text-sm text-zinc-200 mt-0.5">
                Master of Science in Computer Science (MSCS)
              </p>
              <p className="text-xs font-mono text-blue-400 mt-1">
                Current Graduate Program
              </p>
              <div className="mt-3 pt-2 border-t border-zinc-850 text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 font-medium">Selected Coursework:</span> Natural Language Processing, Advanced Computer Architectures, Agentic AI & Differentiable Programming.
              </div>
            </div>

            {/* University of Utah B.S. */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-medium text-white">
                  University of Utah
                </h3>
                <span className="text-xs font-mono text-zinc-400 shrink-0">
                  Jan 2023 – May 2026
                </span>
              </div>
              <p className="text-sm text-zinc-200 mt-0.5">
                Bachelor of Science in Data Science · <span className="text-emerald-400 font-mono text-xs">GPA: 3.82 / 4.0</span>
              </p>
              <p className="text-xs font-mono text-zinc-400 mt-1.5">
                Honors: Dean's List, James Waters Research Scholarship Recipient, Data Science Major Representative
              </p>
              <div className="mt-3 pt-2 border-t border-zinc-850 text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 font-medium">Selected Coursework:</span> Algorithms & Data Structures, Machine Learning, Reinforcement Learning, Database Systems, Computer Architecture, Applied Statistics, Linear Algebra, Discrete Mathematics, Data Mining, Data Visualization.
              </div>
            </div>
          </div>
        </section>

        {/* 2. Experience */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-blue-400 w-3.5 h-3.5" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                Experience
              </h2>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Click any role to toggle details
            </span>
          </div>

          <div className="space-y-6">
            {filteredExperiences.map((exp) => {
              const isExpanded = expandedExp[exp.id];
              return (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                >
                  <div onClick={() => toggleExp(exp.id)} className="cursor-pointer select-none">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-base font-medium text-white flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-zinc-400 font-normal">· {exp.role}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                          {exp.tag}
                        </span>
                      </h3>
                      <span className="text-xs font-mono text-zinc-400 shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-300 mt-1.5 leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-850/60 text-xs font-mono text-zinc-400">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="text-zinc-400">
                            {t}{i < exp.tech.length - 1 ? " ·" : ""}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-[11px] shrink-0 ml-2"
                      >
                        {isExpanded ? (
                          <>
                            <span>Less</span>
                            <FaChevronUp className="w-2.5 h-2.5" />
                          </>
                        ) : (
                          <>
                            <span>Accomplishments</span>
                            <FaChevronDown className="w-2.5 h-2.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable detailed accomplishments */}
                  {isExpanded && (
                    <ul className="mt-3.5 pt-3 border-t border-zinc-800/80 text-sm text-zinc-300 space-y-2 list-disc list-outside pl-4 marker:text-blue-400">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Projects */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaCode className="text-blue-400 w-3.5 h-3.5" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                Projects
              </h2>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Interactive project cards
            </span>
          </div>

          <div className="space-y-6">
            {filteredProjects.map((proj) => {
              const isExpanded = expandedProj[proj.id];
              return (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-base font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        <span>{proj.title}</span>
                        <span className="text-zinc-500 font-normal text-sm">· {proj.tagline}</span>
                        <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-500 group-hover:text-blue-400 transition-colors shrink-0" />
                      </a>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                        {proj.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 shrink-0">
                      {proj.tech}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-850/60 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>

                      {proj.paperUrl && (
                        <>
                          <span className="text-zinc-600">·</span>
                          <a
                            href={proj.paperUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <FaBookOpen className="w-3 h-3" />
                            <span>Read Paper</span>
                          </a>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => toggleProj(proj.id)}
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-[11px] cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Hide Details</span>
                          <FaChevronUp className="w-2.5 h-2.5" />
                        </>
                      ) : (
                        <>
                          <span>View Architecture Highlights</span>
                          <FaChevronDown className="w-2.5 h-2.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expandable Architecture details */}
                  {isExpanded && (
                    <ul className="mt-3.5 pt-3 border-t border-zinc-800/80 text-sm text-zinc-300 space-y-1.5 list-disc list-outside pl-4 marker:text-blue-400">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Skills */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <FaLayerGroup className="text-blue-400 w-3.5 h-3.5" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60">
              <div className="text-zinc-400 uppercase tracking-wider mb-1.5">Languages</div>
              <div className="text-zinc-200">Python, SQL, TypeScript, JavaScript, PHP, R, Java, C#, Bash</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60">
              <div className="text-zinc-400 uppercase tracking-wider mb-1.5">ML & AI Systems</div>
              <div className="text-zinc-200">PyTorch, Transformers, fastai, scikit-learn, Multi-Agent Orchestration, OpenRouter</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60">
              <div className="text-zinc-400 uppercase tracking-wider mb-1.5">Data & Storage</div>
              <div className="text-zinc-200">PostgreSQL, DuckDB, Supabase, MySQL, AWS S3, Polars, pandas, NumPy</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/60">
              <div className="text-zinc-400 uppercase tracking-wider mb-1.5">Tools & Infra</div>
              <div className="text-zinc-200">Docker, Git, HPC / SLURM, CUDA, Next.js, React, Tailwind CSS</div>
            </div>
          </div>
        </section>

        {/* 5. Publications */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <FaBookOpen className="text-blue-400 w-3.5 h-3.5" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
              Publications
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-700 transition-colors">
            <a
              href="https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.71013"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-baseline gap-1.5 text-base font-medium text-white hover:text-blue-400 transition-colors"
            >
              <span>Prescribing Trajectories in Type 2 Diabetes in the United States, 2019–2024</span>
              <FaArrowUpRightFromSquare className="w-3 h-3 text-zinc-500 group-hover:text-blue-400 transition-colors shrink-0" />
            </a>

            <p className="text-xs font-mono text-zinc-400 mt-1">
              <span className="text-zinc-200">Diabetes, Obesity and Metabolism</span> (Wiley, 2026) · DOI: 10.1111/dom.71013
            </p>

            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              Unsupervised clustering of longitudinal EHR medication histories across 10,500+ Type 2 Diabetes patients from the TriNetX network (over 220 health systems) to discover real-world prescribing trajectories and disparities in GLP-1 receptor agonists and other glucose-lowering drugs.
            </p>

            <div className="mt-3 pt-2.5 border-t border-zinc-850/80 flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.71013"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                <span>Read on Wiley Online Library</span>
                <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
              </a>
              <span className="text-zinc-600 hidden sm:inline">·</span>
              <span className="text-zinc-400">Research conducted at Kukhareva Lab, University of Utah</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-zinc-850 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            Contact:{" "}
            <a
              href={`mailto:${email}`}
              className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700"
            >
              {email}
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Dongkun Lee · Salt Lake City & College Park
          </div>
        </footer>
      </main>
    </div>
  );
}
