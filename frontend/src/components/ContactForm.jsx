import React, { useState, useEffect, useRef } from "react";
import { enquiryCategories } from "../data/mock";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from
  "./ui/select";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import axios from "axios";

const BACKEND_URL = "https://spectrum-t9s8.onrender.com";

export const ContactForm = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    country: "",
    phone: "",
    category: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.company_name || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      // Send enquiry to backend — backend handles WhatsApp notification
      await axios.post(`${BACKEND_URL}/api/enquiries`, {
        company_name: form.company_name,
        contact_person: form.contact_person,
        email: form.email,
        country: form.country,
        phone: form.phone,
        category: form.category,
        message: form.message,
      });
      toast.success("Enquiry submitted successfully! We will get back to you shortly.");
      setForm({
        company_name: "",
        contact_person: "",
        email: "",
        country: "",
        phone: "",
        category: "",
        message: ""
      });
    } catch (err) {
      console.error("WhatsApp trigger error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
          }>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-teal-500" />
            <span className="text-sm font-semibold text-teal-700 tracking-wide uppercase">
              Get In Touch
            </span>
            <div className="w-10 h-[2px] bg-teal-500" />
          </div>
          <h2 className="sm:text-4xl !font-bold !text-3xl text-slate-900">For Manufacturing Enquiries

          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-lg">
            Ready to partner with a WHO-approved manufacturer? Fill in the
            form below and our export team will respond within 24 hours.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
          }>

          {/* Contact info sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Address</p>
                    <p className="!text-sm text-slate-600">12, Bhagwanpur - Haridwar Road, Makhanpur, Roorkee, Uttarakhand 247661</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Email</p>
                    <p className="!text-sm text-teal-700">spectrumcure@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Phone / WhatsApp</p>
                    <p className="!text-sm text-slate-600">+91-99993-20932</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-teal-50/60 border border-teal-100">
              <p className="text-sm font-semibold text-teal-800 mb-1">
                For Export & Manufacturing Enquiries
              </p>
              <p className="!text-xs text-teal-700">We welcome enquiries from domestic and international pharma distributors, importers, export buyers, and contract manufacturing partners.


              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-white shadow-sm">

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="company_name" className="text-sm font-semibold text-slate-700">
                    Company Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company_name"
                    name="company_name"
                    value={form.company_name}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-11 rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact_person" className="text-sm font-semibold text-slate-700">
                    Contact Person
                  </Label>
                  <Input
                    id="contact_person"
                    name="contact_person"
                    value={form.contact_person}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="h-11 rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    className="h-11 rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-semibold text-slate-700">
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className="h-11 rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400" />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+XX-XXXXX-XXXXX"
                    className="h-11 rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400" />

                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-slate-700">
                    Product Category
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={(val) =>
                      setForm((prev) => ({ ...prev, category: val }))
                    }>

                    <SelectTrigger className="h-11 rounded-lg border-slate-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {enquiryCategories.map((cat) =>
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Message / Requirements
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, product interests, order volumes, etc."
                  rows={4}
                  className="rounded-lg border-slate-200 focus:border-teal-400 focus:ring-teal-400 resize-none" />

              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 h-12 rounded-lg text-sm transition-colors duration-200 shadow-lg shadow-teal-600/15">

                {submitting ? "Submitting..." : "Submit Enquiry"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>);

};