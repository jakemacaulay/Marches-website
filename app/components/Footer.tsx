
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-12 pt-24 selection:bg-[#d10f1a]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                <Image
                src="/logo.png"
                alt="Marchy's Custom Decks Inc. logo"
                width={60}
                height={60}
                className="h-12 w-auto"
                />
                <div>
                <p className="text-xl font-black tracking-tight text-[#041033]">
                    Marchy&apos;s Custom Decks
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d10f1a]">
                    Locally Owned & Operated
                </p>
                </div>
            </Link>
            <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-slate-500">
              Transforming outdoor living spaces across Nova Scotia with premium craftsmanship, honest communication, and designs built to last.
            </p>
            <div className="mt-8 flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61564109684200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#041033] hover:bg-[#d10f1a] hover:text-white transition-all duration-300 group cursor-pointer"
                  aria-label="Follow us on Facebook"
                >
                    <svg className="h-6 w-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a 
                  href="https://www.instagram.com/marchycustomdecks/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#041033] hover:bg-[#d10f1a] hover:text-white transition-all duration-300 group cursor-pointer"
                  aria-label="Follow us on Instagram"
                >
                    <svg className="h-6 w-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4 text-lg font-bold text-slate-600">
              <Link href="/" className="transition-colors hover:text-[#041033]">Home</Link>
              <Link href="/#services" className="transition-colors hover:text-[#041033]">Services</Link>
              <Link href="/projects" className="transition-colors hover:text-[#041033]">Projects</Link>
              <Link href="/reviews" className="transition-colors hover:text-[#041033]">Reviews</Link>
              <Link href="/about" className="transition-colors hover:text-[#041033]">About Us</Link>
              <Link href="/contact" className="transition-colors hover:text-[#041033]">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-[#d10f1a]">
              Contact
            </h4>
            <div className="space-y-6 text-lg font-bold text-[#041033]">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Location</span>
                <p>Halifax, Nova Scotia</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Call Us</span>
                <p>(902) 223-2671</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Email</span>
                <p className="text-sm sm:text-lg">MarchysCustom@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-slate-100 pt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm font-bold text-slate-400">
            © 2026 Marchy&apos;s Custom Decks Inc. All rights reserved.
          </p>
          <p className="text-sm font-bold text-slate-400">
            Built with precision in Nova Scotia.
          </p>
        </div>
      </div>
    </footer>
  );
}
