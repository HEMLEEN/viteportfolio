// Projects.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import gymGif from "../assets/gym.gif";
import churchWeb from "../assets/church-website.png";
import ShopGif from "../assets/shopping2-gif.gif";

interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    codeUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: "Gym Website",
        description:
            "A fitness app that allows users to create personalized workout plans and track their fitness progress over time.",
        image: gymGif,
        tech: ["React", "Typescript", "MongoDB"],
        codeUrl: "#",
        liveUrl: "https://lcfgym.netlify.app/",
    },
    {
        title: "Church Website",
        description: "Organization website for peoples friendly.",
        image: churchWeb,
        tech: ["React", "TypeScript", "MongoDB", "Tailwind"],
        codeUrl: "#",
        liveUrl: "https://mountcarmelchurchpodanur.org",
    },
    {
        title: "Online Book Shopping Platform",
        description:
            "An online book shopping experience with secure payment options, product filtering, and easy-to-use cart management features",
        image: ShopGif,
        tech: ["Typescript", "Node ts", "Express js", "Mongoose", "MongoDb"],
        codeUrl: "#",
        liveUrl: "https://demohebabooks.netlify.app/",
    },
];

const display = { fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif" };
const hasLink = (url?: string) => !!url && url !== "#";

function ProjectCarousel({ items, autoplay = false }: { items: Project[]; autoplay?: boolean }) {
    const reduce = useReducedMotion();
    const n = items.length;
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [width, setWidth] = useState(400);
    const stageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
    const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

    useEffect(() => {
        if (!autoplay || paused || reduce || n < 2) return;
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [autoplay, paused, reduce, n, next]);

    const gap = Math.min(96, Math.max(48, width * 0.18));
    const current = items[active];

    const pose = (i: number) => {
        const offset = (i - active + n) % n;
        if (offset === 0) return { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1, z: 3 };
        if (offset === 1) return { x: gap, y: -gap * 0.8, scale: 0.85, rotateY: -15, opacity: 0.55, z: 2 };
        if (offset === n - 1) return { x: -gap, y: -gap * 0.8, scale: 0.85, rotateY: 15, opacity: 0.55, z: 2 };
        return { x: 0, y: 0, scale: 0.7, rotateY: 0, opacity: 0, z: 1 };
    };

    return (
        <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured projects"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="grid items-center gap-10 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-teal-400 md:grid-cols-2 md:gap-16"
        >
            {/* Image stack: active in the middle, neighbours tilted behind it */}
            <motion.div
                ref={stageRef}
                onPanEnd={(_, info) => {
                    if (info.offset.x < -50) next();
                    else if (info.offset.x > 50) prev();
                }}
                style={{ perspective: 1000, touchAction: "pan-y" }}
                className="relative mt-20 h-72 w-full sm:h-80 md:h-96"
            >
                {items.map((p, i) => {
                    const t = pose(i);
                    const isActive = i === active;
                    return (
                        <motion.button
                            key={p.title}
                            type="button"
                            onClick={() => setActive(i)}
                            disabled={isActive || t.opacity === 0}
                            aria-label={isActive ? p.title : `Show ${p.title}`}
                            aria-current={isActive}
                            initial={false}
                            animate={{ x: t.x, y: t.y, scale: t.scale, rotateY: t.rotateY, opacity: t.opacity }}
                            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 16 }}
                            style={{ zIndex: t.z, pointerEvents: t.opacity === 0 ? "none" : "auto" }}
                            className="absolute inset-0 block cursor-pointer overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                        >
                            <img src={p.image} alt={isActive ? `${p.title} preview` : ""} draggable={false} className="h-full w-full object-cover" />
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Details for the active project */}
            <div className="flex flex-col justify-between md:min-h-[24rem]">
                <div aria-live="polite">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <h3 style={display} className="text-4xl uppercase leading-none text-white md:text-5xl">
                                {current.title}
                            </h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                                {current.tech.map((t) => (
                                    <li key={t} className="rounded-full border border-white/30 px-3 py-1 text-sm text-white/80">
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-lg leading-relaxed text-white/80">
                                {current.description.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={reduce ? false : { filter: "blur(10px)", opacity: 0, y: 5 }}
                                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                        transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                                        className="mr-[0.25em] inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {hasLink(current.liveUrl) && (
                                    <a
                                        href={current.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Live demo
                                    </a>
                                )}
                                {hasLink(current.codeUrl) && (
                                    <a
                                        href={current.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-400 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                                    >
                                        <FaGithub aria-hidden="true" /> Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-10 flex items-center gap-4 md:mt-0">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous project"
                        className="grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                    >
                        <FaArrowLeft aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next project"
                        className="grid h-11 w-11 place-items-center rounded-full bg-white text-black transition-colors hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                    >
                        <FaArrowRight aria-hidden="true" />
                    </button>
                    <span className="ml-2 text-sm text-white/60">
                        {active + 1} / {n}
                    </span>
                </div>
            </div>
        </div>
    );
}

const Projects = ({ viewAllHref }: { viewAllHref?: string }) => {
    return (
        <section id="projects" className="overflow-hidden bg-black px-6 py-24 text-white md:px-20">
            <div className="mx-auto mb-6 max-w-6xl text-center">
                <h2 style={display} className="text-[14vw] uppercase leading-[0.9] md:text-[7vw]">
                    Featured projects
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
                    Here are some of my recent projects that showcase my skills and passion for creating innovative digital
                    solutions.
                </p>
            </div>

            <div className="mx-auto max-w-6xl">
                <ProjectCarousel items={projects} />
            </div>

            {viewAllHref && (
                <div className="mt-16 text-center">
                    <a
                        href={viewAllHref}
                        className="inline-block rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:border-teal-400 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                    >
                        View all projects
                    </a>
                </div>
            )}
        </section>
    );
};

export default Projects;