"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "./hooks/useInView";
import AnimatedButton from "./components/AnimatedButton";

// ----- COLOR + THEME HELPERS -----
const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  black: { text: "text-black", border: "border-black", bg: "bg-black" },
  blue: { text: "text-blue-600", border: "border-blue-600", bg: "bg-blue-600" },
  green: { text: "text-green-600", border: "border-green-600", bg: "bg-green-600" },
  purple: { text: "text-purple-600", border: "border-purple-600", bg: "bg-purple-600" },
  red: { text: "text-red-600", border: "border-red-600", bg: "bg-red-600" },
};

function getTextColor(theme: string, darkMode: boolean) {
  if (!colorMap[theme]) return darkMode ? "text-white" : "text-black";
  return darkMode ? "text-white" : colorMap[theme].text;
}
function getBorderColor(theme: string, darkMode: boolean) {
  if (!colorMap[theme]) return darkMode ? "border-white" : "border-black";
  return darkMode ? "border-white" : colorMap[theme].border;
}
function getBgColor(theme: string, darkMode: boolean) {
  if (!colorMap[theme]) return darkMode ? "bg-gray-800" : "bg-black";
  return darkMode ? "bg-gray-800" : colorMap[theme].bg;
}

// ----- HEADER -----
interface ThemeProps {
  theme: string;
  darkMode: boolean;
}

const Header: React.FC<
  ThemeProps & { setDarkMode: (val: boolean) => void; setTheme: (theme: string) => void }
> = ({ theme, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto flex items-center justify-between py-2 pl-0">
        {/* Logo */}
        <div className="flex items-center pl-2">
          <Link href="/#" className="flex items-center">
            <div className="relative w-24 h-16">
              <Image
                src="/bizguard-high-resolution-logo.png"
                alt="BizGuard AI Logo"
                fill
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'left center'
                }}
                className="scale-110"
                priority
              />
            </div>
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : getTextColor(theme, darkMode)} -ml-1`}>
                BizGuard AI
              </h1>
            </Link>
          </div>

        {/* Right Side: Nav links + Dark Mode Toggle + Join Button */}
        <div className="flex items-center justify-end flex-1 px-4">
          <nav className="hidden lg:flex items-center space-x-8 mr-8">
            {["Home", "Features", "How It Works", "FAQ", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/#" : `/#${item.toLowerCase().replace(/\s/g, "-")}`}
                className={`relative text-base font-medium group ${
                  darkMode ? "text-white" : "text-gray-700"
                } hover:text-orange-500 transition-colors duration-300`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle + Join Button Container */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              </button>
            <AnimatedButton variant="primary">
              Join Waitlist
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-lg px-3 py-2 focus:ring-2 ${
                darkMode ? "text-white ring-white" : "text-gray-900 ring-primary"
              }`}
            >
              <span className="block h-[2px] w-[30px] bg-current"></span>
              <span className="my-[6px] block h-[2px] w-[30px] bg-current"></span>
              <span className="block h-[2px] w-[30px] bg-current"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? "max-h-64" : "max-h-0"
      }`}>
        <nav className={`${darkMode ? "bg-gray-900" : "bg-white"} px-6 py-5 shadow`}>
          <ul className="flex flex-col space-y-4">
            {["Home", "Features", "How It Works", "FAQ", "Contact"].map((item) => (
              <li key={item}>
                    <Link
                  href={item === "Home" ? "/#" : `/#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className={`text-base font-medium relative group ${
                    darkMode ? "text-white" : "text-gray-700"
                  } hover:text-orange-500 transition-colors duration-300`}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
            ))}
            {/* Mobile Dark Mode Toggle */}
            <li className="flex items-center justify-between">
              <span className={`text-base font-medium ${darkMode ? "text-white" : "text-gray-700"}`}>
                Dark Mode
              </span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                {darkMode ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// ----- REUSABLE CARD COMPONENT -----
interface CardProps {
  title: string;
  description: string;
  iconClass: string;
  darkMode: boolean;
}
const StaggeredCard: React.FC<CardProps & { index: number }> = ({ 
  title, 
  description, 
  iconClass, 
  index 
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`
        rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 
        bg-white border border-gray-200 transform
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Image Placeholder */}
      <div className="mb-4">
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
      {/* Icon (via Font Awesome) and Title */}
      <div className="flex items-center space-x-4 mb-4">
        <i className={`${iconClass} text-2xl`}></i>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

// ----- ICONS FOR CARDS USING FONT AWESOME -----
// How It Works / Features
const SetupIconClass = "fas fa-map-marker-alt";
const TrainingIconClass = "fas fa-microphone-alt";
const AskIconClass = "fas fa-question-circle";
const UserIconClass = "fas fa-user";
const SettingsIconClass = "fas fa-cogs";
const ChalkboardIconClass = "fas fa-chalkboard-teacher";
const LightningIconClass = "fas fa-bolt";
const ServerIconClass = "fas fa-server";
const LockIconClass = "fas fa-lock";

// ----- HOW IT WORKS SECTION -----
const HowItWorks: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  return (
    <section id="how-it-works" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
            How BizGuard AI Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <StaggeredCard 
            darkMode={darkMode} 
            title="Setup Stage – Mapping Your Business" 
            description="Start by sharing a complete overview of your organization. In this stage, you Share Key Details:
Your teams, business policies, processes, daily operations, ongoing projects, and your unique chart of accounts.
Build Your Knowledge Tree:
Outline every task and process the AI needs to learn.
Define Expectations:
Set a clear foundation for the AI’s role and responsibilities.
Outcome: A solid, tailored knowledge base that mirrors your exact operations.
" 
            iconClass={SetupIconClass} 
            index={0} 
          />
          <StaggeredCard 
            darkMode={darkMode} 
            title="Training Stage – Interactive Voice Learning & Validation" 
            description="Engage in live training sessions with BizGuard AI:

Interactive Voice Sessions:
Share your screen while explaining tasks (e.g., navigating an accounting application, reviewing documents, accessing files).
Dynamic UI Support:
Upload files, review and approve action items, and track voice chat logs.
Clarification & Reverse KT:
The AI asks clarifying questions to confirm its understanding. You validate each session until the AI fully grasps your workflow.
Outcome: A customized, in-depth understanding of your business processes." 
            iconClass={TrainingIconClass} 
            index={1} 
          />
          <StaggeredCard 
            darkMode={darkMode} 
            title="Ask Stage – Task Assignment & Execution" 
            description="Once training is complete, move to active task execution:
Interactive Task Assignment:
Use voice commands or simple text messages to assign tasks. The AI confirms tasks on a dynamic UI canvas.
Real-Time Operations:
Bookkeeping & Verification: The AI updates your books instantly.
Compliance Monitoring: Receive live compliance updates and alerts for unusual activities.
Actionable Insights: Get tailored recommendations and practical steps to boost performance.
Seamless Integration:
Connects with your existing accounting software, shared drives, and document repositories, ensuring secure data handling.
Outcome: A human-like AI that performs tasks accurately and efficiently, reducing manual work." 
            iconClass={AskIconClass} 
            index={2} 
          />
        </div>
      </div>
    </section>
  );
};

// ----- FEATURES SECTION -----
const Features: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  const [ref, isInView] = useInView<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
            Key Features & Benefits
          </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StaggeredCard 
              darkMode={darkMode} 
              title="Preloaded Accounting Expertise" 
              description="BizGuard AI is equipped with the knowledge of a typical Indian accountant, ensuring it quickly aligns with your operations." 
              iconClass={UserIconClass} 
              index={0} 
            />
            <StaggeredCard 
              darkMode={darkMode} 
              title="Comprehensive Setup" 
              description="Create a full knowledge tree that defines your business processes, daily operations, projects, and chart of accounts. Benefit: Tailored learning for precise task execution." 
              iconClass={SettingsIconClass} 
              index={1} 
            />
            <StaggeredCard darkMode={darkMode} title="Interactive Training" description="Engage in live voice sessions where you explain tasks (like navigating an accounting application) and validate details via an intuitive UI.Benefit: Deep, accurate understanding of your workflows without disruptions." iconClass={ChalkboardIconClass} index={2} />
            <StaggeredCard darkMode={darkMode} title="Real-Time Task Execution" description="Assign tasks via voice or text and watch the AI execute them with precision—updating books, monitoring compliance, and providing insights in real time. Benefit: Immediate operational efficiency and reduced reliance on manual processes." iconClass={LightningIconClass} index={3} />
            <StaggeredCard darkMode={darkMode} title="Flexible Deployment" description="Choose from a cloud-based SaaS solution, an on-premises deployment, or a dedicated offline AI device. Benefit: Scalable options that grow with your business needs." iconClass={ServerIconClass} index={4} />
            <StaggeredCard darkMode={darkMode} title="Robust Data Security" description="BizGuard AI is focused on complete data security and securely handling sensitive information, ensuring your data is safe within a secure digital vault." iconClass={LockIconClass} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- APPROACH SECTION -----
const Approach: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  return (
    <section id="approach" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
            Our Three-Phase Approach
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className={`text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              BizGuard AI evolves with your business through three flexible phases
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <div className="mb-4">
              <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Image Placeholder</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-map-marker-alt text-2xl"></i>
              <h3 className="text-xl font-semibold">SaaS – AI Accountant Intern</h3>
            </div>
            <p>
            Start with a risk-free 30-day trial (powered by a $300 AI credit) and evaluate the AI using simulated data. Watch as it learns your daily operations and accounting tasks through interactive voice sessions.
            </p>
          </div>
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <div className="mb-4">
              <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Image Placeholder</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-cogs text-2xl"></i>
              <h3 className="text-xl font-semibold">On-Premises – AI Accountant Employee</h3>
            </div>
            <p>
            Deploy the AI on your internal server or private cloud. It becomes a dedicated team member managing routine accounting and corporate secretarial tasks while keeping all sensitive data securely on-site.
            </p>
          </div>
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <div className="mb-4">
              <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Image Placeholder</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <i className="fas fa-lock text-2xl"></i>
              <h3 className="text-xl font-semibold">AI Device – Portable ZeroNetwork BizGuard AI</h3>
            </div>
            <p>
            Transition to a standalone, offline device that operates with zero external network connectivity. Once fully integrated, it autonomously delivers precise financial insights and handles sensitive tasks—acting as your personal AI accountant and secretary.
            </p>
            </div>
          </div>
        </div>
    </section>
  );
};

// ----- FAQ SECTION -----
interface FAQItem {
  question: string;
  answer: string;
}
const FAQ: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs: FAQItem[] = [
    {
      question: "What is BizGuard AI?",
      answer: "BizGuard AI is an interactive, AI-powered accounting agent that learns your business processes through natural voice interactions, collaborates with your team, and executes tasks with precision—all while ensuring complete data security and securely handling sensitive information."
    },
    {
      question: "How does BizGuard AI ensure data security?",
      answer: "BizGuard AI is focused on complete data security and securely handling sensitive data. It operates on a secure platform that minimizes external connectivity risks, ensuring your critical financial information is processed and stored safely in a digital vault."
    },
    {
      question: "What is the roadmap for BizGuard AI?",
      answer: "Our roadmap begins by transforming your accounting operations. Initially, the AI is preloaded with essential accounting knowledge and learns your specific workflows during the Setup and Training Stages. Once you gain confidence in its accounting capabilities, we expand BizGuard AI to support other business functions—such as sales, customer support, manufacturing, procurement, and market research—ensuring a comprehensive, secure solution for your entire organization."
    },
    {
      question: "What return on investment (ROI) can I expect?",
      answer: "By automating routine tasks and reducing manual errors, BizGuard AI significantly improves efficiency and speeds up financial reporting—resulting in immediate cost savings. As you extend its functionality across multiple departments, you'll experience further operational improvements, reduced labor costs, and enhanced decision-making, ultimately delivering a strong, measurable ROI."
    },
    {
      question: "How does BizGuard AI integrate with my existing systems?",
      answer: "BizGuard AI seamlessly integrates with your current accounting software, ERP systems, shared drives, and document repositories, ensuring a smooth flow of data and enhanced operational efficiency—all while maintaining robust data protection."
    },
    {
      question: "Can BizGuard AI be customized to suit my business needs?",
      answer: "Yes. During the Setup Stage, you build a comprehensive knowledge tree that maps out your business processes, policies, daily operations, and chart of accounts. This customization ensures that BizGuard AI learns and performs tasks tailored precisely to your organization."
    },
    {
      question: "What support and training do you offer during implementation?",
      answer: "We provide extensive support throughout the Setup and Training Stages, including interactive voice sessions, dynamic UI assistance, and ongoing technical support. Our goal is to ensure a smooth transition and rapid adoption of BizGuard AI."
    },
    {
      question: "What future enhancements can I expect?",
      answer: "Our commitment to innovation means that once the accounting module is fully operational, we will expand BizGuard AI's capabilities to include modules for sales, customer support, manufacturing, procurement, and market research. This phased approach will provide unmatched insights and help run your entire business more effectively."
    }
  ];

  return (
    <section id="faq" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Get answers to common questions about BizGuard AI
            </p>
        </div>
        <div className="mx-auto max-w-[800px]">
          {faqs.map((faq, index) => (
            <div key={index} className={`mb-6 rounded-lg border ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
              <button
                className={`flex w-full items-center justify-between p-4 sm:p-6 ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`} 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96 px-4 pb-4 sm:px-6 sm:pb-6" : "max-h-0"}`}>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- FOOTER SECTION -----
const Footer: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  return (
    <footer className={`relative z-10 pt-16 pb-10 lg:pt-24 lg:pb-10 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <div className="mb-10">
              <Link href="/#">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-2">
                    <Image
                      src="/bizguard-high-resolution-logo.png"
                      alt="BizGuard AI Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="scale-110"
                    />
                  </div>
                  <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
                  BizGuard AI
                </h1>
                </div>
              </Link>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-4`}>
                Your Interactive, AI-Powered Accounting Agent
              </p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
            <div className="mb-10">
              <h4 className={`mb-9 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Navigation</h4>
              <ul>
                {["Home", "Features", "How It Works", "FAQ", "Contact"].map((item) => (
                  <li key={item} className="mb-3">
                    <Link
                      href={`/#${item.toLowerCase().replace(/\s/g, "-")}`}
                      className={`inline-block text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} relative group`}
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
            <div className="mb-10">
              <h4 className={`mb-9 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Legal</h4>
              <ul>
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item} className="mb-3">
                    <Link
                      href="/#"
                      className={`inline-block text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} relative group`}
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12">
            <div className="mb-10">
              <h4 className={`mb-9 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Contact</h4>
              <ul>
                <li className={`mb-3 flex items-center text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <span className="mr-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>info@bizguardai.com</span>
                </li>
                <li className={`mb-3 flex items-center text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <span className="mr-3">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>+91-XXXX-XXXXXX</span>
                </li>
              </ul>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h5 className={`mb-4 text-base font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Follow us:</h5>
                <div className="flex space-x-4">
                  <Link href="/#" className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link href="/#" className="h-8 w-8 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/#" className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className={`border-t ${darkMode ? "border-gray-700" : "border-gray-200"} pt-6`}>
          <p className={`text-center text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} BizGuard AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ----- CTA SECTION -----
const CTA: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  return (
    <section id="cta" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-lg px-8 py-16 sm:px-12 md:px-16 lg:px-20 ${darkMode ? "bg-gradient-to-r from-gray-700 to-gray-800" : "bg-gradient-to-r from-gray-800 to-gray-900"}`}>
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-[40px] text-white">
              Are you ready to revolutionize your accounting operations?
            </h2>
            <p className="mb-10 text-base text-gray-300 md:text-lg">
              Join our exclusive waitlist today to receive updates and be the first to experience the future of accounting with BizGuard AI.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <AnimatedButton variant="primary">
                Join Our Exclusive Waitlist
              </AnimatedButton>
              <AnimatedButton variant="secondary">
                Subscribe for Updates
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Hero: React.FC<ThemeProps> = ({ theme, darkMode }) => {
  return (
    <section id="home" className={`relative z-10 overflow-hidden pt-20 pb-16 md:pt-12 md:pb-20 xl:pt-14 xl:pb-24 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mt-8">
          <div className="w-full px-4">
            <div className="mx-auto w-full text-center">
              <h1 className={`mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : getTextColor(theme, darkMode)}`}>
                Welcome to the Future of Accounting with BizGuard AI
              </h1>
              <p className={`mb-12 text-base font-medium leading-relaxed ${darkMode ? "text-gray-200" : "text-gray-700"} sm:text-lg md:text-xl`}>
                Experience an AI accountant that learns, collaborates, and executes tasks through natural voice interactions and an intuitive interface—all while ensuring complete data security and securely handling sensitive information.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <AnimatedButton variant="primary">
                  Join Our Exclusive Waitlist
                </AnimatedButton>
                <AnimatedButton variant="secondary">
                  Subscribe for Updates
                </AnimatedButton>
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};
// ----- MAIN LANDING PAGE -----
const BizGuardAILandingPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("black");
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <div className={darkMode ? "bg-gray-900" : "bg-white"}>
      <Header theme={theme} darkMode={darkMode} setDarkMode={setDarkMode} setTheme={setTheme} />
      <Hero theme={theme} darkMode={darkMode} />
      <HowItWorks theme={theme} darkMode={darkMode} />
      <Approach theme={theme} darkMode={darkMode} />
      <Features theme={theme} darkMode={darkMode} />
      <FAQ theme={theme} darkMode={darkMode} />
      <CTA theme={theme} darkMode={darkMode} />
      <Footer theme={theme} darkMode={darkMode} />
    </div>
  );
};

export default BizGuardAILandingPage;





