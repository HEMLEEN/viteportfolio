
"use client";

import { useRef } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";

import {
    Code2,
    Database,
    Gauge,
    Layers3,
    Zap,
    CheckCircle2,
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

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

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
        <article className="flex h-full flex-col p-6 sm:p-9">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className={`text-xs font-bold tracking-[0.18em] ${skin.accent}`}>
                        {practice.category}
                    </span>

                    <h3
                        style={display}
                        className="mt-5 text-4xl uppercase leading-[0.95] sm:text-5xl"
                    >
                        {practice.title}
                    </h3>

                    <p className={`mt-3 text-sm font-semibold ${skin.sub}`}>
                        {practice.subtitle}
                    </p>
                </div>

                <div className={`shrink-0 ${skin.accent}`}>
                    <Icon size={36} strokeWidth={1.5} />
                </div>
            </div>

            {/* Description */}
            <p className={`mt-6 text-sm leading-relaxed sm:text-base ${skin.sub}`}>
                {practice.description}
            </p>

            {/* Engineering practices */}
            <div className="mt-6 flex-1">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em]">
                    Engineering practices
                </p>

                <ul className="space-y-3">
                    {practice.practices.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed"
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
                <p className={`mb-3 text-xs font-bold uppercase tracking-[0.16em] ${skin.sub}`}>
                    Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                    {practice.technologies.map((technology) => (
                        <span
                            key={technology}
                            className={`rounded-md px-3 py-1.5 text-xs font-semibold ${skin.badge}`}
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
// Scroll Stack Card
// --------------------------------------------------

function StackCard({
    practice,
    index,
    progress,
}: {
    practice: EngineeringPractice;
    index: number;
    progress: MotionValue<number>;
}) {
    const skin = skins[index % skins.length];

    const transform = useTransform(progress, (value) => {
        const enter =
            index === 0
                ? 1
                : clamp(value - (index - 1), 0, 1);

        const eased = 1 - Math.pow(1 - enter, 3);
        const depth = Math.max(0, value - index);

        const tilt = (1 - eased) * (index % 2 ? 4 : -4);

        return `
            translateY(${(1 - eased) * 100}vh)
            translateY(${-depth * 18}px)
            scale(${1 - depth * 0.05})
            rotate(${tilt}deg)
        `;
    });

    const opacity = useTransform(progress, (value) =>
        index === 0
            ? 1
            : clamp((value - (index - 1)) * 6, 0, 1)
    );

    const shade = useTransform(progress, (value) =>
        clamp(value - index, 0, 2) * 0.18
    );

    return (
        <motion.div
            style={{
                transform,
                opacity,
                zIndex: index,
            }}
            className={`absolute inset-0 overflow-hidden rounded-3xl shadow-2xl shadow-black/25 ${skin.card}`}
        >
            <PracticeCardContent
                practice={practice}
                skin={skin}
            />

            <motion.div
                aria-hidden="true"
                style={{ opacity: shade }}
                className="pointer-events-none absolute inset-0 bg-black"
            />
        </motion.div>
    );
}

// --------------------------------------------------
// Scroll Stack
// --------------------------------------------------

function ScrollStack({
    items,
}: {
    items: EngineeringPractice[];
}) {
    const ref = useRef<HTMLDivElement>(null);

    const count = items.length;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const progress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, Math.max(0, count - 1)]
    );

    if (count === 0) return null;

    return (
        <div
            ref={ref}
            style={{
                height: `${(count - 1) * 60 + 100}vh`,
            }}
            className="relative"
        >
            <div className="sticky top-0 flex h-screen items-center justify-center px-5 sm:px-6">
                <div className="relative h-[34rem] w-full max-w-2xl sm:h-[36rem]">
                    {items.map((practice, index) => (
                        <StackCard
                            key={practice.id}
                            practice={practice}
                            index={index}
                            progress={progress}
                        />
                    ))}
                </div>
            </div>
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
    const reduceMotion = useReducedMotion();

    const activePractices = practices.filter(
        (practice) => practice.id && practice.title
    );

    return (
        <section
            id="testimonials"
            className="bg-[#eef0f2] text-black"
        >
            {/* Section Header */}
            <div className="px-6 pb-10 pt-24 text-center md:px-12">
                <h2
                    style={display}
                    className="text-[14vw] uppercase leading-[0.9] md:text-[7vw]"
                >
                    Architecture Engineering
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
                    {intro}
                </p>
            </div>

            {/* Reduced Motion / Scroll Stack */}
            {reduceMotion ? (
                <ul className="mx-auto grid max-w-2xl gap-6 px-5 pb-24">
                    {activePractices.map((practice, index) => (
                        <li
                            key={practice.id}
                            className={`overflow-hidden rounded-3xl shadow-xl shadow-black/10 ${skins[index % skins.length].card}`}
                        >
                            <PracticeCardContent
                                practice={practice}
                                skin={skins[index % skins.length]}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                    <ScrollStack items={activePractices} />
            )}
        </section>
    );
}
