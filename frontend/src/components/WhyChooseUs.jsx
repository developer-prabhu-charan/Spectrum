import React, { useEffect, useRef, useState } from "react";
import { whyChooseUs } from "../data/mock";

export const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (element) observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-teal-500" />
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
              Why Choose Us
            </span>
            <div className="w-10 h-[2px] bg-teal-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Manufacturing Excellence You Can Trust
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-lg">
            Decades of pharmaceutical expertise, world-class infrastructure,
            and an unwavering commitment to quality set us apart.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-xl border border-slate-100 bg-white hover:bg-teal-50/40 hover:border-teal-200/60 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
