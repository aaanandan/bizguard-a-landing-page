import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from './contexts/FormContext';

// Header Component
const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowWaitlistModal } = useForm();

  return (
    <header className="flex w-full items-center bg-white">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="max-w-full px-4">
            <Link href="/#" className="block w-full py-5">
              <h1 className={`text-2xl font-bold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
                BizGuard AI
              </h1>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
              >
                <span className="relative block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative block h-[2px] w-[30px] bg-black"></span>
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  isMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <ul className="block lg:flex">
                  <li>
                    <Link
                      href="/#"
                      className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#features"
                      className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#how-it-works"
                      className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button
                onClick={() => setShowWaitlistModal(true)}
                className={`rounded-lg bg-orange-500 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90`}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = ({ theme }) => {
  const { setShowWaitlistModal, setShowSubscribeModal } = useForm();

  return (
    <section id="home" className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className={`mb-5 text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
                Welcome to the Future of Accounting with BizGuard AI
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                Experience an AI accountant that learns, collaborates, and executes tasks through natural voice interactions and an intuitive interface—all while ensuring complete data security and securely handling sensitive information.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button 
                  onClick={() => setShowWaitlistModal(true)}
                  className="rounded-lg bg-orange-500 px-8 py-4 text-base font-medium text-white hover:bg-opacity-90"
                >
                  Join Our Exclusive Waitlist
                </button>
                <button 
                  onClick={() => setShowSubscribeModal(true)}
                  className={`rounded-lg px-8 py-4 text-base font-medium border border-gray-300 hover:bg-gray-100 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                >
                  Subscribe for Updates
                </button>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                <span className="font-bold">Tip:</span> Enjoy a mobile-friendly experience designed for busy professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="container mx-auto mt-16">
        <div className="flex justify-center">
          <div className="relative h-0 pb-[56.25%] w-full max-w-4xl">
            {/* Placeholder for video */}
            <div className={`absolute inset-0 flex items-center justify-center border-2 ${theme === 'black' ? 'border-black' : `border-${theme}-600`} rounded-lg`}>
              <div className="text-center">
                <svg 
                  className={`w-16 h-16 mx-auto ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="mt-4 text-lg">Explainer Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorks = ({ theme }) => {
  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
            How BizGuard AI Works
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className="text-base text-gray-700 md:text-lg">
              Our powerful AI learns your business processes and executes tasks with precision
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Stage 1 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              1. Setup Stage – Mapping Your Business
            </h3>
            <p className="mb-6 text-gray-700">
              Start by sharing a complete overview of your organization. In this stage, you:
            </p>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              <li className="mb-2">Share key details about your teams, business policies, processes, and chart of accounts</li>
              <li className="mb-2">Build your knowledge tree that outlines every task the AI needs to learn</li>
              <li className="mb-2">Define clear expectations for the AI's role and responsibilities</li>
            </ul>
            <p className="font-medium text-gray-700">
              <span className="font-bold">Outcome:</span> A solid, tailored knowledge base that mirrors your exact operations.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              2. Training Stage – Interactive Voice Learning & Validation
            </h3>
            <p className="mb-6 text-gray-700">
              Engage in live training sessions with BizGuard AI:
            </p>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              <li className="mb-2">Participate in interactive voice sessions while sharing your screen</li>
              <li className="mb-2">Use dynamic UI support to upload files and track voice chat logs</li>
              <li className="mb-2">Answer clarifying questions and validate each session until the AI fully understands</li>
            </ul>
            <p className="font-medium text-gray-700">
              <span className="font-bold">Outcome:</span> A customized, in-depth understanding of your business processes.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              3. Ask Stage – Task Assignment & Execution
            </h3>
            <p className="mb-6 text-gray-700">
              Once training is complete, move to active task execution:
            </p>
            <ul className="mb-6 list-disc pl-6 text-gray-700">
              <li className="mb-2">Assign tasks using voice commands or simple text messages</li>
              <li className="mb-2">Get real-time bookkeeping, compliance monitoring, and actionable insights</li>
              <li className="mb-2">Enjoy seamless integration with your existing accounting software</li>
            </ul>
            <p className="font-medium text-gray-700">
              <span className="font-bold">Outcome:</span> A human-like AI that performs tasks accurately and efficiently, reducing manual work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const Features = ({ theme }) => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
            Key Features & Benefits
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className="text-base text-gray-700 md:text-lg">
              BizGuard AI brings powerful features to streamline your accounting processes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Preloaded Accounting Expertise
            </h3>
            <p className="text-gray-700">
              BizGuard AI is equipped with the knowledge of a typical Indian accountant, ensuring it quickly aligns with your operations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Comprehensive Setup
            </h3>
            <p className="text-gray-700">
              Create a full knowledge tree that defines your business processes, daily operations, projects, and chart of accounts for tailored learning and precise task execution.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Interactive Training
            </h3>
            <p className="text-gray-700">
              Engage in live voice sessions where you explain tasks and validate details via an intuitive UI for deep, accurate understanding of your workflows without disruptions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Real-Time Task Execution
            </h3>
            <p className="text-gray-700">
              Assign tasks via voice or text and watch the AI execute them with precision—updating books, monitoring compliance, and providing insights in real time.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Flexible Deployment
            </h3>
            <p className="text-gray-700">
              Choose from a cloud-based SaaS solution, an on-premises deployment, or a dedicated offline AI device that scales with your business needs.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-lg ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} bg-opacity-10`}>
              <svg 
                className={`h-8 w-8 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              Robust Data Security
            </h3>
            <p className="text-gray-700">
              BizGuard AI focuses on complete data security and securely handling sensitive information, ensuring your data is safe within a secure digital vault.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Approach Section Component
const Approach = ({ theme }) => {
  return (
    <section id="approach" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
            Our Three-Phase Approach
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className="text-base text-gray-700 md:text-lg">
              BizGuard AI evolves with your business through three flexible phases
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Phase 1 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white`}>
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              SaaS – AI Accountant Intern
            </h3>
            <p className="text-gray-700">
              Start with a risk-free 30-day trial (powered by a $300 AI credit) and evaluate the AI using simulated data. Watch as it learns your daily operations and accounting tasks through interactive voice sessions.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white`}>
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
              On-Premises – AI Accountant Employee
            </h3>
            <p className="text-gray-700">
              Deploy the AI on your internal server or private cloud. It becomes a dedicated team member managing routine accounting and corporate secretarial tasks while keeping all sensitive data securely on-site.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white`}>
              <span className="text-xl font-bold">3</span>
            </div>
          

            <h3 className={`mb-4 text-xl font-semibold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
                AI Device – Portable ZeroNetwork BizGuard AI
              </h3>
              <p className="text-gray-700">
                Transition to a standalone, offline device that operates with zero external network connectivity. Once fully integrated, it autonomously delivers precise financial insights and handles sensitive tasks—acting as your personal AI accountant and secretary.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

// FAQ Section Component
const FAQ = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
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
    <section id="faq" className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={`mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mb-16 max-w-[800px]">
            <p className="text-base text-gray-700 md:text-lg">
              Get answers to common questions about BizGuard AI
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[800px]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-6 rounded-lg border border-gray-200 bg-white"
            >
              <button
                className={`flex w-full items-center justify-between p-4 sm:p-6 ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 px-4 pb-4 sm:px-6 sm:pb-6' : 'max-h-0'}`}>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTA = ({ theme }) => {
  const { setShowWaitlistModal, setShowSubscribeModal } = useForm();

  return (
    <section id="cta" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-16 sm:px-12 md:px-16 lg:px-20">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
              Ready to Revolutionize Your Accounting Operations?
            </h2>
            <p className="mb-10 text-base text-gray-300 md:text-lg">
              Join our exclusive waitlist today to receive updates and be the first to experience the future of accounting with BizGuard AI.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button 
                onClick={() => setShowWaitlistModal(true)}
                className="w-full rounded-lg bg-orange-500 px-8 py-4 text-base font-medium text-white hover:bg-opacity-90 sm:w-auto"
              >
                Join Our Exclusive Waitlist
              </button>
              <button 
                onClick={() => setShowSubscribeModal(true)}
                className="w-full rounded-lg bg-white px-8 py-4 text-base font-medium text-gray-900 hover:bg-opacity-90 sm:w-auto"
              >
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ theme }) => {
  return (
    <footer className="relative z-10 bg-white pt-16 pb-10 lg:pt-24 lg:pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12">
            <div className="mb-10 w-full">
              <Link href="/#" className="mb-6 inline-block">
                <h1 className={`text-2xl font-bold ${theme === 'black' ? 'text-black' : `text-${theme}-600`}`}>
                  BizGuard AI
                </h1>
              </Link>
              <p className="mb-7 text-base text-gray-700">
                Your Interactive, AI-Powered Accounting Agent
              </p>
            </div>
          </div>
          
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Navigation</h4>
              <ul>
                <li>
                  <Link href="/#" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Legal</h4>
              <ul>
                <li>
                  <Link href="/#" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="mb-3 inline-block text-base text-gray-700 hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark">Contact</h4>
              <ul>
                <li className="mb-3 flex items-center text-base text-gray-700">
                  <span className="mr-3">
                    <svg 
                      className="h-5 w-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                  <span>info@bizguardai.com</span>
                </li>
                <li className="mb-3 flex items-center text-base text-gray-700">
                  <span className="mr-3">
                    <svg 
                      className="h-5 w-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                  <span>+91-XXXX-XXXXXX</span>
                </li>
              </ul>
              <div className="mt-8 flex items-center">
                <span className="mr-4">Follow us:</span>
                <div className="flex space-x-4">
                  <Link href="/#" className={`h-8 w-8 flex items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white hover:bg-opacity-90`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                    </svg>
                  </Link>
                  <Link href="/#" className={`h-8 w-8 flex items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white hover:bg-opacity-90`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </Link>
                  <Link href="/#" className={`h-8 w-8 flex items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white hover:bg-opacity-90`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </Link>
                  <Link href="/#" className={`h-8 w-8 flex items-center justify-center rounded-full ${theme === 'black' ? 'bg-black' : `bg-${theme}-600`} text-white hover:bg-opacity-90`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-t-gray-200 pt-6">
          <p className="text-center text-base text-gray-600">
            &copy; {new Date().getFullYear()} BizGuard AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Theme selector component
const ThemeSelector = ({ theme, setTheme }) => {
  const themes = [
    { name: 'Black', value: 'black' },
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Purple', value: 'purple' },
    { name: 'Red', value: 'red' }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-sm mb-2 font-medium">Theme Color:</p>
        <div className="flex space-x-2">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`w-6 h-6 rounded-full ${t.value === 'black' ? 'bg-black' : `bg-${t.value}-600`} ${theme === t.value ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
              title={t.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Landing Page Component
const BizGuardAILandingPage = () => {
  const [theme, setTheme] = useState('black'); // Default theme

  return (
    <div>
      <Header theme={theme} />
      <Hero theme={theme} />
      <Features theme={theme} />
      <HowItWorks theme={theme} />
      <Approach theme={theme} />
      <FAQ theme={theme} />
      <CTA theme={theme} />
      <Footer theme={theme} />
      <ThemeSelector theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default BizGuardAILandingPage;
