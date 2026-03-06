import React, { useEffect, useRef, useState } from "react";
import { aboutText, companyStats } from "../data/mock";
import { Separator } from "./ui/separator";

export const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-teal-500" />
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
              About Us
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                {aboutText.title}
              </h2>
              <p className="mt-2 text-lg text-teal-700 font-medium">
                {aboutText.subtitle}
              </p>
              <p className="mt-6 text-slate-600 leading-relaxed">
                {aboutText.description}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {aboutText.description2}
              </p>
            </div>

            {/* Right - Stats */}
            <div className="flex items-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                {companyStats.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-teal-50/50 hover:border-teal-200/50 transition-all duration-300 ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <span className="text-3xl font-extrabold text-teal-700">
                      {stat.value}
                    </span>
                    <p className="mt-1.5 text-sm text-slate-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mt-20 bg-slate-100" />
      </div>
    </section>
  );
};
