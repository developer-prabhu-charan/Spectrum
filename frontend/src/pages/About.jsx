import React, { useEffect } from "react";
import { companyStats } from "../data/mock";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  ShieldCheck,
  Award,
  Factory,
  Users,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Globe,
  Microscope,
  FlaskConical,
  Building2,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <main className="pt-20 lg:pt-24">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-teal-500" />
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            About Spectrum Formulation
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
            A trusted WHO-approved pharmaceutical manufacturing company from
            Uttarakhand, India — delivering quality-driven healthcare
            solutions to partners across the globe.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                WHO-Approved Manufacturing Excellence
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Spectrum Formulation Private Limited is a premier pharmaceutical
                manufacturing company headquartered in Uttarakhand, India.
                Operating from a WHO-approved, state-of-the-art manufacturing
                facility, we have built a strong reputation as one of India's
                well-known pharmaceutical manufacturing brands.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our commitment to quality, compliance, and scalability has
                enabled us to serve a diverse portfolio of domestic and
                international clients — from pharma distributors and importers
                to contract manufacturing partners and healthcare businesses.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                With over 500 SKUs spanning both beta-lactam and non-beta-lactam
                segments, we offer comprehensive pharmaceutical manufacturing
                solutions across multiple dosage forms including tablets,
                capsules, liquid orals, dry syrups, and ointments & topicals.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 bg-teal-50/40 rounded-2xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80"
                alt="Spectrum Formulation Manufacturing Facility"
                className="relative rounded-2xl shadow-xl w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-slate-100 text-center hover:border-teal-200/60 hover:shadow-md transition-all duration-300"
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
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-slate-200/80 bg-white hover:shadow-lg hover:border-teal-200/60 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a trusted global pharmaceutical manufacturing partner
                  by consistently delivering high-quality, affordable, and
                  compliant pharmaceutical products. We aim to improve
                  healthcare accessibility across the world by empowering our
                  partners with a reliable and scalable manufacturing backbone.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200/80 bg-white hover:shadow-lg hover:border-teal-200/60 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To become one of India's most respected pharmaceutical
                  manufacturing companies — known for uncompromising quality,
                  innovation, and global compliance. We envision a future where
                  Spectrum Formulation is the first-choice manufacturing partner
                  for pharma businesses worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-16 lg:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-teal-500" />
              <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
                Our Strengths
              </span>
              <div className="w-10 h-[2px] bg-teal-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "WHO-GMP Approved Facility",
                desc: "Our manufacturing plant operates under WHO-GMP certification, ensuring every product meets the highest global quality and safety standards.",
              },
              {
                icon: Factory,
                title: "State-of-the-Art Infrastructure",
                desc: "Modern machinery, automated production lines, and climate-controlled environments across our beta and non-beta manufacturing blocks.",
              },
              {
                icon: FlaskConical,
                title: "Advanced R&D Capabilities",
                desc: "Our experienced formulation team drives continuous product development, ensuring innovative and market-ready pharmaceutical formulations.",
              },
              {
                icon: Microscope,
                title: "In-House Quality Control Lab",
                desc: "Fully equipped QC laboratory with NABL-grade instruments for comprehensive testing at every stage of manufacturing.",
              },
              {
                icon: Users,
                title: "Experienced Professional Team",
                desc: "Seasoned pharmaceutical professionals with decades of combined experience in formulation, production, quality assurance, and regulatory affairs.",
              },
              {
                icon: Globe,
                title: "Export-Ready Operations",
                desc: "Complete export documentation support, international pharmacopeial compliance, and scalable manufacturing to serve global markets efficiently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-slate-100 bg-white hover:bg-teal-50/40 hover:border-teal-200/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Manufacturing Capabilities
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Our facility houses dedicated production blocks for multiple
              dosage forms, enabling comprehensive pharmaceutical manufacturing
              under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Beta-Lactam Block", items: ["Dedicated isolated manufacturing area", "Separate HVAC and utilities", "Tablets, capsules, and dry syrups", "Strict cross-contamination controls"] },
              { title: "Non-Beta-Lactam Block", items: ["Multiple dosage form production lines", "Tablets, capsules, liquid orals, ointments", "High-capacity batch manufacturing", "Automated packaging systems"] },
              { title: "Quality Assurance", items: ["ICH guideline-based stability studies", "Complete batch documentation & BMR", "Vendor qualification programs", "Annual product quality reviews"] },
              { title: "Regulatory & Compliance", items: ["WHO-GMP certified operations", "International pharmacopeial standards (USP, BP, IP)", "Export dossier preparation support", "Regulatory filing assistance for global markets"] },
            ].map((block, i) => (
              <Card key={i} className="border border-slate-200/80 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {block.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-10 h-10 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Partner with Spectrum Formulation
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Looking for a reliable WHO-approved pharmaceutical manufacturing
            partner? Get in touch with our team to discuss your requirements.
          </p>
          <Button
            onClick={scrollToContact}
            className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 h-12 rounded-lg text-sm transition-colors duration-200 shadow-lg shadow-teal-600/15"
          >
            Send Enquiry
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
