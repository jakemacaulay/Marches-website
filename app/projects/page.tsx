"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function ProjectsPage() {
  const projects = [
    { src: "/project2.jpeg", title: "Backyard Composite Deck", tag: "Custom Deck", desc: "Clean lines, durable materials, and a modern outdoor finish." },
    { src: "/project3.jpeg", title: "Pressure Treated Pool Deck", tag: "Outdoor Pool Deck", desc: "A spacious layout designed to withstand weather, while remaining sleek." },
    { src: "/project4.jpeg", title: "New Construction Build", tag: "Renovation", desc: "Clean finishing work focused on function, appearance, and value." },
    { src: "/project5.png", title: "Siding Package", tag: "Residential Work", desc: "Reliable building work with strong attention to detail." },
    { src: "/project6.png", title: "Custom Garage Builds", tag: "Outdoor Living", desc: "Built to last all tests with space for clients, applications and design." },
    { src: "/project7.png", title: "Demolition & Disposal", tag: "Demo", desc: "We tear it down. We haul it away. You get a fresh start." },
    { src: "/project12.jpeg", title: "Pressure Treated Deck", tag: "Custom Deck", desc: "Elevate your outdoor living with pressure treated decks built beyond code and crafted to impress." },
    { src: "/project8.jpeg", title: "Composite Deck", tag: "Custom Deck", desc: "Transform the front of your home with a stunning new deck that will not only upgrade curb appeal but sustainability and durability" },
    { src: "/project9.jpeg", title: "Front Pergola", tag: "Custom Build", desc: "Transform the front of your home to allow comfortability for any weather scenario" },
    { src: "/project11.jpg", title: "Backyard Dream", tag: "Custom Build", desc: "Design a backyard built for entertaining. Where family, friends, and neighbours come together, and every gathering makes you the talk of the town." },
    { src: "/project13.jpeg", title: "Custom Features", tag: "Custom Build", desc: "Upgrade your yard with custom planter boxes and handcrafted outdoor features" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#041033]">
      <Navbar />

      <section className="relative bg-[#041033] px-6 py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,15,26,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Portfolio
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-7xl">
              Our <span className="text-[#d10f1a]">Featured</span> Work.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300">
              Explore our collection of custom decks, high-end renovations, and residential projects crafted with precision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 150}>
                <div
                  className="group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="mb-2 text-xs font-black uppercase tracking-widest text-[#d10f1a]">
                      {p.tag}
                    </p>
                    <h2 className="mb-4 text-2xl font-black text-[#041033]">{p.title}</h2>
                    <p className="mb-8 text-lg font-medium text-slate-500">
                      {p.desc}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 font-black text-[#041033] transition-colors hover:text-[#d10f1a]"
                    >
                      Discuss This Project
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-8 text-4xl font-black tracking-tight text-[#041033] sm:text-5xl">
                Ready to be our next project?
            </h2>
            <p className="mb-10 text-xl font-medium text-slate-500">
                Join our list of satisfied homeowners across Nova Scotia.
            </p>
            <Link
                href="/contact"
                className="inline-block rounded-full bg-[#d10f1a] px-10 py-5 text-lg font-black text-white transition-all hover:bg-[#a00c14] hover:scale-105 active:scale-95 shadow-xl shadow-[#d10f1a]/20"
            >
                Get Your Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
