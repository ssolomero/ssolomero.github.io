"use client";

import { useState } from "react";
import AboutCard from "./components/AboutCard";
import ProjectsPanel from "./components/ProjectsPanel";
import QuestionStack from "./components/QuestionStack";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"profile" | "stuff">("profile");

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#f4f5ef] pt-6 sm:p-8 sm:pt-32 dark:bg-[#1A1A1A]">
      <div className="w-full max-w-[1280px]">
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-[#FFFEFD] p-1 shadow-sm dark:bg-[#292629] lg:hidden">
          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`flex-1 rounded-lg px-3 py-2 font-[family-name:var(--font-lato)] text-sm font-bold transition-colors ${
              activeTab === "profile"
                ? "bg-[#994EA8] text-white"
                : "text-[#756D77] dark:text-[#D3CAD5]"
            }`}
            aria-pressed={activeTab === "profile"}
          >
            Profile
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("stuff")}
            className={`flex-1 rounded-lg px-3 py-2 font-[family-name:var(--font-lato)] text-sm font-bold transition-colors ${
              activeTab === "stuff"
                ? "bg-[#994EA8] text-white"
                : "text-[#756D77] dark:text-[#D3CAD5]"
            }`}
            aria-pressed={activeTab === "stuff"}
          >
            My Stuff
          </button>
        </div>

      <main className="flex w-full max-w-[1280px] flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center">
        <div
          className={`${
            activeTab === "profile" ? "flex" : "hidden"
          } flex-col items-center gap-6 lg:flex`}
        >
          <AboutCard />
          <div className="cards-reveal" style={{ animationDelay: "1200ms" }}>
            <QuestionStack />
          </div>
        </div>

        <div
          className={`${
            activeTab === "stuff" ? "block" : "hidden"
          } w-full max-w-[800px] lg:block lg:max-w-none`}
        >
          <ProjectsPanel />
        </div>
      </main>
      </div>
    </div>
  );
}
