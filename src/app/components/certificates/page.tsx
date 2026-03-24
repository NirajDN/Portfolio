"use client";
import { certificates } from "@/../utils/Data/certificates";
import { BsPatchCheckFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "../SectionReveal";

function Certificates() {
  return (
    <div
      id="certificates"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600"></span>
          <span className="bg-[#050505] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, 3).map((cert) => (
            <SectionReveal key={cert.id} direction="up">
              <div className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl hover:shadow-red-600/10 h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-black/50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <BsPatchCheckFill className="absolute bottom-4 right-4 text-red-500 w-8 h-8 drop-shadow-lg" />
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-1">
                    {cert.description}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-4 pt-4 border-t border-white/10">
                    {cert.date}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="https://www.linkedin.com/posts/nirajdn_2025-certificates-ugcPost-7438822009108824064-wW1q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgGNPAB9rNQ0yrcgC-xZWkAgkdJMhwDzzk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
