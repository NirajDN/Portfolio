"use client";
import { achievements } from "@/../utils/Data/achievements";
import { BsTrophy } from "react-icons/bs";
import { Calendar, Building2, ChevronRight } from "lucide-react";
import SectionReveal from "../SectionReveal";

function Achievements() {
  return (
    <div
      id="achievements"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600"></span>
          <span className="bg-[#050505] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-950 to-transparent opacity-30" />

        <div className="flex flex-col gap-16 lg:gap-24">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="relative">
              <SectionReveal direction={index % 2 === 0 ? "right" : "left"}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-xl bg-[#050505] border-2 border-red-600 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <BsTrophy className="text-red-600 w-5 h-5" />
                  </div>

                  {/* Date Badge (Mobile: visible, Desktop: visible) */}
                  <div
                    className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Calendar className="w-4 h-4 text-red-600" />
                      {achievement.duration}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 md:text-left`}>
                    <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl hover:shadow-red-600/10">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            {achievement.title}
                          </h3>
                          <div className="flex items-center gap-2 text-red-500 font-semibold">
                            <Building2 className="w-4 h-4" />
                            {achievement.company}
                          </div>
                        </div>

                        <div className="space-y-3 mt-2">
                          {achievement.details?.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex gap-3 items-start group/item"
                            >
                              <ChevronRight className="w-4 h-4 text-red-600 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                              <p className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Animated Glow Border (Hover) */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 via-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          ))}
        </div>

        {/* Holopin Badge */}
        <div className="flex justify-center mt-20 lg:mt-32">
          <SectionReveal direction="up">
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                My Holopin Badges
              </h3>
              <a
                href="https://holopin.io/@nirajdn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://holopin.me/nirajdn"
                  alt="An image of @nirajdn's Holopin badges, which is a link to view their full Holopin profile"
                  className="rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.2)] border border-white/10"
                />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
