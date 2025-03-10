"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "./hooks/useInView";
import AnimatedButton from "./components/AnimatedButton";
import Modal from "./components/Modal";
import MultiStepForm from "./components/MultiStepForm";
// import { validateEmail, validatePhone, validateRequired } from './utils/validation';
import { useForm } from "./contexts/FormContext";
import { FormProvider } from "./contexts/FormContext";

// ----- HEADER -----
interface ThemeProps {
  theme: string;
  darkMode: boolean;
}

const Header: React.FC<{ darkMode: boolean; setDarkMode: (val: boolean) => void }> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { setShowWaitlistModal, setShowSubscribeModal } = useForm();

  // Add smooth scroll function
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  // Navigation items with special handling for Contact
  const navItems = [
    { name: "Home", href: "/#" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact", onClick: scrollToContact }
  ];

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
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-700"} -ml-1`}>
                BizGuard AI
              </h1>
            </Link>
          </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end flex-1 px-4">
          <nav className="flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className={`relative text-base font-medium group ${
                  darkMode ? "text-white" : "text-gray-700"
                } hover:text-orange-500 transition-colors duration-300`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="flex items-center space-x-4">
            <AnimatedButton 
              variant="primary" 
              darkMode={darkMode}
              onClick={() => setShowWaitlistModal(true)}
              icon="fa-rocket"
            >
              Join Waitlist
            </AnimatedButton>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-700"
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden pr-4">
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                    <Link
                    href={item.href}
                    onClick={item.onClick}
                    className={`block text-base font-medium ${
                      darkMode ? "text-white" : "text-gray-700"
                    } hover:text-orange-500 transition-colors duration-300`}
                  >
                    {item.name}
                    </Link>
                  </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setShowWaitlistModal(true);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left text-base font-medium ${
                    darkMode ? "text-white" : "text-gray-700"
                  } hover:text-orange-500 transition-colors duration-300`}
                >
                  Join Waitlist
                </button>
                  </li>
                  <li>
                <button
                  onClick={() => {
                    setShowSubscribeModal(true);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left text-base font-medium ${
                    darkMode ? "text-white" : "text-gray-700"
                  } hover:text-orange-500 transition-colors duration-300`}
                >
                  Subscribe for Updates
                </button>
                  </li>
              <li className="flex items-center justify-between">
                <span className={`text-base font-medium ${darkMode ? "text-white" : "text-gray-700"}`}>
                  Dark Mode
                </span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
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
  index,
  darkMode 
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  const getIllustration = (iconClass: string) => {
    switch(iconClass) {
      // Setup Stage - Business Mapping
      case "fas fa-map-marker-alt":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Knowledge Tree Structure */}
            <circle cx="50" cy="20" r="10" strokeWidth="4"/>
            <path d="M50 30v10" strokeWidth="4"/>
            <circle cx="30" cy="50" r="8" strokeWidth="4"/>
            <circle cx="70" cy="50" r="8" strokeWidth="4"/>
            <path d="M50 40l-20 10M50 40l20 10" strokeWidth="4"/>
            <circle cx="20" cy="75" r="6" strokeWidth="4"/>
            <circle cx="40" cy="75" r="6" strokeWidth="4"/>
            <circle cx="60" cy="75" r="6" strokeWidth="4"/>
            <circle cx="80" cy="75" r="6" strokeWidth="4"/>
            <path d="M30 50l-10 25M30 50l10 25M70 50l-10 25M70 50l10 25" strokeWidth="4"/>
          </svg>
        );
      // Voice Training
      case "fas fa-microphone-alt":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="35" y="10" width="30" height="50" rx="15" strokeWidth="6"/>
            <path d="M20 45c0 16.6 13.4 30 30 30s30-13.4 30-30" strokeWidth="6"/>
            <path d="M50 75v15M35 90h30" strokeWidth="6"/>
          </svg>
        );
      // Task Assignment
      case "fas fa-comments":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M30 35h40M30 50h25" strokeWidth="6"/>
            <path d="M20 20h60v45H55L40 80V65H20V20z" strokeWidth="6"/>
            <circle cx="70" cy="50" r="5" strokeWidth="6"/>
          </svg>
        );
      // Accounting Expertise
      case "fas fa-download":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Briefcase with checkmark concept */}
            {/* Briefcase */}
            <path d="M25 40h50v35H25z" strokeWidth="4"/>
            <path d="M40 40V30c0-5 20-5 20 0v10" strokeWidth="4"/>
            
            {/* Large checkmark */}
            <path d="M35 55l10 10 20-20" strokeWidth="4"/>
            
            {/* Small accounting symbols */}
            <text x="44" y="55" className="text-sm" fill="currentColor">₹</text>
            <text x="55" y="70" className="text-sm" fill="currentColor">$</text>
          </svg>
        );
      // Comprehensive Setup
      case "fas fa-cogs":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="20" strokeWidth="6"/>
            <path d="M50 20v-10M50 90v-10M80 50h10M10 50h10M73 27l7-7M20 80l7-7M73 73l7 7M20 20l7 7" strokeWidth="6"/>
          </svg>
        );
      // Interactive Training
      case "fas fa-chalkboard-teacher":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Person interacting with screen */}
            <rect x="20" y="20" width="60" height="40" rx="2" strokeWidth="4"/> {/* Screen */}
            <path d="M50 70v10" strokeWidth="4"/> {/* Stand */}
            <path d="M35 80h30" strokeWidth="4"/> {/* Base */}
            <circle cx="50" cy="40" r="8" strokeWidth="3"/> {/* Person head */}
            <path d="M40 35l-10-10M60 35l10-10" strokeWidth="3"/> {/* Interactive waves */}
            <path d="M35 45l-15 5M65 45l15 5" strokeWidth="3"/> {/* Interactive waves */}
          </svg>
        );
      // Real-Time Execution
      case "fas fa-bolt":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M55 10L30 45h20L35 90l35-45H50l5-35z" strokeWidth="6"/>
          </svg>
        );
      // Flexible Deployment
      case "fas fa-server":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="20" width="50" height="15" rx="2" strokeWidth="6"/>
            <rect x="25" y="42.5" width="50" height="15" rx="2" strokeWidth="6"/>
            <rect x="25" y="65" width="50" height="15" rx="2" strokeWidth="6"/>
          </svg>
        );
      // Security
      case "fas fa-lock":
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="45" width="50" height="40" rx="5" strokeWidth="6"/>
            <path d="M35 45V30c0-8.3 6.7-15 15-15s15 6.7 15 15v15" strokeWidth="6"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={ref}
      className={`
        rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 
        ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}
        border transform
        ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* SVG Illustration */}
      <div className="mb-6">
        <div className={`w-full h-40 flex items-center justify-center ${
          darkMode ? "bg-gray-700" : "bg-gray-50"
        } rounded-lg`}>
          <div className={`${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {getIllustration(iconClass)}
              </div>
            </div>
          </div>
      {/* Title */}
      <h3 className={`text-xl font-semibold mb-4 text-center ${darkMode ? "text-white" : "text-gray-900"}`}>{title}</h3>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-justify`}>{description}</p>
        </div>
  );
};

// ----- ICONS FOR CARDS USING FONT AWESOME -----
// How It Works / Features
const SetupIconClass = "fas fa-map-marker-alt";
const TrainingIconClass = "fas fa-microphone-alt";
const AskIconClass = "fas fa-comments";
const UserIconClass = "fas fa-download";
const SettingsIconClass = "fas fa-cogs";
const ChalkboardIconClass = "fas fa-chalkboard-teacher";
const LightningIconClass = "fas fa-bolt";
const ServerIconClass = "fas fa-server";
const LockIconClass = "fas fa-lock";

// ----- HOW IT WORKS SECTION -----
const HowItWorks: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="how-it-works" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : "text-gray-700"}`}>
            How BizGuard AI Works
          </h2>
          </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <StaggeredCard 
            darkMode={darkMode} 
            title="Setup - Map Your Business" 
            description="Start by sharing a complete overview of your organization. In this stage, you Share Key Details:
Your teams, business policies, processes, daily operations, ongoing projects, and your unique chart of accounts.
Build Your Knowledge Tree:
Outline every task and process the AI needs to learn.
Define Expectations:
Set a clear foundation for the AI's role and responsibilities.
Outcome: A solid, tailored knowledge base that mirrors your exact operations.
" 
            iconClass={SetupIconClass} 
            index={0} 
          />
          <StaggeredCard 
            darkMode={darkMode} 
            title="Train - Interactive Learning" 
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
            title="Ask - Task Assignment" 
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
const Features: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [ref, isInView] = useInView<HTMLElement>();
  
  return (
    <section 
      ref={ref}
      className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : "text-gray-700"}`}>
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
              description="Create a full knowledge tree that defines your business processes, daily operations, projects, and chart of accounts. Benefit: Deep, accurate understanding of your process and workflows." 
              iconClass={SettingsIconClass} 
              index={1} 
            />
            <StaggeredCard darkMode={darkMode} title="Interactive Training" description="Engage in live voice sessions where you explain tasks (like navigating an accounting application) and validate details via an intuitive UI. Benefit: Tailored learning for precise task execution." iconClass={ChalkboardIconClass} index={2} />
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
const ThreePhaseIllustration: React.FC<{ phase: 'saas' | 'onprem' | 'device', darkMode: boolean }> = ({ phase, darkMode }) => {
  const getPhaseIllustration = () => {
    switch(phase) {
      // SaaS - AI Accountant Intern
      case 'saas':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Cloud with "Free" tag */}
            <path d="M25 50C25 35 38 35 40 35C40 20 55 20 60 25C70 15 90 25 85 45C95 45 95 65 85 65H30C20 65 20 50 25 50Z" strokeWidth="4"/>
            <rect x="35" y="55" width="30" height="15" rx="2" strokeWidth="3"/>
            <text x="40" y="66" className="text-xs" fill="currentColor">FREE</text>
          </svg>
        );
      // On-Premises - AI Accountant Employee
      case 'onprem':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Server stack icon */}
            <rect x="20" y="20" width="60" height="15" rx="2" strokeWidth="6"/>
            <rect x="20" y="42.5" width="60" height="15" rx="2" strokeWidth="6"/>
            <rect x="20" y="65" width="60" height="15" rx="2" strokeWidth="6"/>
            {/* Status indicators */}
            <circle cx="30" cy="27.5" r="3" fill="currentColor"/>
            <circle cx="30" cy="50" r="3" fill="currentColor"/>
            <circle cx="30" cy="72.5" r="3" fill="currentColor"/>
              </svg>
        );
      // AI Device - Portable ZeroNetwork
      case 'device':
        return (
          <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="25" width="50" height="50" rx="5" strokeWidth="6"/>
            <path d="M40 50h20" strokeWidth="6"/>
            <path d="M50 40v20" strokeWidth="6"/>
            <path d="M15 15l15 15M85 85L70 70M15 85L30 70M85 15L70 30" strokeWidth="6"/>
              </svg>
        );
    }
  };

  return (
    <div className={`w-full h-40 flex items-center justify-center ${
      darkMode ? "bg-gray-700" : "bg-gray-50"
    } rounded-lg mb-6`}>
      <div className={`${
        darkMode ? "text-gray-300" : "text-gray-600"
      }`}>
        {getPhaseIllustration()}
            </div>
          </div>
  );
};

const Approach: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="approach" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : "text-gray-700"}`}>
            Our Three-Phase Approach
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className={`text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              BizGuard AI evolves with your business through three flexible phases
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* SaaS Phase */}
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <ThreePhaseIllustration phase="saas" darkMode={darkMode} />
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              SaaS – AI Accountant Intern
            </h3>
            <p className="text-justify">
              Start with a risk-free 30-day trial (powered by a $300 AI credit) and evaluate the AI using simulated data. Watch as it learns your daily operations and accounting tasks through interactive voice sessions.
            </p>
          </div>

          {/* On-Premises Phase */}
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <ThreePhaseIllustration phase="onprem" darkMode={darkMode} />
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              On-Premises – AI Accountant Employee
            </h3>
            <p className="text-justify">
              Deploy the AI on your internal server or private cloud. It becomes a dedicated team member managing routine accounting and corporate secretarial tasks while keeping all sensitive data securely on-site.
            </p>
          </div>

          {/* AI Device Phase */}
          <div className={`rounded-lg border p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-700"}`}>
            <ThreePhaseIllustration phase="device" darkMode={darkMode} />
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                AI Device – Portable ZeroNetwork BizGuard AI
              </h3>
            <p className="text-justify">
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
const FAQ: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs: (FAQItem & { icon: string })[] = [
    {
      question: "What is BizGuard AI?",
      answer: "BizGuard AI is an interactive, AI-powered accounting agent that learns your business processes through natural voice interactions, collaborates with your team, and executes tasks with precision—all while ensuring complete data security and securely handling sensitive information.",
      icon: "fa-robot"
    },
    {
      question: "How does BizGuard AI ensure data security?",
      answer: "BizGuard AI is focused on complete data security and securely handling sensitive data. It operates on a secure platform that minimizes external connectivity risks, ensuring your critical financial information is processed and stored safely in a digital vault.",
      icon: "fa-shield-alt"
    },
    {
      question: "What is the roadmap for BizGuard AI?",
      answer: "Our roadmap begins by transforming your accounting operations. Initially, the AI is preloaded with essential accounting knowledge and learns your specific workflows during the Setup and Training Stages. Once you gain confidence in its accounting capabilities, we expand BizGuard AI to support other business functions—such as sales, customer support, manufacturing, procurement, and market research—ensuring a comprehensive, secure solution for your entire organization.",
      icon: "fa-road"
    },
    {
      question: "What return on investment (ROI) can I expect?",
      answer: "By automating routine tasks and reducing manual errors, BizGuard AI significantly improves efficiency and speeds up financial reporting—resulting in immediate cost savings. As you extend its functionality across multiple departments, you'll experience further operational improvements, reduced labor costs, and enhanced decision-making, ultimately delivering a strong, measurable ROI.",
      icon: "fa-chart-line"
    },
    {
      question: "How does BizGuard AI integrate with my existing systems?",
      answer: "BizGuard AI seamlessly integrates with your current accounting software, ERP systems, shared drives, and document repositories, ensuring a smooth flow of data and enhanced operational efficiency—all while maintaining robust data protection.",
      icon: "fa-plug"
    },
    {
      question: "Can BizGuard AI be customized to suit my business needs?",
      answer: "Yes. During the Setup Stage, you build a comprehensive knowledge tree that maps out your business processes, policies, daily operations, and chart of accounts. This customization ensures that BizGuard AI learns and performs tasks tailored precisely to your organization.",
      icon: "fa-cogs"
    },
    {
      question: "What support and training do you offer during implementation?",
      answer: "We provide extensive support throughout the Setup and Training Stages, including interactive voice sessions, dynamic UI assistance, and ongoing technical support. Our goal is to ensure a smooth transition and rapid adoption of BizGuard AI.",
      icon: "fa-headset"
    },
    {
      question: "What future enhancements can I expect?",
      answer: "Our commitment to innovation means that once the accounting module is fully operational, we will expand BizGuard AI's capabilities to include modules for sales, customer support, manufacturing, procurement, and market research. This phased approach will provide unmatched insights and help run your entire business more effectively.",
      icon: "fa-rocket"
    }
  ];

  // Helper function to render FAQ item
  const renderFAQItem = (faq: typeof faqs[0], index: number) => (
            <div 
              key={index}
      className={`rounded-lg border ${
        darkMode 
          ? "border-gray-700 bg-gray-900 text-white" 
          : "border-gray-200 bg-white text-gray-900"
      } transition-all duration-300 hover:shadow-lg`}
            >
              <button
        className={`flex w-full items-center justify-between p-4 sm:p-6`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
        <div className="flex items-center space-x-4 text-left">
          <i className={`fas ${faq.icon} text-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}></i>
          <span className="text-lg font-medium pr-4">{faq.question}</span>
        </div>
                <svg
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
            activeIndex === index ? "rotate-180" : ""
          }`} 
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === index ? "max-h-96 px-4 pb-4 sm:px-6 sm:pb-6" : "max-h-0"
        }`}
      >
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} pl-12`}>{faq.answer}</p>
              </div>
            </div>
  );

  return (
    <section id="faq" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : "text-gray-700"}`}>
            Frequently Asked Questions
            </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            Get answers to common questions about BizGuard AI
          </p>
            </div>
        
        {/* Two-column layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => 
              renderFAQItem(faq, index)
            )}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => 
              renderFAQItem(faq, index + Math.ceil(faqs.length / 2))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- FOOTER SECTION -----
const Footer = ({ darkMode }: { darkMode: boolean }) => {
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
                  <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-700"}`}>
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
          {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
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
                </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Contact Information */}
          <div id="contact" className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12">
            <div className="mb-10">
              <h4 className={`mb-9 text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Contact</h4>
              <ul>
                <li className={`mb-3 flex items-center text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <span className="mr-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <a 
                    href="mailto:anandan.bsm@gmail.com"
                    className="hover:text-orange-500 transition-colors duration-300"
                  >
                    anandan.bsm@gmail.com
                  </a>
                </li>
                <li className={`mb-3 flex items-center text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  <span className="mr-3">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>+91-9445134411</span>
                </li>
              </ul>
              
              {/* Social Media Links */}
              {/* <div className="mt-8">
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
              </div> */}
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
const CTA: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const {
    submitStatus,
    showWaitlistModal,
    setShowWaitlistModal,
    showSubscribeModal,
    setShowSubscribeModal,
    handleFormSubmit,
    handleSubscribeSubmit
  } = useForm();

  return (
    <section id="cta" className={`py-16 md:py-20 lg:py-28 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className={`rounded-lg px-8 py-16 sm:px-12 md:px-16 lg:px-20 ${
          darkMode ? "bg-gray-900" : "bg-white"
        } shadow-lg border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}>
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className={`mb-6 text-3xl font-bold sm:text-4xl md:text-[40px] ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Are you ready to revolutionize your accounting operations?
            </h2>
            <p className={`mb-10 text-base md:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Join our exclusive waitlist today to receive updates and be the first to experience the future of accounting with BizGuard AI.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <AnimatedButton 
                variant="primary" 
                darkMode={darkMode}
                onClick={() => setShowWaitlistModal(true)}
                icon="fa-star"
              >
                Join Our Exclusive Waitlist
              </AnimatedButton>
              <AnimatedButton 
                variant="secondary"
                darkMode={darkMode}
                onClick={() => setShowSubscribeModal(true)}
                icon="fa-paper-plane"
              >
                Subscribe for Updates
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the modals remain unchanged */}
      <Modal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        title=""
        darkMode={darkMode}
      >
        <MultiStepForm
          darkMode={darkMode}
          onClose={() => setShowWaitlistModal(false)}
          onSubmit={handleFormSubmit}
        />
      </Modal>
      <Modal
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
        title="Subscribe for Updates"
        darkMode={darkMode}
      >
        <form onSubmit={handleSubscribeSubmit} className="space-y-4">
          <div>
            <label className={`block mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className={`w-full p-2 rounded-lg border ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white" 
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
            <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className={`w-full p-3 rounded-lg bg-orange-500 text-white font-medium
              ${submitStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}
            `}
          >
            {submitStatus === 'loading' ? 'Submitting...' : 
             submitStatus === 'success' ? 'Success!' : 
             submitStatus === 'error' ? 'Try Again' : 
             'Subscribe'}
          </button>
        </form>
      </Modal>
    </section>
  );
};

const Hero: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const {
    submitStatus,
    showWaitlistModal,
    setShowWaitlistModal,
    showSubscribeModal,
    setShowSubscribeModal,
    handleFormSubmit,
    handleSubscribeSubmit
  } = useForm();

  return (
    <>
      <section id="home" className={`relative z-10 overflow-hidden pt-20 pb-16 md:pt-12 md:pb-20 xl:pt-14 xl:pb-24 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full px-4">
              <div className="mx-auto w-full text-center">
                <h1 className={`mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-[45px] ${darkMode ? "text-white" : "text-gray-700"}`}>
                  Welcome to the Future of Accounting with BizGuard AI
                </h1>
                
                {/* Video Section */}
                <div className="w-full my-8 flex justify-center">
                  <div className={`
                    relative 
                    w-[60%] 
                    aspect-video 
                    rounded-lg 
                    overflow-hidden 
                    flex 
                    items-center 
                    justify-center
                    ${darkMode ? "bg-gray-800" : "bg-white"}
                    border-2 
                    ${darkMode ? "border-gray-700" : "border-gray-200"}
                  `}>
                    {!isVideoPlaying ? (
                      // Thumbnail and Play Button Container
                      <div className="relative w-full h-full">
                        {/* Thumbnail Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/bizguard-video-thumbnail.jpg"
                            alt="BizGuard AI Video Preview"
                            fill
                            style={{ 
                              objectFit: 'contain',
                              objectPosition: 'center'
                            }}
                            className="p-2"
                            priority
                          />
        </div>
                        
                        {/* Clickable Overlay with Play Button */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          {/* Circular Play Button */}
                          <div className={`
                            w-16 h-16 mb-10 ml-2
                            rounded-full 
                            bg-black/50 
                            backdrop-blur-sm
                            flex items-center justify-center
                            transform
                            transition-all duration-300
                            group-hover:scale-110
                            group-hover:bg-grey-500/80
                            ${darkMode ? 'shadow-lg shadow-orange-500/20' : 'shadow-lg shadow-black/20'}
                          `}>
                            <i className={`
                              fas fa-play 
                              text-white 
                              text-2xl
                              transform 
                              translate-x-0.5
                              transition-transform duration-300
                              group-hover:scale-125
                            `}></i>
      </div>
    </div>
                      </div>
                    ) : (
                      // Video Player
                      <video 
                        className="w-full h-full"
                        autoPlay 
                        controls
                        playsInline
                        onEnded={() => {
                          setIsVideoPlaying(false);
                        }}
                      >
                        <source src="/BizGuard_AI_-_Explainer_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>

                <p className={`mb-12 text-base font-medium leading-relaxed ${darkMode ? "text-gray-200" : "text-gray-700"} sm:text-lg md:text-xl`}>
                  Experience an AI accountant that learns, collaborates, and executes tasks through natural voice interactions and an intuitive interface—all while ensuring complete data security and securely handling sensitive information.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <AnimatedButton 
                    variant="primary" 
                    darkMode={darkMode}
                    onClick={() => setShowWaitlistModal(true)}
                    icon="fa-rocket"
                  >
                    Join Our Exclusive Waitlist
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="secondary" 
                    darkMode={darkMode}
                    onClick={() => setShowSubscribeModal(true)}
                    icon="fa-bell"
                  >
                    Subscribe for Updates
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <Modal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        title=""
        darkMode={darkMode}
      >
        <MultiStepForm
          darkMode={darkMode}
          onClose={() => setShowWaitlistModal(false)}
          onSubmit={handleFormSubmit}
        />
      </Modal>

      {/* Subscribe Modal */}
      <Modal
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
        title="Subscribe for Updates"
        darkMode={darkMode}
      >
        <form onSubmit={handleSubscribeSubmit} className="space-y-4">
          <div>
            <label className={`block mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className={`w-full p-2 rounded-lg border ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white" 
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
            <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className={`w-full p-3 rounded-lg bg-orange-500 text-white font-medium
              ${submitStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600'}
            `}
          >
            {submitStatus === 'loading' ? 'Submitting...' : 
             submitStatus === 'success' ? 'Success!' : 
             submitStatus === 'error' ? 'Try Again' : 
             'Subscribe'}
          </button>
        </form>
      </Modal>
    </>
  );
};

// ----- MAIN LANDING PAGE -----
const BizGuardAILandingPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <FormProvider>
      <div className={darkMode ? "bg-gray-900" : "bg-white"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <Features darkMode={darkMode} />
        <Approach darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <CTA darkMode={darkMode} />
        <Footer darkMode={darkMode} />
    </div>
    </FormProvider>
  );
};

export default BizGuardAILandingPage;


