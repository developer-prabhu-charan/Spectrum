import React, { useEffect, useRef } from "react";
import { trustBadges } from "../data/mock";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden hero-section">

      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/40" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14,116,144,0.04) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200/60 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                WHO-GMP Certified Manufacturer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              WHO-Approved{" "}
              <span className="text-teal-700">Pharmaceutical</span>{" "}
              Manufacturing Partner from India
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg">
              Trusted pharma manufacturer with 500+ SKUs across beta &
              non-beta segments. Delivering quality-driven pharmaceutical
              solutions to partners worldwide.
            </p>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) =>
              <div
                key={i}
                className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white rounded-lg border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300">

                  <badge.icon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">
                    {badge.label}
                  </span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 h-12 rounded-lg text-sm transition-colors duration-200 shadow-lg shadow-teal-600/20">

                Send Enquiry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("products")}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-semibold px-7 h-12 rounded-lg text-sm transition-colors duration-200">

                View Product Categories
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="hero-visual relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-100/30 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80"
                alt="Pharmaceutical Manufacturing Facility"
                className="relative rounded-2xl shadow-2xl shadow-slate-200/50 w-full h-[460px] object-cover" />

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                  <span className="text-teal-700 font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Years of</p>
                  <p className="text-xs text-slate-500">Manufacturing Excellence</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-xs font-bold">WHO</span>
                </div>
                <span className="text-xs font-semibold text-slate-700 pr-1">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-xs text-slate-500 font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-400 animate-bounce" />
      </div>
    </section>);

};