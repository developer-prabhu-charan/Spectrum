import React from "react";
import { Link } from "react-router-dom";
import { footerData } from "../data/mock";
import { ShieldCheck } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_pharma-export-hub-1/artifacts/a7sadan1_Logo%201.png"
                alt="Spectrum Formulation"
                className="h-12 w-auto object-contain" />

            </div>
            <p className="!text-sm text-slate-400">
              {footerData.companyName}
            </p>
            <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="text-xs text-teal-300 font-medium">
                {footerData.compliance}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerData.quickLinks.map((link) =>
              <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {footerData.productLinks.map((link) =>
              <li key={link.label}>
                  <Link
                  to={link.href}
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="!text-sm text-slate-400">{footerData.address}</li>
              <li>
                <a
                  href={`mailto:${footerData.email}`}
                  className="hover:text-teal-300 transition-colors duration-200 !text-sm text-teal-400">

                  {footerData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerData.phone}`}
                  className="!text-sm text-slate-400 hover:text-teal-300 transition-colors duration-200"
                >
                  {footerData.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerData.phone2}`}
                  className="!text-sm text-slate-400 hover:text-teal-300 transition-colors duration-200"
                >
                  {footerData.phone2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-10 mb-6 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Spectrum Formulation Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Pharmaceutical Manufacturing Excellence from India
          </p>
        </div>
      </div>
    </footer>);

};