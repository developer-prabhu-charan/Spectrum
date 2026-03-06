import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProductCategories } from "../components/ProductCategories";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { ContactForm } from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
