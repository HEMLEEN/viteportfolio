
"use client";

import {
    motion,
    useTransform,
    useReducedMotion,
    useMotionValue,
    useSpring,
    useScroll,
    type MotionValue,
} from "framer-motion";

import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";

import profileImg from '../assets/profile.png.png'
// --------------------------------------------------
// Types
// --------------------------------------------------

export interface TunnelItem {
    title: string;
    label?: string;
    src?: string;
}

interface PerspectiveTunnelHeroProps {
    items: TunnelItem[];
    eyebrow?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    className?: string;
    titleClassName?: string;

    mode?: "wheel" | "scroll";
    scrollLength?: number;

    variant?: "dark" | "light";

    // Profile image
    profileSrc?: string;
    profileAlt?: string;
    showProfile?: boolean;

    children?: ReactNode;
}

interface Stage {
    width: number;
    height: number;
    isMobile: boolean;
}

interface CardData {
    item: TunnelItem;
    cos: number;
    sin: number;
    rx: number;
    ry: number;
    rot: number;
    index: number;
}

// --------------------------------------------------
// Constants
// --------------------------------------------------

const SPRING = {
    stiffness: 60,
    damping: 25,
    mass: 0.5,
};

const display = {
    fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif",
};

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

// --------------------------------------------------
// Theme
// --------------------------------------------------

const look = {
    dark: {
        root: "bg-black text-white",

        dots: "[background-image:radial-gradient(rgba(45,212,191,0.28)_1px,transparent_1px)]",

        glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.2)_0%,transparent_55%),radial-gradient(circle_at_85%_90%,rgba(37,99,235,0.25)_0%,transparent_45%)]",

        ring1: "border-teal-400/20",
        ring2: "border-white/10",

        title: "from-white via-white to-teal-200/70",
        eyebrow: "text-teal-300",
        sub: "text-white/70",
        prompt: "text-white/60",

        tiles: [
            "bg-gradient-to-br from-teal-400 to-blue-600 text-white",
            "bg-black text-white ring-1 ring-white/25",
            "bg-white text-black",
        ],
    },

    light: {
        root: "bg-[#e6eaee] text-black",

        dots: "[background-image:radial-gradient(rgba(15,23,42,0.22)_1px,transparent_1px)]",

        glow: "bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.28)_0%,transparent_55%),radial-gradient(circle_at_85%_90%,rgba(59,130,246,0.22)_0%,transparent_45%)]",

        ring1: "border-teal-600/30",
        ring2: "border-black/10",

        title: "from-black via-black to-teal-700",
        eyebrow: "text-teal-700",
        sub: "text-black/70",
        prompt: "text-black/60",

        tiles: [
            "bg-gradient-to-br from-teal-400 to-blue-600 text-white",
            "bg-black text-white",
            "bg-white text-black ring-1 ring-black/10",
        ],
    },
} as const;

// --------------------------------------------------
// Build Tunnel Cards
// --------------------------------------------------

function buildCards(items: TunnelItem[]): CardData[] {
    return items.map((item, index) => {
        const angle = index * 137.5 * (Math.PI / 180);

        return {
            item,
            index,

            cos: Math.cos(angle),
            sin: Math.sin(angle),

            rx: 0.28 + (index % 3) * 0.08,
            ry: 0.26 + (index % 2) * 0.09,

            rot:
                (index % 2 === 0 ? 1 : -1) *
                (3 + (index % 5) * 2),
        };
    });
}

// --------------------------------------------------
// Camera Parallax
// --------------------------------------------------

function useCameraParallax(enabled: boolean) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const x = useSpring(rawX, SPRING);
    const y = useSpring(rawY, SPRING);

    useEffect(() => {
        if (!enabled) return;

        const handlePointerMove = (event: PointerEvent) => {
            rawX.set(
                (event.clientX / window.innerWidth - 0.5) * 2
            );

            rawY.set(
                (event.clientY / window.innerHeight - 0.5) * 2
            );
        };

        window.addEventListener(
            "pointermove",
            handlePointerMove,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove
            );
        };
    }, [enabled, rawX, rawY]);

    return { x, y };
}

// --------------------------------------------------
// Tunnel Card
// --------------------------------------------------

function TunnelCard({
    card,
    progress,
    pointer,
    total,
    stage,
    tiles,
}: {
    card: CardData;
    progress: MotionValue<number>;
    pointer: {
        x: MotionValue<number>;
        y: MotionValue<number>;
    };
    total: number;
    stage: Stage;
    tiles: readonly string[];
}) {
    const span = 0.55;

    const start =
        total <= 1
            ? 0
            : (card.index / total) * (1 - span);

    const local = useTransform(
        progress,
        [start, start + span],
        [0, 1]
    );

    const z = useTransform(
        local,
        [0, 1],
        [
            stage.isMobile ? -1200 : -1700,
            stage.isMobile ? 350 : 500,
        ]
    );

    const opacity = useTransform(
        local,
        [0, 0.18, 0.82, 0.98],
        [0, 1, 1, 0]
    );

    const width = stage.isMobile
        ? Math.max(130, Math.min(180, stage.width * 0.38))
        : Math.max(180, Math.min(260, stage.width * 0.17));

    const baseX = card.cos * stage.width * card.rx;
    const baseY = card.sin * stage.height * card.ry;

    const pan = stage.isMobile ? 20 : 45;

    const transform = useTransform(
        [z, pointer.x, pointer.y],
        ([cz, px, py]) => {
            const cameraZ = cz as number;
            const pointerX = px as number;
            const pointerY = py as number;

            return `
                translate3d(
                    calc(-50% + ${baseX - pointerX * pan}px),
                    calc(-50% + ${baseY - pointerY * pan}px),
                    ${cameraZ}px
                )
                rotateZ(${card.rot}deg)
            `;
        }
    );

    const { item } = card;

    return (
        <motion.div
            style={{
                width,
                transform,
                opacity,
                zIndex: card.index + 1,
            }}
            className="absolute left-1/2 top-1/2 aspect-[4/5] select-none will-change-transform"
        >
            <div
                className={`group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-2xl shadow-black/40 transition-shadow duration-500 hover:shadow-teal-400/30 ${item.src
                    ? "bg-neutral-900"
                    : tiles[card.index % tiles.length]
                    }`}
            >
                {item.src && (
                    <>
                        <img
                            src={item.src}
                            alt=""
                            draggable={false}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </>
                )}

                <span className="relative text-[10px] font-semibold uppercase tracking-[0.25em] opacity-70">
                    {item.label}
                </span>

                <span
                    style={display}
                    className="relative text-3xl uppercase leading-[0.95] sm:text-4xl"
                >
                    {item.title}
                </span>
            </div>
        </motion.div>
    );
}

// --------------------------------------------------
// Circular Profile Reveal
// --------------------------------------------------

function ProfileReveal({
    progress,
    src,
    alt,
}: {
    progress: MotionValue<number>;
    src: string;
    alt: string;
}) {
    const opacity = useTransform(
        progress,
        [0, 0.18, 0.35, 0.75, 1],
        [0, 0, 1, 1, 0.95]
    );

    const scale = useTransform(
        progress,
        [0, 0.2, 0.4, 0.75, 1],
        [0.35, 0.5, 1, 1.08, 1.15]
    );

    const rotate = useTransform(
        progress,
        [0.2, 1],
        [-12, 0]
    );

    const imageY = useTransform(
        progress,
        [0.2, 0.5, 1],
        [50, 0, -12]
    );

    return (
        <motion.div
            style={{
                opacity,
                scale,
                rotate,
                y: imageY,
                zIndex: 40,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 w-[min(66vw,340px)] -translate-x-1/2 -translate-y-1/2"
        >
            {/* Outer glow */}
            <div className="absolute -inset-5 rounded-full bg-teal-400/20 blur-3xl" />

            {/* Circular frame */}
            <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-white/80 bg-neutral-950 shadow-[0_0_70px_rgba(20,184,166,0.3)] ring-1 ring-teal-400/50">

                <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full select-none object-cover"
                    style={{
                        objectPosition: "center 25%",
                    }}
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Decorative circle */}
            <div className="absolute -inset-3 rounded-full border border-teal-400/40" />

            <div className="absolute -inset-7 rounded-full border border-white/10" />
        </motion.div>
    );
}

// --------------------------------------------------
// Main Component
// --------------------------------------------------

export default function PerspectiveTunnelHero({
    items,

    eyebrow,
    title,
    subtitle,

    className = "",
    titleClassName = "text-[17vw] md:text-[9vw]",

    mode = "wheel",
    scrollLength = 240,

    variant = "dark",

    profileSrc = profileImg,
    profileAlt = "Professional portrait",
    showProfile = true,

    children,
}: PerspectiveTunnelHeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const outer = useRef<HTMLDivElement>(null);

    const reduceMotion = useReducedMotion();

    const [stage, setStage] = useState<Stage>({
        width: 1440,
        height: 900,
        isMobile: false,
    });

    const cards = useMemo(
        () => buildCards(items),
        [items]
    );

    const theme = look[variant];

    // ----------------------------------------------
    // Stage Resize
    // ----------------------------------------------

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new ResizeObserver(() => {
            const rect = element.getBoundingClientRect();

            setStage({
                width: rect.width,
                height: rect.height,
                isMobile: rect.width < 768,
            });
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // ----------------------------------------------
    // Scroll Progress
    // ----------------------------------------------

    const raw = useMotionValue(
        reduceMotion ? 0.5 : 0
    );

    const wheelProgress = useSpring(raw, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.0001,
    });

    const { scrollYProgress } = useScroll({
        target: outer,
        offset: ["start start", "end end"],
    });

    const scrollProgress = useSpring(
        scrollYProgress,
        {
            stiffness: 90,
            damping: 30,
            restDelta: 0.0001,
        }
    );

    const still = useMotionValue(0.5);

    const progress = reduceMotion
        ? still
        : mode === "scroll"
            ? scrollProgress
            : wheelProgress;

    // ----------------------------------------------
    // Wheel Interaction
    // ----------------------------------------------

    useEffect(() => {
        const element = ref.current;

        if (
            !element ||
            reduceMotion ||
            mode !== "wheel"
        ) {
            return;
        }

        const isInView = () => {
            const rect = element.getBoundingClientRect();

            return (
                rect.top <= window.innerHeight * 0.2 &&
                rect.bottom >= window.innerHeight * 0.8
            );
        };

        const updateProgress = (
            delta: number,
            event: Event
        ) => {
            const current = raw.get();

            if (!isInView()) return;

            if (
                (delta > 0 && current >= 1) ||
                (delta < 0 && current <= 0)
            ) {
                return;
            }

            event.preventDefault();

            raw.set(
                clamp(current + delta, 0, 1)
            );
        };

        const handleWheel = (event: WheelEvent) => {
            updateProgress(
                event.deltaY * 0.0008,
                event
            );
        };

        let lastY = 0;

        const handleTouchStart = (event: TouchEvent) => {
            lastY = event.touches[0].clientY;
        };

        const handleTouchMove = (event: TouchEvent) => {
            const currentY = event.touches[0].clientY;

            updateProgress(
                (lastY - currentY) * 0.003,
                event
            );

            lastY = currentY;
        };

        window.addEventListener(
            "wheel",
            handleWheel,
            { passive: false }
        );

        element.addEventListener(
            "touchstart",
            handleTouchStart,
            { passive: true }
        );

        element.addEventListener(
            "touchmove",
            handleTouchMove,
            { passive: false }
        );

        return () => {
            window.removeEventListener(
                "wheel",
                handleWheel
            );

            element.removeEventListener(
                "touchstart",
                handleTouchStart
            );

            element.removeEventListener(
                "touchmove",
                handleTouchMove
            );
        };
    }, [raw, reduceMotion, mode]);

    // ----------------------------------------------
    // Camera
    // ----------------------------------------------

    const pointer = useCameraParallax(
        !reduceMotion
    );

    // ----------------------------------------------
    // Heading Animations
    // ----------------------------------------------

    const titleScale = useTransform(
        progress,
        [0, 0.5, 1],
        [0.8, 1, 1.3]
    );

    const titleOpacity = useTransform(
        progress,
        [0, 0.12, 0.3, 0.55, 1],
        [0.35, 1, 1, 0, 0]
    );

    const promptOpacity = useTransform(
        progress,
        [0, 0.12],
        [1, 0]
    );

    // ----------------------------------------------
    // Tunnel Stage
    // ----------------------------------------------

    const stageElement = (
        <div
            ref={ref}
            className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${theme.root} ${className}`}
            style={{
                perspective: stage.isMobile
                    ? "900px"
                    : "1200px",
            }}
        >
            {/* Background Dots */}
            <div
                className={`pointer-events-none absolute inset-0 opacity-60 ${theme.dots} [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_55%,transparent_100%)]`}
            />

            {/* Background Glow */}
            <div
                className={`pointer-events-none absolute inset-0 ${theme.glow}`}
            />

            {/* Perspective Rings */}
            <div
                className={`pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border ${theme.ring1}`}
            />

            <div
                className={`pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed ${theme.ring2}`}
            />

            {/* Main Heading */}
            <motion.div
                style={{
                    scale: titleScale,
                    opacity: titleOpacity,
                }}
                className="pointer-events-none absolute z-20 flex max-w-4xl flex-col items-center px-6 text-center"
            >
                {eyebrow && (
                    <p
                        className={`mb-3 text-sm font-medium ${theme.eyebrow}`}
                    >
                        {eyebrow}
                    </p>
                )}

                <h2
                    style={display}
                    className={`bg-gradient-to-b ${theme.title} bg-clip-text uppercase leading-[0.9] text-transparent ${titleClassName}`}
                >
                    {title}
                </h2>

                {subtitle && (
                    <div
                        className={`mt-5 max-w-md text-sm sm:text-base ${theme.sub}`}
                    >
                        {subtitle}
                    </div>
                )}
            </motion.div>

            {/* 3D Tunnel Cards */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {cards.map((card) => (
                    <TunnelCard
                        key={`${card.item.title}-${card.index}`}
                        card={card}
                        progress={progress}
                        pointer={pointer}
                        total={cards.length}
                        stage={stage}
                        tiles={theme.tiles}
                    />
                ))}
            </div>

            {/* Circular Profile Image */}
            {showProfile && profileSrc && (
                <ProfileReveal
                    progress={progress}
                    src={profileSrc}
                    alt={profileAlt}
                />
            )}

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    opacity: promptOpacity,
                }}
                className={`pointer-events-none absolute bottom-6 z-50 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] ${theme.prompt}`}
            >
                <span>Scroll to explore</span>

                <div className="h-6 w-px bg-gradient-to-b from-teal-500 to-transparent" />
            </motion.div>

            {/* Optional Custom Content */}
            {children && (
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[60]">
                    {children}
                </div>
            )}
        </div>
    );

    // ----------------------------------------------
    // Page Scroll Mode
    // ----------------------------------------------

    if (mode === "scroll") {
        return (
            <div
                ref={outer}
                style={{
                    height: `${Math.max(100, scrollLength)}vh`,
                }}
                className="relative"
            >
                <div className="sticky top-0 h-screen overflow-hidden p-3">
                    {stageElement}
                </div>
            </div>
        );
    }

    // ----------------------------------------------
    // Wheel Mode
    // ----------------------------------------------

    return stageElement;
}
