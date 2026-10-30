// ClientsSection.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import gymGif from "../assets/gym.gif";
import churchWeb from "../assets/church-website.png";
import ShopGif from "../assets/shopping2-gif.gif";

export interface Client {
    name: string;
    description: string;
    image?: string;
    href?: string;
}

interface ClientsSectionProps {
    clients?: Client[];
    intro?: string;
}

const defaultClients: Client[] = [
    {
        name: "LCF Gym",
        description: "Fitness site with workout plans and progress tracking",
        image: gymGif,
        href: "https://lcfgym.netlify.app/",
    },
    {
        name: "Mount Carmel Church, Podanur",
        description: "Website for the church community",
        image: churchWeb,
        href: "https://mountcarmelchurchpodanur.org",
    },
    {
        name: "Heba Books",
        description: "Online book store with secure payments and cart",
        image: ShopGif,
        href: "https://demohebabooks.netlify.app/",
    },
];

const display = { fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif" };

// Fan layout per distance from the active card. x is a fraction of card width.
const DESKTOP = [
    { x: 0, y: 0, r: 0, s: 1 },
    { x: 0.7, y: 28, r: 12, s: 0.94 },
    { x: 1.08, y: 105, r: 27, s: 0.9 },
];
const MOBILE = [
    { x: 0, y: 0, r: 0, s: 1 },
    { x: 0.62, y: 20, r: 10, s: 0.92 },
    { x: 0.9, y: 70, r: 22, s: 0.85 },
];

const fallbacks = [
    "from-teal-600 to-slate-900",
    "from-blue-700 to-slate-900",
    "from-slate-600 to-black",
    "from-cyan-600 to-slate-900",
    "from-indigo-700 to-black",
];

function ClientStack({ clients }: { clients: Client[] }) {
    const reduce = useReducedMotion();
    const n = clients.length;
    const [active, setActive] = useState(Math.floor(n / 2));
    const [stageW, setStageW] = useState(900);
    const stageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setStageW(entry.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
    const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

    const isMobile = stageW < 640;
    const slots = isMobile ? MOBILE : DESKTOP;
    const cardW = isMobile ? stageW * 0.66 : Math.min(stageW * 0.46, 540);
    const cardH = cardW * 0.62;
    const half = Math.floor(n / 2);
    const current = clients[active];

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Clients"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            }}
            className="rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-teal-400"
        >
            <motion.div
                ref={stageRef}
                onPanEnd={(_, info) => {
                    if (info.offset.x < -50) next();
                    else if (info.offset.x > 50) prev();
                }}
                style={{ height: cardH + slots[2].y + 80, touchAction: "pan-y" }}
                className="relative w-full"
            >
                {clients.map((c, i) => {
                    const o = ((((i - active + half) % n) + n) % n) - half; // signed distance from the active card
                    const dist = Math.abs(o);
                    const visible = dist <= 2;
                    const slot = slots[Math.min(dist, 2)];
                    const sign = o < 0 ? -1 : 1;
                    const isActive = o === 0;

                    return (
                        <motion.button
                            key={c.name}
                            type="button"
                            onClick={() => setActive(i)}
                            disabled={isActive || !visible}
                            aria-label={isActive ? c.name : `Show ${c.name}`}
                            aria-current={isActive}
                            initial={false}
                            animate={{
                                x: sign * slot.x * cardW,
                                y: slot.y,
                                rotate: sign * slot.r,
                                scale: slot.s,
                                opacity: visible ? 1 : 0,
                            }}
                            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 16 }}
                            style={{
                                width: cardW,
                                height: cardH,
                                left: "50%",
                                marginLeft: -cardW / 2,
                                top: 24,
                                zIndex: 10 - dist,
                                pointerEvents: visible ? "auto" : "none",
                            }}
                            className="absolute block cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-2xl shadow-black/70 ring-1 ring-white/15 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                        >
                            {c.image ? (
                                <img src={c.image} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${fallbacks[i % fallbacks.length]}`} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                            {!isActive && <div className="absolute inset-0 bg-black/25" />}
                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                                <span className="block text-base font-semibold leading-tight text-white md:text-xl">{c.name}</span>
                                <span className="mt-1 block text-xs text-white/80 md:text-sm">{c.description}</span>
                            </div>
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Dots plus a link to the active client */}
            <div className="mt-2 flex items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                    {clients.map((c, i) => (
                        <button
                            key={c.name}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-label={`Show ${c.name}`}
                            aria-current={i === active}
                            className="grid h-6 w-4 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                        >
                            <span className={`block h-2 w-2 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/30"}`} />
                        </button>
                    ))}
                </div>
                {current.href && (
                    <a
                        href={current.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${current.name}`}
                        className="text-white/60 transition-colors hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                    >
                        <FiExternalLink size={18} aria-hidden="true" />
                    </a>
                )}
            </div>

            <p className="sr-only" aria-live="polite">
                {`Client ${active + 1} of ${n}: ${current.name}. ${current.description}`}
            </p>
        </div>
    );
}

export default function ClientsSection({
    clients = defaultClients,
    intro = "A few of the people and organisations I've built for. Pick a card to bring it forward.",
}: ClientsSectionProps) {
    return (
        <section
            id="clients"
            className="overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white [background-image:radial-gradient(ellipse_60%_40%_at_50%_55%,rgba(20,184,166,0.12),transparent_70%)] md:px-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <h2 style={display} className="text-[14vw] uppercase leading-[0.9] md:text-[7vw]">
                        Clients
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{intro}</p>
                </div>
                <div className="mt-12">
                    <ClientStack clients={clients} />
                </div>
            </div>
        </section>
    );
}