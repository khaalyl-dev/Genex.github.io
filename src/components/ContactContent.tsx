'use client';

import { contactConfig } from '@/config/contact';

export default function ContactContent() {
  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-32 mb-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {contactConfig.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
          {contactConfig.description}
        </p>
      </div>

      <div className="mt-12 max-w-xl">
        <div className="p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Coordonnées</h3>
          <dl className="space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${contactConfig.email}`} className="text-purple-600 hover:underline">
                  {contactConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">Téléphone</dt>
              <dd className="mt-1">
                <a href="tel:+21656102454" className="text-neutral-900 dark:text-neutral-100 hover:text-purple-600">
                  {contactConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">Adresse</dt>
              <dd className="mt-1 text-neutral-700 dark:text-neutral-300">{contactConfig.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
