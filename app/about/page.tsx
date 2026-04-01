"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  const values = [
    {
      title: "Quality Craftsmanship",
      desc: "We don't cut corners. From the foundation to the finishing nails, we use the best materials and techniques for every project.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Honest Communication",
      desc: "No surprises. We keep you updated at every stage of the build, ensuring the results align perfectly with your vision.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: "Customer Oriented",
      desc: "As a locally owned company, our name is on every job, we want to be proud of the work and outcome of every project.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#041033]">
      <Navbar />

      <section className="relative bg-[#041033] px-6 py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,15,26,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Our Story
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-7xl">
              Built on <span className="text-[#d10f1a]">Trust</span>, Focused on Excellence.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300">
              Marchy's Custom Decks Inc. was founded in 2024 to bring premium outdoor construction and renovations to homeowners across Nova Scotia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl">
                <Image
                  src="/project1.jpg"
                  alt="Crafting a custom deck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041033]/40 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="mb-8 text-4xl font-black tracking-tight text-[#041033] sm:text-6xl">
                  The Marchy Heritage.
                </h2>
                <p className="mb-6 text-xl font-medium leading-relaxed text-slate-500">
                At Marchy's Custom Decks Inc., we started with a simple idea: to help people make the most of their outdoor spaces. What began as a passion for craftsmanship and building quickly grew into a business dedicated to creating high quality, custom decks that bring families and friends together.
                We saw that many homeowners wanted more than just a basic structure. They wanted a space that felt like an extension of their home. That's why we founded Marchy's Custom Decks Inc. to deliver personalized designs, durable construction, and attention to detail that truly reflects each client's vision.
                Our company is built on hard work, honesty, and pride in every project we take on. From small backyard upgrades to large, fully customized outdoor living spaces, we focus on quality materials, skilled workmanship, and customer satisfaction from start to finish.
                At the end of the day, we're not just carpenters, we're building spaces where memories are made.

                </p>
                <p className="mb-10 text-xl font-medium leading-relaxed text-slate-500">
                  Based in Halifax, we serve the HRM and surrounding communities. We believe that every deck and renovation project is an investment in your home's value and your family's quality of life.
                </p>
                
                <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-10">
                  <div>
                    <p className="text-3xl font-black text-[#041033]">2024</p>
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">Debut Year</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#041033]">Halifax</p>
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">Home Base</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-32">
        <div className="mx-auto max-w-7xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Our Values
            </p>
            <h2 className="mb-16 text-4xl font-black tracking-tight text-[#041033] sm:text-6xl">
              What Drives Us Forward.
            </h2>
          </ScrollReveal>

          <div className="grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="group h-full relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#d10f1a]/20 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-[#d10f1a] transition-colors group-hover:bg-[#d10f1a] group-hover:text-white">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-[#041033]">{v.title}</h3>
                  <p className="text-lg font-medium leading-relaxed text-slate-500">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-10 text-4xl font-black tracking-tight text-[#041033] sm:text-6xl">
              Ready to Build Your Legacy?
            </h2>
            <p className="mb-12 text-xl font-medium leading-relaxed text-slate-500">
              Whether you're looking for a simple deck upgrade or a full-scale renovation, we're here to help you build something that lasts.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#d10f1a] px-10 py-5 text-lg font-black text-white transition-all hover:bg-[#a00c14] hover:scale-105 active:scale-95 shadow-xl shadow-[#d10f1a]/20"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-black transition-all hover:bg-slate-50"
              >
                See Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
