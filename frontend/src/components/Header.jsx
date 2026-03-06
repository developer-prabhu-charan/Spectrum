import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/mock";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://customer-assets.emergentagent.com/job_pharma-export-hub-1/artifacts/s2x1geao_logo.png"
              alt="Spectrum Formulation"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 rounded-md transition-colors duration-200 hover:bg-teal-50/60"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 rounded-md transition-colors duration-200 hover:bg-teal-50/60"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 h-10 rounded-lg transition-colors duration-200">
                Send Enquiry
              </Button>
            </a>
            <button
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100 mt-1 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")} className="mt-2 px-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold h-10 rounded-lg">
                  Send Enquiry
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
