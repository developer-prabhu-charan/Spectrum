import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "../data/mock";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  FlaskConical,
} from "lucide-react";

export default function CategoryDetail() {
  const { id } = useParams();
  const category = productCategories.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Category Not Found</h2>
          <Link to="/" className="mt-4 inline-block text-teal-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  // Get other categories for navigation
  const others = productCategories.filter((c) => c.id !== id);

  return (
    <main className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-slate-500 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/#products" className="text-slate-500 hover:text-teal-600 transition-colors">
              Products
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-800 font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-600 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Products
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-teal-700" />
                </div>
                <div className="flex gap-2">
                  {category.betaAvailable && (
                    <Badge variant="outline" className="border-teal-200 text-teal-700 bg-teal-50 text-xs">
                      Beta
                    </Badge>
                  )}
                  {category.nonBetaAvailable && (
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 text-xs">
                      Non-Beta
                    </Badge>
                  )}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {category.name}
              </h1>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                {category.overview}
              </p>

              <Button
                onClick={scrollToContact}
                className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 h-12 rounded-lg text-sm transition-colors duration-200 shadow-lg shadow-teal-600/15"
              >
                Request Product Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 bg-teal-50/40 rounded-2xl blur-xl" />
              <img
                src={category.image}
                alt={category.name}
                className="relative rounded-2xl shadow-xl w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="bg-slate-50/60 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Dosage Forms */}
            <Card className="border border-slate-200/80 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Dosage Forms Available</h3>
                </div>
                <ul className="space-y-2.5">
                  {category.dosageForms.map((form, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{form}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Manufacturing Capabilities */}
            <Card className="border border-slate-200/80 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Manufacturing Capabilities</h3>
                </div>
                <ul className="space-y-2.5">
                  {category.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{cap}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quality & Compliance */}
            <Card className="border border-slate-200/80 bg-white sm:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Quality & Compliance</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {category.compliance.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Interested in {category.name}?
          </h2>
          <p className="mt-3 text-slate-600">
            Get in touch with our export team for detailed product information,
            pricing, and manufacturing capabilities.
          </p>
          <Button
            onClick={scrollToContact}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 h-12 rounded-lg text-sm transition-colors duration-200 shadow-lg shadow-teal-600/15"
          >
            Request Product Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-14 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Explore Other Categories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((cat) => (
              <Link
                to={`/category/${cat.id}`}
                key={cat.id}
                className="group p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
