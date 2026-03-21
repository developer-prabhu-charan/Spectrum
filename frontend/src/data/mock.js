import {
  ShieldCheck,
  Package,
  Factory,
  Globe,
  FlaskConical,
  Users,
  Award,
  CheckCircle2,
  Microscope,
  Truck,
  ClipboardCheck,
  HeartPulse,
  Pill,
  Droplets,
  TestTube,
  Pipette,
  CircleDot,
  Syringe } from
"lucide-react";

// Hero trust badges
export const trustBadges = [
{ icon: ShieldCheck, label: "WHO Approved Facility" },
{ icon: Package, label: "2000+ SKUs" },
{ icon: Factory, label: "Beta & Non-Beta Manufacturing" },
{ icon: Globe, label: "Export Ready" }];


// About company stats
export const companyStats = [
{ value: "15+", label: "Years of Experience" },
{ value: "500+", label: "Product SKUs" },
{ value: "50+", label: "Countries Served" },
{ value: "100%", label: "WHO-GMP Compliant" }];


export const aboutText = {
  title: "About Spectrum Formulation",
  subtitle: "Trusted Pharmaceutical Manufacturing Excellence from India",
  description:
  "Spectrum Formulation Private Limited is a leading pharmaceutical manufacturing company headquartered in Uttarakhand, India. Operating from a WHO-approved facility, we have established ourselves as a well-known manufacturing brand in India with an unwavering focus on quality, compliance, and scalability.",
  description2:
  "Our state-of-the-art manufacturing plant is equipped with modern machinery and maintained under stringent quality control protocols. We specialize in both beta-lactam and non-beta-lactam product segments, offering a comprehensive portfolio of over 500 SKUs to meet the diverse needs of our global partners."
};

// Product categories
export const productCategories = [
{
  id: "tablets",
  name: "Tablets",
  icon: Pill,
  description: "Wide range of tablets including film-coated, sugar-coated, and sustained-release formulations.",
  image: "https://images.pexels.com/photos/7230192/pexels-photo-7230192.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our tablet manufacturing division produces a comprehensive range of pharmaceutical tablets utilizing advanced compression and coating technologies. We offer film-coated, sugar-coated, enteric-coated, and sustained-release tablet formulations.",
  dosageForms: ["Film-Coated Tablets", "Sugar-Coated Tablets", "Enteric-Coated Tablets", "Sustained-Release Tablets", "Chewable Tablets", "Effervescent Tablets"],
  betaAvailable: true,
  nonBetaAvailable: true,
  capabilities: ["High-speed tablet compression", "Automatic coating systems", "Blister & strip packaging", "Batch sizes from 50K to 5M tablets"],
  compliance: ["WHO-GMP certified production lines", "In-process quality checks at every stage", "Stability studies as per ICH guidelines", "Complete batch documentation & traceability"]
},
{
  id: "capsules",
  name: "Capsules",
  icon: CircleDot,
  description: "Hard gelatin and vegetarian capsules with precision filling and quality assurance.",
  image: "https://images.pexels.com/photos/11589213/pexels-photo-11589213.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our capsule manufacturing facility is equipped with automatic capsule filling machines capable of producing hard gelatin and HPMC (vegetarian) capsules. We handle powder, pellet, and granule fills with exceptional uniformity.",
  dosageForms: ["Hard Gelatin Capsules", "HPMC Vegetarian Capsules", "Enteric-Coated Capsules", "Pellet-Filled Capsules"],
  betaAvailable: true,
  nonBetaAvailable: true,
  capabilities: ["Automatic capsule filling lines", "Pellet & granule filling", "Capsule polishing & sorting", "Blister & bottle packaging"],
  compliance: ["WHO-GMP compliant manufacturing", "Weight variation testing", "Dissolution profiling", "Microbial limit testing"]
},
{
  id: "liquid-orals",
  name: "Liquid Orals",
  icon: Droplets,
  description: "Syrups, suspensions, and solutions manufactured in controlled environments.",
  image: "https://images.pexels.com/photos/7231210/pexels-photo-7231210.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our liquid oral manufacturing section produces a wide variety of syrups, suspensions, and oral solutions in a temperature-controlled, hygiene-maintained environment. All liquid products undergo rigorous quality testing before release.",
  dosageForms: ["Syrups", "Suspensions", "Oral Solutions", "Oral Drops"],
  betaAvailable: false,
  nonBetaAvailable: true,
  capabilities: ["SS mixing & storage vessels", "Automatic liquid filling lines", "Bottle labeling & capping", "Batch sizes from 500L to 10,000L"],
  compliance: ["Controlled manufacturing environment", "pH & viscosity testing", "Preservative efficacy testing", "Shelf-life stability studies"]
},
{
  id: "dry-syrups",
  name: "Dry Syrups",
  icon: TestTube,
  description: "Powder for oral suspension with excellent taste masking and stability.",
  image: "https://images.pexels.com/photos/9574341/pexels-photo-9574341.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our dry syrup manufacturing caters to pediatric and adult formulations, offering powders for oral suspension with excellent taste masking, stability, and reconstitution properties.",
  dosageForms: ["Powder for Oral Suspension", "Granules for Reconstitution", "Flavored Dry Syrups"],
  betaAvailable: true,
  nonBetaAvailable: true,
  capabilities: ["Precision powder blending", "Automatic bottle filling", "Moisture-controlled environment", "Taste masking technology"],
  compliance: ["WHO-GMP compliant facility", "Moisture content analysis", "Reconstitution uniformity testing", "Accelerated stability studies"]
},
{
  id: "ointments-topicals",
  name: "Ointments & Topicals",
  icon: Pipette,
  description: "Creams, ointments, and gels with advanced dermatological formulations.",
  image: "https://images.pexels.com/photos/9574448/pexels-photo-9574448.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our topical manufacturing division produces a range of creams, ointments, gels, and lotions for dermatological, anti-fungal, anti-inflammatory, and cosmeceutical applications using state-of-the-art emulsification technology.",
  dosageForms: ["Creams", "Ointments", "Gels", "Lotions", "Medicated Pastes"],
  betaAvailable: false,
  nonBetaAvailable: true,
  capabilities: ["Vacuum homogenizer mixing", "Tube & jar filling lines", "Automated labeling systems", "Temperature-controlled storage"],
  compliance: ["Dermatological safety testing", "Spreadability & viscosity checks", "Microbial purity testing", "ICH stability protocols"]
},
{
  id: "injectables",
  name: "Injectables",
  icon: Syringe,
  description: "Sterile injectable formulations manufactured in controlled aseptic environments.",
  image: "https://images.pexels.com/photos/7231210/pexels-photo-7231210.jpeg?auto=compress&cs=tinysrgb&w=600",
  overview: "Our injectable manufacturing division operates in a state-of-the-art aseptic facility designed to produce sterile parenteral formulations. We manufacture ampoules, vials, and pre-filled syringes under stringent clean room conditions with advanced sterilization protocols.",
  dosageForms: ["Ampoules", "Vials (Liquid)", "Vials (Lyophilized / Dry Powder)", "Pre-Filled Syringes", "Infusion Solutions"],
  betaAvailable: true,
  nonBetaAvailable: true,
  capabilities: ["Aseptic filling lines", "Terminal sterilization (autoclave)", "Lyophilization (freeze-drying)", "Clean room Class 100 / ISO 5 environment"],
  compliance: ["WHO-GMP certified sterile manufacturing", "Particulate matter & sterility testing", "Endotoxin (LAL) testing", "Container closure integrity testing"]
}];


// Why Choose Us points
export const whyChooseUs = [
{
  icon: ShieldCheck,
  title: "WHO-Approved Facility",
  description: "Manufacturing operations conducted in a fully WHO-GMP certified facility ensuring global quality standards."
},
{
  icon: Package,
  title: "500+ Product Portfolio",
  description: "Comprehensive range of over 500 SKUs across multiple therapeutic categories and dosage forms."
},
{
  icon: Users,
  title: "Experienced Technical Team",
  description: "Seasoned pharmaceutical professionals with decades of combined experience in formulation and manufacturing."
},
{
  icon: Microscope,
  title: "Strong Quality Control & QA",
  description: "Rigorous quality assurance protocols with in-house testing laboratory and NABL-grade equipment."
},
{
  icon: Globe,
  title: "Export-Oriented Manufacturing",
  description: "Products manufactured to meet international pharmacopeial standards for global distribution."
},
{
  icon: Truck,
  title: "Reliable Supply & Compliance",
  description: "Consistent supply chain with full regulatory documentation support for seamless market entry."
}];


// Testimonials
export const testimonials = [
{
  name: "James Richardson",
  company: "MedPharma Distributors, UK",
  role: "Managing Director",
  text: "Spectrum Formulation has been our trusted manufacturing partner for over 5 years. Their consistent quality, timely delivery, and regulatory compliance make them an ideal choice for international pharma sourcing.",
  rating: 5
},
{
  name: "Ahmed Al-Rashid",
  company: "Gulf Healthcare Trading, UAE",
  role: "Procurement Head",
  text: "We have sourced multiple product categories from Spectrum and have always been impressed with their WHO-GMP facility, documentation standards, and the professionalism of their technical team.",
  rating: 5
},
{
  name: "Maria Santos",
  company: "LatAm Pharma Solutions, Brazil",
  role: "Import Manager",
  text: "The product quality from Spectrum Formulation is exceptional. Their ability to handle both beta and non-beta manufacturing under one roof gives us tremendous flexibility in our product portfolio.",
  rating: 5
},
{
  name: "David Kimani",
  company: "AfriMed Pharmaceuticals, Kenya",
  role: "CEO",
  text: "Spectrum Formulation has been instrumental in helping us build a reliable pharmaceutical supply chain. Their export documentation and regulatory support have been outstanding throughout our partnership.",
  rating: 5
}];


// Contact form categories
export const enquiryCategories = [
"Tablets",
"Capsules",
"Liquid Orals",
"Dry Syrups",
"Ointments & Topicals",
"Injectables",
"Contract Manufacturing",
"Multiple Categories"];


// Navigation links
export const navLinks = [
{ label: "Home", href: "/" },
{ label: "About", href: "/about" },
{ label: "Products", href: "/#products" },
{ label: "Why Us", href: "/#why-us" },
{ label: "Testimonials", href: "/#testimonials" },
{ label: "Contact", href: "/#contact" }];


// Footer data
export const footerData = {
  companyName: "Spectrum Formulation Pvt. Ltd. \u2014 A leading WHO-approved pharmaceutical manufacturer from Uttarakhand, India serving global healthcare partners.",
  address: "12, Bhagwanpur - Haridwar Road, Makhanpur, Roorkee, Uttarakhand 247661",
  email: "spectrumcure@gmail.com",
  phone: "7037008882",
  compliance: "WHO-Approved Pharmaceutical Manufacturing Facility",
  quickLinks: [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" }],

  productLinks: [
  { label: "Tablets", href: "/category/tablets" },
  { label: "Capsules", href: "/category/capsules" },
  { label: "Liquid Orals", href: "/category/liquid-orals" },
  { label: "Dry Syrups", href: "/category/dry-syrups" },
  { label: "Ointments & Topicals", href: "/category/ointments-topicals" },
  { label: "Injectables", href: "/category/injectables" }]

};