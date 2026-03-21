import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { productCategories } from "../data/mock";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const ProductCategories = () => {
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
    <section
      id="products"
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
              Our Products
            </span>
            <div className="w-10 h-[2px] bg-teal-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Product Categories
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive pharmaceutical manufacturing across multiple dosage
            forms, serving global healthcare needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat, i) => (
            <Link
              to={`/category/${cat.id}`}
              key={cat.id}
              className="group block"
            >
              <Card
                className={`overflow-hidden border border-slate-200/80 bg-white hover:shadow-xl hover:border-teal-200/60 transition-all duration-500 h-full ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-teal-700" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700">
                    View Details
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
