
"use client";

import { useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "framer-motion";

import {
    Code2,
    Database,
    Gauge,
    Layers3,
    Zap,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

// --------------------------------------------------
// Types
// --------------------------------------------------

export interface EngineeringPractice {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    practices: string[];
    icon: React.ElementType;
}

interface TestimonialsProps {
    practices?: EngineeringPractice[];
    intro?: string;
}

// --------------------------------------------------
// Constants
// --------------------------------------------------

const display = {
    fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif",
};

const skins = [
    {
        card: "bg-white text-black ring-1 ring-black/10",
        accent: "text-teal-600",
        sub: "text-black/60",
        badge: "bg-teal-50 text-teal-700",
        bullet: "text-teal-600",
    },
    {
        card: "bg-black text-white",
        accent: "text-teal-400",
        sub: "text-white/60",
        badge: "bg-white/10 text-teal-300",
        bullet: "text-teal-400",
    },
    {
        card: "bg-teal-500 text-black",
        accent: "text-black",
        sub: "text-black/65",
        badge: "bg-black/10 text-black",
        bullet: "text-black",
    },
] as const;

// --------------------------------------------------
// Engineering Data
// --------------------------------------------------

const defaultPractices: EngineeringPractice[] = [
    {
        id: "clean-code",
        category: "01 / CODE QUALITY",
        title: "Clean & Maintainable Code",
        subtitle: "Build once. Maintain easily.",
        description:
            "A maintainable application starts with a well-organized architecture. I focus on reusable components, modular services and clear separation of responsibilities to make code easier to understand, test and extend.",
        icon: Code2,
        technologies: [
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
        ],
        practices: [
            "Organize code using feature-based folder structures.",
            "Separate controllers, services, routes and database models.",
            "Build reusable React components and custom hooks.",
            "Use TypeScript interfaces and strict type checking.",
            "Follow consistent naming conventions and error handling.",
        ],
    },
    {
        id: "database",
        category: "02 / DATABASE ARCHITECTURE",
        title: "Scalable Database",
        subtitle: "Design for growing data.",
        description:
            "Database performance depends on how data is structured and queried. I design MongoDB schemas based on application requirements, access patterns and relationships to support growing datasets.",
        icon: Database,
        technologies: [
            "MongoDB",
            "Mongoose",
            "MongoDB Atlas",
            "SQL",
        ],
        practices: [
            "Design schemas using embedding and referencing appropriately.",
            "Create single-field and compound indexes for frequent queries.",
            "Use aggregation pipelines for complex data processing.",
            "Implement pagination and selective field projection.",
            "Monitor slow queries and optimize database operations.",
        ],
    },
    {
        id: "backend",
        category: "03 / SERVER PERFORMANCE",
        title: "Backend Performance",
        subtitle: "Fast, reliable APIs.",
        description:
            "A scalable backend needs efficient API design, asynchronous processing and reliable error handling. I build modular REST APIs that remain responsive as application traffic and business logic grow.",
        icon: Gauge,
        technologies: [
            "Node.js",
            "Express.js",
            "NestJS",
            "REST APIs",
        ],
        practices: [
            "Use asynchronous operations without blocking the event loop.",
            "Optimize API queries and avoid unnecessary database calls.",
            "Validate requests and implement centralized error handling.",
            "Use pagination, filtering and response compression.",
            "Apply rate limiting, authentication and authorization.",
        ],
    },
    {
        id: "frontend",
        category: "04 / FRONTEND ARCHITECTURE",
        title: "Frontend State Management",
        subtitle: "Predictable application state.",
        description:
            "Well-managed frontend state improves application performance and maintainability. I separate local UI state, shared application state and server data to keep React applications predictable.",
        icon: Layers3,
        technologies: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "React Hooks",
        ],
        practices: [
            "Use Redux Toolkit for shared application state.",
            "Keep temporary UI state inside component boundaries.",
            "Use selectors to access only the required state.",
            "Separate API state from local application state.",
            "Prevent unnecessary re-renders using memoization when needed.",
        ],
    },
    {
        id: "redis",
        category: "05 / CACHING STRATEGY",
        title: "Redis Caching",
        subtitle: "Reduce database workload.",
        description:
            "Redis improves response times by keeping frequently requested data in memory. I use cache-aside strategies to reduce repeated database queries and improve API performance.",
        icon: Zap,
        technologies: [
            "Redis",
            "Node.js",
            "MongoDB",
            "Express.js",
        ],
        practices: [
            "Check Redis before querying MongoDB.",
            "Store frequently accessed responses with appropriate TTL.",
            "Invalidate or update cache after database changes.",
            "Use consistent cache keys and expiration strategies.",
            "Handle cache misses and Redis failures safely.",
        ],
    },
];

// --------------------------------------------------
// Practice Card Content
// --------------------------------------------------

function PracticeCardContent({
    practice,
    skin,
}: {
    practice: EngineeringPractice;
    skin: (typeof skins)[number];
}) {
    const Icon = practice.icon;

    return (
        <article className="flex h-full flex-col p-5 sm:p-7 md:p-9">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">
                    <span
                        className={`text-[10px] font-bold tracking-[0.16em] sm:text-xs ${skin.accent}`}
                    >
                        {practice.category}
                    </span>

                    <h3
                        style={display}
                        className="mt-4 text-3xl uppercase leading-[0.95] sm:text-4xl md:text-5xl"
                    >
                        {practice.title}
                    </h3>

                    <p className={`mt-3 text-xs font-semibold sm:text-sm ${skin.sub}`}>
                        {practice.subtitle}
                    </p>
                </div>

                <div className={`shrink-0 ${skin.accent}`}>
                    <Icon
                        size={30}
                        strokeWidth={1.5}
                        className="sm:h-9 sm:w-9"
                    />
                </div>
            </div>

            {/* Description */}
            <p className={`mt-5 text-sm leading-relaxed sm:mt-6 sm:text-base ${skin.sub}`}>
                {practice.description}
            </p>

            {/* Engineering Practices */}
            <div className="mt-6 flex-1">

                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                    Engineering practices
                </p>

                <ul className="space-y-3">
                    {practice.practices.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-xs leading-relaxed sm:text-sm"
                        >
                            <CheckCircle2
                                size={17}
                                className={`mt-0.5 shrink-0 ${skin.bullet}`}
                            />

                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Technologies */}
            <div className="mt-7 border-t border-current/15 pt-5">

                <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs ${skin.sub}`}>
                    Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                    {practice.technologies.map((technology) => (
                        <span
                            key={technology}
                            className={`rounded-md px-3 py-1.5 text-[10px] font-semibold sm:text-xs ${skin.badge}`}
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

        </article>
    );
}

// --------------------------------------------------
// Single Card Carousel
// --------------------------------------------------

function PracticeCarousel({
    items,
}: {
    items: EngineeringPractice[];
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const reduceMotion = useReducedMotion();

    const count = items.length;

    if (!count) return null;

    const activePractice = items[activeIndex];
    const skin = skins[activeIndex % skins.length];

    const previous = () => {
        setActiveIndex((current) =>
            current === 0 ? count - 1 : current - 1
        );
    };

    const next = () => {
        setActiveIndex((current) =>
            current === count - 1 ? 0 : current + 1
        );
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: { offset: { x: number } }
    ) => {
        if (info.offset.x < -80) {
            next();
        } else if (info.offset.x > 80) {
            previous();
        }
    };

    return (
        <div className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 md:pb-28">

            {/* Card */}
            <div className="relative">

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={activePractice.id}
                        initial={reduceMotion ? false : {
                            opacity: 0,
                            x: 45,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={reduceMotion ? undefined : {
                            opacity: 0,
                            x: -45,
                        }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.35,
                            ease: "easeInOut",
                        }}
                        drag={reduceMotion ? false : "x"}
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        dragElastic={0.12}
                        onDragEnd={handleDragEnd}
                        className={`relative min-h-[480px] overflow-hidden rounded-2xl shadow-2xl shadow-black/15 sm:rounded-3xl md:min-h-[540px] ${skin.card}`}
                    >
                        <PracticeCardContent
                            practice={activePractice}
                            skin={skin}
                        />
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Navigation */}
            <div className="mt-7 flex items-center justify-between gap-4 sm:mt-9">

                {/* Previous */}
                <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous engineering practice"
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/20 transition-all hover:border-black hover:bg-black hover:text-white sm:h-12 sm:w-12"
                >
                    <ArrowLeft
                        size={20}
                        className="transition-transform group-hover:-translate-x-1"
                    />
                </button>

                {/* Progress */}
                <div className="flex flex-1 flex-col items-center gap-3">

                    <div className="flex items-center gap-2">
                        <span
                            style={display}
                            className="text-2xl sm:text-3xl"
                        >
                            {String(activeIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm text-black/40">
                            /
                        </span>

                        <span
                            style={display}
                            className="text-lg text-black/40 sm:text-xl"
                        >
                            {String(count).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex items-center gap-2">
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to ${item.title}`}
                                aria-current={activeIndex === index ? "step" : undefined}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    activeIndex === index
                                        ? "w-8 bg-teal-600"
                                        : "w-3 bg-black/20 hover:bg-black/50"
                                }`}
                            />
                        ))}
                    </div>

                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 sm:block">
                        Engineering principles
                    </span>
                </div>

                {/* Next */}
                <button
                    type="button"
                    onClick={next}
                    aria-label="Next engineering practice"
                    className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/20 transition-all hover:border-black hover:bg-black hover:text-white sm:h-12 sm:w-12"
                >
                    <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>

            </div>

            {/* Mobile swipe hint */}
            <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-black/35 sm:hidden">
                Swipe left or right to explore
            </p>

        </div>
    );
}

// --------------------------------------------------
// Main Section
// --------------------------------------------------

export default function Testimonials({
    practices = defaultPractices,
    intro = "Building scalable applications is more than writing code. It requires clean architecture, optimized databases, efficient APIs, predictable frontend state and intelligent caching strategies.",
}: TestimonialsProps) {

    const activePractices = practices.filter(
        (practice) => practice.id && practice.title
    );

    return (
        <section
            id="testimonials"
            className="overflow-hidden bg-[#eef0f2] text-black"
        >

            {/* Section Header */}
            <div className="px-5 pb-8 pt-20 text-center sm:px-8 sm:pb-10 sm:pt-24 md:px-12">

                <h2
                    style={display}
                    className="text-[12vw] uppercase leading-[0.9] sm:text-[10vw] md:text-[7vw]"
                >
                    Architecture Engineering
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base md:text-lg">
                    {intro}
                </p>

            </div>

            {/* One by One Carousel */}
            <PracticeCarousel
                items={activePractices}
            />

        </section>
    );
}
