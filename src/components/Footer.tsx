'use client';

import Link from 'next/link';
import Image from 'next/image';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px] py-4">
        <Link href="/" className="group relative z-30 flex items-center">
          <Image
            src={globalConfig.site.logo}
            alt={globalConfig.site.name}
            width={120}
            height={36}
            className="h-7 w-auto object-contain dark:brightness-110"
          />
        </Link>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0 text-center sm:text-left">
          {globalConfig.footer.copyright}
        </p>
        <span className="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href={`mailto:${globalConfig.footer.social.email}`} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">Email</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="tel:+21656102454" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">Téléphone</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </span>
      </div>
    </section>
  );
}
