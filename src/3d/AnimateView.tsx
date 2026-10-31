import PerspectiveTunnelHero, { type TunnelItem } from "./perspective-tunnel-hero";
import SkillsSection from "./SkillSection";
import AboutSection from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
// import ClientsSection from "./ClientSection";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import InkOrbitFeatures from "./workflow-section";

/* ---------- Data ---------- */
const profile = {
  name: "Hemleen Francis",
  role: "Full-Stack Developer",
  tagline: "Passionate about creating beautiful, functional, and user-centered digital experiences",
  email: "hemleen7@gmail.com",
  phone: "+91 9629817352",
  location: "Coimbatore, Tamilnadu",
  response: "I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via phone.",
};
// const journey = [
//   "Started my coding journey in 2018 and have been building web applications ever since. I specialize in React, Node.js, and modern web technologies.",
//   "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.",
// ];
// const belief = "I believe in writing code that not only works but is also maintainable, scalable, and brings value to users.";

const heroItems: TunnelItem[] = [
  { title: "Frontend", label: " 5+ years" }, { title: "Backend", label: "5+ years" },
  { title: "Mobile App", label: "Mobile App" },
  { title: "Git Hub", label: "GitHub" }, { title: "Git", label: "Git" },
  { title: "UI", label: "2+ years" }, { title: "UX", label: "2+ years" }, { title: "Figma", label: "Figma" },
  { title: "Docker", label: "DevOps" },
];

// const aboutItems: TunnelItem[] = [
//   { title: "2018", label: "Started coding" }, { title: "React", label: "Specialty" }, { title: "Node.js", label: "Specialty" },
//   { title: "Web apps", label: "Building" }, { title: "Open source", label: "Contributing" }, { title: "Community", label: "Sharing" },
//   { title: "Maintainable", label: "Belief" }, { title: "Scalable", label: "Belief" }, { title: "Value", label: "Belief" },
// ];
// const principleItems: TunnelItem[] = [
//   { title: "Maintainable", label: "Principle" }, { title: "Scalable", label: "Principle" }, { title: "Valuable", label: "Principle" },
//   { title: "Typed", label: "TypeScript" }, { title: "Tested", label: "Jest" }, { title: "Fast", label: "Redis" },
//   { title: "Shipped", label: "Docker" }, { title: "Clean", label: "Code" }, { title: "Reliable", label: "Users" },
// ];
const contactItems: TunnelItem[] = [
  { title: "Email", label: "hemleen7" }, { title: "Phone", label: "+91" }, { title: "Coimbatore", label: "Location" },
  { title: "24h reply", label: "Response" }, { title: "Hello", label: "Say hi" }, { title: "Hire me", label: "Available" },
  { title: "Let's talk", label: "Contact" },
];

// const nav = [
//   { id: "about", label: "About" },
//   { id: "skills", label: "Skills" },
//   { id: "projects", label: "Projects" },
//   { id: "reviews", label: "Reviews" },
//   { id: "contact", label: "Contact" },
// ];

// const Arrow = ({ className = "", stroke = 14 }: { className?: string; stroke?: number }) => (
//   <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
//     <path d="M18 82 82 18M30 18h52v52" stroke="currentColor" strokeWidth={stroke} strokeLinecap="square" />
//   </svg>
// );

/* ---------- Page ---------- */
export default function AnimateView() {
  return (
    <div className="bg-[#f3f4f6] text-black antialiased" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
      `}</style>

      {/* 1 · Home: tunnel driven by the wheel, hands scrolling back at both ends */}
      <section id="home" className="p-3">
        <div className="h-[calc(100svh-1.5rem)] min-h-[640px]">
          <Hero
            className="rounded-3xl"
            items={heroItems}
            eyebrow="Hi, I'm"
            title={<>Hemleen<br />Francis</>}
            titleClassName="text-[20vw] md:text-[10vw]"
            subtitle={<><span className="font-bold text-teal-300">{profile.role}.</span> {profile.tagline}</>}
          >
            <header className="m-4">
              <nav className="relative">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-black text-xs text-white">Porfolio</span>
                {/* <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-black">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-black text-xs text-white">HF</span>
                  <span className="hidden sm:inline">Hemleen <span className="text-teal-600">Francis</span></span>
                </a>
                <ul className="flex gap-6 text-sm">
                  {nav.map((n) => (
                    <li key={n.id}>
                      <a href={`#${n.id}`} className="font-medium text-black/70 transition-colors hover:text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600">{n.label}</a>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="rounded-lg border border-black px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Hire me</a> */}
              </nav>
            </header>
          </Hero>
        </div>
      </section>

      {/* 2 · About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* 3 · Skills (separate component, same tunnel) */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* 4  Testomonil section*/}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* 5  Client section*/}
      <section id="reviews">
        <InkOrbitFeatures />
      </section>

      {/* 6  Project section*/}
      <section id="projects">
        <Projects />
      </section>

      {/* 7 · Principles */}
      {/* <section id="principles">
        <PerspectiveTunnelHero
          mode="scroll"
          items={principleItems}
          title={<>Maintainable<br />Scalable<br />Valuable</>}
          titleClassName="text-[15vw] md:text-[8vw]"
          subtitle={belief}
        />
      </section> */}

      {/* 8 · Contact */}
      <section id="contact">
        <PerspectiveTunnelHero
          mode="scroll"
          variant="light"
          items={contactItems}
          title={<>Let's work<br />together</>}
          titleClassName="text-[16vw] md:text-[9vw]"
          subtitle={profile.response}
        />
        <Contact />
        {/* <footer className="mt-6 flex flex-col justify-between gap-2 text-xs text-black/60 sm:flex-row">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <span className="flex gap-5"><a href={`mailto:${profile.email}`} className="hover:text-teal-600">Email</a><a href="tel:+919629817352" className="hover:text-teal-600">Phone</a></span>
          </footer> */}
      </section>
    </div>
  );
}
