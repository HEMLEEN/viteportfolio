// Testimonials.tsx
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

export interface Testimonial {
    name: string;
    role: string;
    quote: string;
    /** 0 to 5, halves allowed. Omit to hide the stars. */
    rating?: number;
    avatar?: string;
}

interface TestimonialsProps {
    testimonials?: Testimonial[];
    intro?: string;
}

// Placeholder copy: replace with what your clients actually said.
const defaultTestimonials: Testimonial[] = [
    { name: "Client name", role: "LCF Gym", rating: 5, quote: "Replace this with a real quote from the gym about working with you." },
    { name: "Client name", role: "Mount Carmel Church, Podanur", rating: 5, quote: "Replace this with a real quote from the church team about the website." },
    { name: "Client name", role: "Heba Books", rating: 5, quote: "Replace this with a real quote about the shopping experience you built." },
];

const display = { fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif" };
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const skins = [
    { card: "bg-white text-black ring-1 ring-black/10", star: "text-teal-600", sub: "text-black/60", avatar: "bg-black text-white" },
    { card: "bg-black text-white", star: "text-teal-400", sub: "text-white/60", avatar: "bg-white text-black" },
    { card: "bg-teal-500 text-black", star: "text-black", sub: "text-black/70", avatar: "bg-black text-white" },
] as const;

function Stars({ rating, className }: { rating: number; className: string }) {
    return (
        <span role="img" aria-label={`${rating} out of 5 stars`} className="relative inline-block text-xl leading-none tracking-[0.12em]">
            <span aria-hidden="true" className="opacity-25">★★★★★</span>
            <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap ${className}`}
                style={{ width: `${(clamp(rating, 0, 5) / 5) * 100}%` }}
            >
                ★★★★★
            </span>
        </span>
    );
}

function CardBody({ t, skin }: { t: Testimonial; skin: (typeof skins)[number] }) {
    const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    return (
        <figure className="flex h-full flex-col justify-between p-7 sm:p-9">
            <div>
                {t.rating !== undefined && <Stars rating={t.rating} className={skin.star} />}
                <blockquote className="mt-5 text-xl font-medium leading-snug sm:text-2xl">{t.quote}</blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3">
                {t.avatar ? (
                    <img src={t.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                ) : (
                    <span aria-hidden="true" className={`grid h-11 w-11 place-items-center rounded-full text-sm font-semibold ${skin.avatar}`}>
                        {initials}
                    </span>
                )}
                <span>
                    <span className="block font-semibold leading-tight">{t.name}</span>
                    <span className={`block text-sm ${skin.sub}`}>{t.role}</span>
                </span>
            </figcaption>
        </figure>
    );
}

/* One card in the scroll-driven stack. q runs from 0 to (n - 1): card i slides up while q goes from i-1 to i,
   then sinks back a little each time a newer card lands on top of it. */
function StackCard({ t, i, q }: { t: Testimonial; i: number; q: MotionValue<number> }) {
    const skin = skins[i % skins.length];

    const transform = useTransform(q, (v) => {
        const enter = i === 0 ? 1 : clamp(v - (i - 1), 0, 1);
        const eased = 1 - Math.pow(1 - enter, 3);
        const depth = Math.max(0, v - i);
        const tilt = (1 - eased) * (i % 2 ? 4 : -4);
        return `translateY(${(1 - eased) * 100}vh) translateY(${-depth * 18}px) scale(${1 - depth * 0.05}) rotate(${tilt}deg)`;
    });
    const opacity = useTransform(q, (v) => (i === 0 ? 1 : clamp((v - (i - 1)) * 6, 0, 1)));
    const shade = useTransform(q, (v) => clamp(v - i, 0, 2) * 0.18);

    return (
        <motion.div
            style={{ transform, opacity, zIndex: i }}
            className={`absolute inset-0 overflow-hidden rounded-3xl shadow-2xl shadow-black/25 ${skin.card}`}
        >
            <CardBody t={t} skin={skin} />
            <motion.div aria-hidden="true" style={{ opacity: shade }} className="pointer-events-none absolute inset-0 bg-black" />
        </motion.div>
    );
}

function ScrollStack({ items }: { items: Testimonial[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const n = items.length;
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const q = useTransform(scrollYProgress, [0, 1], [0, n - 1]);

    return (
        <div ref={ref} style={{ height: `${(n - 1) * 60 + 100}vh` }} className="relative">
            <div className="sticky top-0 flex h-screen items-center justify-center px-6">
                <div className="relative h-[26rem] w-full max-w-2xl sm:h-[22rem]">
                    {items.map((t, i) => (
                        <StackCard key={`${t.role}-${i}`} t={t} i={i} q={q} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Testimonials({
    testimonials = defaultTestimonials,
    intro = "Kind words from the people I've built for. Keep scrolling and each one lands on top of the last.",
}: TestimonialsProps) {
    const reduce = useReducedMotion();

    return (
        <section id="testimonials" className="bg-[#eef0f2] text-black">
            <div className="px-6 pb-10 pt-24 text-center md:px-12">
                <h2 style={display} className="text-[14vw] uppercase leading-[0.9] md:text-[7vw]">
                    Kind words
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">{intro}</p>
            </div>

            {reduce ? (
                // Reduced motion: a plain list, no scroll-driven movement
                <ul className="mx-auto grid max-w-2xl gap-6 px-6 pb-24">
                    {testimonials.map((t, i) => (
                        <li key={`${t.role}-${i}`} className={`overflow-hidden rounded-3xl shadow-xl shadow-black/10 ${skins[i % skins.length].card}`}>
                            <CardBody t={t} skin={skins[i % skins.length]} />
                        </li>
                    ))}
                </ul>
            ) : (
                <ScrollStack items={testimonials} />
            )}
        </section>
    );
}