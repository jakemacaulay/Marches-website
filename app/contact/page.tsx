"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const [state, setState] = useState<{
    submitting: boolean;
    succeeded: boolean;
    errors: string | null;
  }>({
    submitting: false,
    succeeded: false,
    errors: null
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, submitting: true });
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mreokdee", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: null });
      } else {
        setState({ submitting: false, succeeded: false, errors: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, errors: "Network error. Please try again." });
    }
  };

  if (state.succeeded) {
    return (
      <main className="min-h-screen bg-white text-[#041033]">
        <Navbar />
        <section className="px-6 py-32 flex items-center justify-center min-h-[70vh]">
          <ScrollReveal>
            <div className="text-center max-w-xl p-12 rounded-[3rem] bg-slate-50">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-black mb-4">Request Received!</h2>
              <p className="text-xl text-slate-500 mb-10">Thank you for reaching out. We've received your project details and will get back to you shortly.</p>
              <button 
                onClick={() => setState({ ...state, succeeded: false })}
                className="rounded-full bg-[#d10f1a] px-10 py-4 font-black text-white transition-all hover:bg-[#a00c14]"
              >
                Send Another Message
              </button>
            </div>
          </ScrollReveal>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#041033]">
      <Navbar />

      <section className="relative bg-[#041033] px-6 py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,15,26,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Connect
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-7xl">
              Get a <span className="text-[#d10f1a]">Free</span> Quote.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300">
              Let’s start building your vision. Tell us about your project and we’ll get back to you with a professional estimate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="rounded-[3rem] border border-slate-100 bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] sm:p-16">
                <h2 className="mb-10 text-3xl font-black text-[#041033]">Project Inquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                          <label htmlFor="name" className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                          Full Name
                          </label>
                          <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                          />
                      </div>

                      <div>
                          <label htmlFor="email" className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                          Email Address
                          </label>
                          <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                          />
                      </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                          <label htmlFor="phone" className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                          Phone Number
                          </label>
                          <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(902) 555-1234"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                          />
                      </div>

                      <div>
                          <label
                          htmlFor="projectType"
                          className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400"
                          >
                          Project Type
                          </label>
                          <select
                          id="projectType"
                          name="projectType"
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                          >
                          <option value="" disabled>Select project type</option>
                          <option value="deck">Custom Deck</option>
                          <option value="renovation">Renovation</option>
                          <option value="housing">New Construction</option>
                          <option value="siding">Siding Packages</option>
                          <option value="garage">Garage Builds</option>
                          <option value="windows_doors">Windows & Doors</option>
                          <option value="demolition">Demolition & Disposal</option>
                          <option value="other">Other</option>
                          </select>
                      </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your vision, dimensions, and preferred materials..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#d10f1a] px-10 py-5 text-lg font-black text-white transition-all hover:bg-[#a00c14] hover:shadow-[0_15px_30px_-5px_rgba(209,15,26,0.3)] active:scale-95 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {state.submitting ? 'Sending...' : 'Submit Request'}
                    {!state.submitting && (
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </button>

                  {state.errors && (
                    <p className="mt-4 text-red-600 font-bold">{state.errors}</p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-12">
              <div>
                <ScrollReveal>
                  <h3 className="mb-10 text-3xl font-black text-[#041033]">Why Partner With Us?</h3>
                </ScrollReveal>
                <div className="space-y-10">
                    {[
                        { title: "Superior Craftsmanship", desc: "We treat every project as if it were for our own home, ensuring personal care and total transparency." },
                        { title: "Uncompromising Quality", desc: "From structural framing to the final finish, we use premium materials and techniques that last for decades." },
                        { title: "Direct Communication", desc: "No middle-men. You work directly with our experienced builders throughout the entire process." },
                        { title: "Reliability & Experience", desc: "Proven track record of finishing projects on time and within budget. Numerous recommendations and high remarks." },
                        { title: "Safety & Professionalism", desc: "Marchys Custom Decks Inc. is fully licensed and insured, making sure your site is clean, professional and keeps clients mind at ease knowing it will be done right the first time." }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                          <div className="flex gap-6">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 font-black text-[#d10f1a]">
                                  0{i + 1}
                              </div>
                              <div>
                                  <h4 className="mb-2 text-xl font-black text-[#041033]">{item.title}</h4>
                                  <p className="text-lg font-medium leading-relaxed text-slate-500">{item.desc}</p>
                              </div>
                          </div>
                        </ScrollReveal>
                    ))}
                </div>
              </div>

              <ScrollReveal delay={500}>
                <div className="rounded-[2.5rem] bg-[#041033] p-10 text-white shadow-xl shadow-[#041033]/20">
                  <h4 className="mb-6 text-2xl font-black">Direct Contact</h4>
                  <div className="space-y-6">
                      <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <svg className="h-5 w-5 text-[#d10f1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                          </div>
                          <p className="font-black tracking-tight">(902) 223-2671</p>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <svg className="h-5 w-5 text-[#d10f1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                          </div>
                          <p className="font-black tracking-tight">MarchysCustom@gmail.com</p>
                      </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
