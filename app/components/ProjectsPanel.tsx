"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Card from "./Card";

interface ProjectItem {
  id: string;
  title: string;
  secondaryTitle: string;
  year: string;
  link: string;
  thumbnail: string;
  shortDescription: string;
  details: string;
  tech: string[];
}

const projects: ProjectItem[] = [
  {
    id: "weinfuse",
    title: "WeInfuse",
    secondaryTitle: "UI/UX Developer",
    year: "Present",
    link: "https://www.weinfuse.com",
    thumbnail: "/weinfuse.png",
    shortDescription: "Infusion workflow software solution",
    details:
      "Leading comprehensive UI/UX improvements across multiple core modules including patient flow, pharmacy, and claims management. Standardizing UI elements, styles, and components by leveraging Material-UI (MUI) and developing custom components to ensure consistency and maintainability. \n \n Created a component library using Ladle along with comprehensive UI documentation to serve as a single source of truth for design standards across teams.",
    tech: ["React", "JavaScript", "Ladle", "Material UI", "AngularJS", "Ruby on Rails", "Claude"],
  },
  {
    id: "gm",
    title: "General Motors",
    secondaryTitle: "Software Developer",
    year: "2020 - 2025",
    link: "https://shop.onstar.com/",
    thumbnail: "/onstar.png",
    shortDescription: "OnStar eCommerce shopping experience",
    details:
      "Supported migration of OnStar’s in-house eCommerce platform to Shopify. Built custom eCommerce features using Hydrogen stack (React-based). Creating custom sections, product templates, and dynamic content via Shopify admin.\n \n Built new UI Owner Center features and page redesigns in Angular for key pages, such as Checkout and Payment flows, to improve and simplify the customer shopping experience.",
    tech: ["Angular", "React", "TypeScript", "RxJS", 'Accessibility', 'eCommerce', 'BFF API pattern', "Bootstrap", "Tailwind CSS"],
  },
  {
    id: "vsoft",
    title: "VSoft",
    secondaryTitle: "Product Designer",
    year: "2019 - 2020",
    link: "https://www.vsoftcorp.com/",
    thumbnail: "/vsoft.png",
    shortDescription: "Digital banking and real-time payments",
    details:
      "Designed mobile centric UI for VSoft’s digital payment solutions: ACH, Positive Pay, Wire Transfer, and a Peer-to-Peers. \n \n Developed positive user flows and interactive prototypes for management & development. Documented finalized designs that described use cases, user flows, and style guides.",
    tech: ["Adobe XD", "Android Material Design", "iOS SwiftUI"],
  }
];

export default function ProjectsPanel() {
  const [selectedId, setSelectedId] = useState<string | null>(projects[0].id);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [selectedId],
  );

  return (
    <Card className="cards-reveal flex h-full w-full flex-col overflow-hidden">
      <div className="border-b border-[#EEE9EF] px-6 py-5 dark:border-[#393439]">
        <h2 className="mt-1 font-[family-name:var(--font-lato)] text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFEFD]">
          My Stuff
        </h2>
      </div>

      <div className="grid min-h-0 flex-1 gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="min-h-0 overflow-y-auto border-b border-[#EEE9EF] md:border-b-0 md:border-r dark:border-[#393439]">
          {projects.map((project) => {
            const isSelected = project.id === selectedId;

            return (
              <div key={project.id} className="border-b border-[#EEE9EF] last:border-b-0 dark:border-[#393439]">
                <button
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  aria-expanded={isSelected}
                  className={`w-full px-6 py-4 text-left transition-colors ${
                    isSelected
                      ? "bg-[#994EA8]/10 dark:bg-[#994EA8]/20"
                      : "hover:bg-[#994EA8]/5 dark:hover:bg-[#994EA8]/10"
                  }`}
                >
                  <p className="font-[family-name:var(--font-lato)] text-sm font-bold text-[#1A1A1A] dark:text-[#FFFEFD]">
                    {project.title}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#887F89] dark:text-[#BEB5C0]">
                    {project.secondaryTitle} • {project.year}
                  </p>
                  <p className="mt-1 hidden text-sm text-[#756D77] dark:text-[#D3CAD5] md:block">
                    {project.shortDescription}
                  </p>
                </button>

                {isSelected && (
                  <div className="px-6 pb-4 md:hidden">
                    <div className="relative mt-4 w-full overflow-hidden rounded-xl bg-[#F3ECF4] dark:bg-[#332D34]">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        width={1200}
                        height={675}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-[#824092] underline decoration-[#C7AFCB] underline-offset-4 transition-colors hover:text-[#5E2B6A] dark:text-[#D6A8DE] dark:decoration-[#806887] dark:hover:text-[#F0D8F3]"
                    >
                      View
                    </a>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#5F5861] dark:text-[#D3CAD5]">
                      {project.details}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#F3ECF4] px-3 py-1 text-xs font-semibold tracking-wide text-[#584B5B] dark:bg-[#39313B] dark:text-[#E4D8E8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden min-h-0 overflow-y-auto px-6 py-5 md:block">
              <h3 className="font-[family-name:var(--font-lato)] text-xl font-bold text-[#1A1A1A] dark:text-[#FFFEFD]">
                {selectedProject.title}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#887F89] dark:text-[#BEB5C0]">
                {selectedProject.secondaryTitle} • {selectedProject.year}
              </p>
              <div className="relative mt-4 w-full overflow-hidden rounded-xl bg-[#F3ECF4] dark:bg-[#332D34]">
                <Image
                  src={selectedProject.thumbnail}
                  alt={`${selectedProject.title} thumbnail`}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                />
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#824092] underline decoration-[#C7AFCB] underline-offset-4 transition-colors hover:text-[#5E2B6A] dark:text-[#D6A8DE] dark:decoration-[#806887] dark:hover:text-[#F0D8F3]"
              >
                View
              </a>
              <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-[#5F5861] dark:text-[#D3CAD5]">
                {selectedProject.details}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#F3ECF4] px-3 py-1 text-xs font-semibold tracking-wide text-[#584B5B] dark:bg-[#39313B] dark:text-[#E4D8E8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
        </div>
      </div>
    </Card>
  );
}
