import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "../data/mock";
import { Card, CardContent } from "./ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

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

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setCurrent(idx);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50/60"
    >
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
              Testimonials
            </span>
            <div className="w-10 h-[2px] bg-teal-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by Global Partners
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-lg">
            Hear what our international distribution and manufacturing
            partners have to say about working with Spectrum Formulation.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border border-slate-200/80 bg-white shadow-lg">
            <CardContent className="p-8 sm:p-10">
              <Quote className="w-10 h-10 text-teal-200 mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                  <p className="text-sm text-teal-700 font-medium">{t.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-teal-600 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
