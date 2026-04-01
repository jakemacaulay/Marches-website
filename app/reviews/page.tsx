"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    rating: 5,
    date: "March 15, 2026",
    comment: "Marchy's team did an incredible job on our composite deck. The attention to detail and professional communication made the whole process stress-free. Highly recommend!"
  },
  {
    id: 2,
    name: "Mike Robertson",
    rating: 5,
    date: "February 28, 2026",
    comment: "Fast, reliable, and high-quality work. They transformed our backyard into a beautiful outdoor space. Best deck builders in Halifax."
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 4,
    date: "January 12, 2026",
    comment: "Very happy with our new pressure-treated deck. The crew was professional and cleaned up thoroughly after the job. Excellent craftsmanship."
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rating || !comment) return;

    const newReview: Review = {
      id: Date.now(),
      name,
      rating,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      comment
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setRating(0);
    setComment("");
    alert("Thank you for your review!");
  };

  return (
    <main className="min-h-screen bg-white text-[#041033]">
      <Navbar />

      <section className="relative bg-[#041033] px-6 py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,15,26,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Testimonials
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight sm:text-7xl">
              Customer <span className="text-[#d10f1a]">Reviews</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300">
              Hear from our clients across Nova Scotia about their experience building with Marchy's Custom Decks Inc.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-5">
          {/* Submission Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="sticky top-32 rounded-[3rem] border border-slate-100 bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
                <h2 className="mb-8 text-3xl font-black text-[#041033]">Leave a Review</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                          className="text-3xl transition-transform hover:scale-110 active:scale-95"
                        >
                          <svg
                            className={`h-8 w-8 ${
                              star <= (hoveredStar || rating) ? "text-[#d10f1a] fill-[#d10f1a]" : "text-slate-200"
                            }`}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-xs font-black uppercase tracking-widest text-slate-400">
                      Your Experience
                    </label>
                    <textarea
                      rows={5}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 font-medium text-[#041033] outline-none transition-all focus:border-[#d10f1a] focus:bg-white focus:ring-4 focus:ring-[#d10f1a]/5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#d10f1a] py-5 text-lg font-black text-white transition-all hover:bg-[#a00c14] hover:shadow-[0_15px_30px_-5px_rgba(209,15,26,0.3)] active:scale-95"
                  >
                    Post Review
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Review List */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal>
              <div className="flex items-center justify-between border-b border-slate-100 pb-8">
                <h2 className="text-3xl font-black text-[#041033]">Recent Feedback</h2>
                <p className="text-lg font-bold text-slate-400">{reviews.length} Reviews</p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8">
              {reviews.map((review, idx) => (
                <ScrollReveal key={review.id} delay={idx * 100}>
                  <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-[#d10f1a]/10 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${i < review.rating ? "text-[#d10f1a] fill-[#d10f1a]" : "text-slate-200"}`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-2xl font-black text-[#041033]">{review.name}</h3>
                        <p className="mt-4 text-lg font-medium leading-relaxed text-slate-500">
                          {review.comment}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-black uppercase tracking-widest text-slate-400">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
