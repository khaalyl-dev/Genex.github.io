import Image from "next/image";
import { aboutConfig } from "@/config/about";

export default function AboutContent() {
  return (
    <section className="relative z-20 max-w-4xl mx-auto mt-32 mb-12 px-7 lg:px-0">
      <div className="relative z-20 w-full mx-auto lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {aboutConfig.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-3 sm:mt-4 lg:mt-6">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {aboutConfig.description}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {aboutConfig.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              <Image
                src={aboutConfig.image}
                alt="GX GENEX"
                width={280}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 gap-8">
        <div className="flex-1">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">
            {aboutConfig.experience.title}
          </h2>
          <div className="py-10">
            {aboutConfig.experience.items.map((item, index) => (
              <div key={index} className="pb-10 border-l border-gray-200 last:border-l-0 dark:border-neutral-700">
                <div className="relative flex flex-col justify-start pl-12">
                  <div className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">{item.period}</p>
                  <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{item.role}</h3>
                  <p className="mb-1 text-sm font-medium dark:text-neutral-300">{item.company}</p>
                  <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[360px]">
          <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">{aboutConfig.connect.title}</h2>
          <div className="py-[30px]">
            <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
              {aboutConfig.connect.description}
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Adresse :</strong> El Yasminette, Ben Arous
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Téléphone :</strong>{' '}
                <a href="tel:+21656102454" className="text-purple-600 underline">56 102 454</a>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Email :</strong>{' '}
                <a href={aboutConfig.connect.links.email.url} className="text-purple-600 underline">
                  {aboutConfig.connect.links.email.text}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
