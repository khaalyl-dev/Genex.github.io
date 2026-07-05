'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { homeConfig } from '@/config/home';

function ThemeAwareLogo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <Image
        src="/assets/images/logo-genex.png"
        alt="GX GENEX"
        width={320}
        height={100}
        className="relative z-10 w-72 h-auto object-contain animate-[float_6s_ease-in-out_infinite]"
        priority
      />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}

export default function HomeContent() {
  return (
    <div className="flex-1 flex items-center" style={{ transform: 'translateY(-50px)' }}>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        <div className="w-full lg:w-[55%] text-left">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {homeConfig.greeting}
          </h1>
          <p className="mt-3 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
            {homeConfig.description}
          </p>
          <div className="flex flex-row flex-wrap gap-4 mt-6">
            <Link
              href="/projects/"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {homeConfig.buttons.viewProjects}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {homeConfig.buttons.readPosts}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex items-center justify-center bg-transparent">
          <ThemeAwareLogo />
        </div>
      </div>
    </div>
  );
}
