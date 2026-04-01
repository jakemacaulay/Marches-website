"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#041033] selection:bg-[#d10f1a]/10">
      <Navbar />

      <section className="relative h-[95vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#041033]/60 via-[#041033]/40 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,16,51,0.4)_100%)]" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d10f1a] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d10f1a]"></span>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Locally Owned & Operated Since 2024
              </p>
            </div>

            <h1 className="text-balance mb-8 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
              Crafting <span className="text-[#d10f1a]">Outdoor</span> Excellence.
            </h1>

            <p className="mb-10 max-w-xl text-lg font-medium text-slate-200 sm:text-xl">
              Marchy&apos;s Custom Decks Inc. transforms your vision into reality with premium materials and unmatched craftsmanship.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#d10f1a] px-8 py-4 font-bold text-white transition-all hover:bg-[#a00c14] hover:shadow-[0_0_20px_rgba(209,15,26,0.4)] active:scale-95"
              >
                Get a Free Quote
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="/projects"
                className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-6 w-[1px] bg-white/50" />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-32">
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
                Our Expertise
              </p>
              <h2 className="text-4xl font-black tracking-tight text-[#041033] sm:text-5xl lg:text-6xl">
                Professional Building Services
              </h2>
            </div>
            <p className="max-w-sm text-lg font-medium text-slate-500">
              From custom deck designs to full residential renovations, we handle every detail with precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Custom Decks",
              desc: "Pressure-treated, composite, and custom-designed decks built for durability and modern style.",
              icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            },
            {
              title: "Renovations",
              desc: "Complete exterior updates and residential improvements delivered with clean, professional finishes.",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            },
            {
              title: "New Construction",
              desc: "Reliable building work focused on structural integrity, safety, and long-term aesthetic value.",
              icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            },
            {
              title: "Siding Packages",
              desc: "High quality siding, soffit and fascia installation with premium finishes to protect and improve the look of your home.",
              icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            },
            {
              title: "Garage Builds",
              desc: "Custom-sized detached and attached garages built with precision, from foundation to roof.",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            },
            {
              title: "Windows & Doors",
              desc: "Expert installation of energy-efficient windows and secure, stylish entry doors for lasting performance.",
              icon: "M10 21V10M10 21H3V10H10M10 21H17V10H10M10 10V3H3V10H10M10 10V3H17V10H10"
            },
            {
              title: "Demolition & Disposal",
              desc: "Safe tear-downs, site clearing, and responsible waste removal for any residential project.",
              icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            }
          ].map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="group h-full relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#d10f1a]/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-[#d10f1a] transition-colors group-hover:bg-[#d10f1a] group-hover:text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-black text-[#041033]">{service.title}</h3>
                <p className="text-lg leading-relaxed text-slate-500">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#fcfdfe] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-20 flex flex-col items-center text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
                Portfolio
              </p>
              <h2 className="text-4xl font-black tracking-tight text-[#041033] sm:text-6xl">
                Featured Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: "/project2.jpeg", title: "Composite Deck", tag: "Deck" },
              { img: "/project3.jpeg", title: "Pressure Treated Deck", tag: "Deck" },
              { img: "/project4.jpeg", title: "New Build", tag: "Construction" },
              { img: "/project5.png", title: "Siding Package", tag: "Siding" },
              { img: "/project6.png", title: "Garage Build", tag: "Construction" },
              { img: "/project7.png", title: "Demolition & Disposal", tag: "Demo" },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i % 3 * 100}>
                <Link href="/projects" className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-200">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041033] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d10f1a]">{p.tag}</p>
                    <h3 className="text-2xl font-black text-white">{p.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-lg font-black text-[#041033] transition-colors hover:text-[#d10f1a]"
              >
                Explore All Projects
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <ScrollReveal>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square flex items-center justify-center">
               <Image
                  src="/logo.png"
                  alt="Marchy's Custom Decks Logo"
                  width={500}
                  height={500}
                  className="object-contain"
                />
            </div>
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
                The Marchy Way
              </p>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-[#041033] sm:text-6xl">
                Built on Trust, Backed by Experience.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-500">
                As a locally-owned company, we take pride in honest work and reliable communication. Our goal is simple: deliver work we are proud to put our name on.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                <div>
                  <p className="text-3xl font-black text-[#041033]">2024</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Established</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#041033]">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Quality Focused</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="quote" className="px-6 py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#041033] p-12 text-center text-white sm:p-24 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,15,26,0.15),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-balance mb-8 text-4xl font-black tracking-tight sm:text-6xl">
                Ready to build your dream outdoor space?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#d10f1a] px-10 py-5 text-lg font-black transition-all hover:bg-[#a00c14] hover:scale-105 active:scale-95"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:9022232671"
                  className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-black backdrop-blur-md transition-all hover:bg-white/10"
                >
                  (902) 223-2671
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  );
}
