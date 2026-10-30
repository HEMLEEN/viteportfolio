
"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

import CommonModal, { type ModalData } from "./CommonModal";

export interface FolderFile extends ModalData {
    href?: string;
}

export interface Folder {
    title: string;
    subtitle: string;
    variant?: "light" | "teal" | "dark";
    files: FolderFile[];
}

interface AboutSectionProps {
    intro?: string;
    folders?: Folder[];
    contactHref?: string;
}

const display = {
    fontFamily: "Anton, 'Bebas Neue', Impact, sans-serif",
};

const BACK_PATH =
    "M0 64 Q0 40 24 40 H170 C195 40 200 0 230 0 H366 Q390 0 390 24 V286 Q390 310 366 310 H24 Q0 310 0 286 Z";

const FRONT_PATH =
    "M0 94 Q0 70 24 70 H150 C175 70 180 96 205 96 H366 Q390 96 390 120 V286 Q390 310 366 310 H24 Q0 310 0 286 Z";

const maskUrl = (d: string) =>
    `url("data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 390 310' preserveAspectRatio='none'><path d='${d}'/></svg>`
    )}")`;

const FRONT_MASK = {
    maskImage: maskUrl(FRONT_PATH),
    WebkitMaskImage: maskUrl(FRONT_PATH),
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
} as const;

const skin = {
    light: {
        back: "fill-neutral-200",
        front: "bg-white/55",
        text: "text-black",
        sub: "text-black/60",
        stroke: "rgba(255,255,255,0.9)",
        plus: "bg-black text-white",
    },
    teal: {
        back: "fill-teal-300",
        front: "bg-teal-400/30",
        text: "text-black",
        sub: "text-black/65",
        stroke: "rgba(255,255,255,0.7)",
        plus: "bg-black text-white",
    },
    dark: {
        back: "fill-neutral-800",
        front: "bg-neutral-900/80",
        text: "text-white",
        sub: "text-white/65",
        stroke: "rgba(255,255,255,0.25)",
        plus: "bg-white text-black",
    },
} as const;

const fileSkin = [
    "bg-white text-black ring-1 ring-black/10",
    "bg-black text-white",
    "bg-teal-500 text-white",
];

const defaultFolders: Folder[] = [
    {
        title: "Experience",
        subtitle: "3 roles",
        variant: "light",
        files: [
            {
                name: "Software Engineer",
                meta: "PSG Software Technologies · 2023 to Present",
                desc: `Working as a Software Engineer developing and maintaining scalable web applications.\n
Responsible for building responsive frontend interfaces, developing REST APIs, integrating backend services, optimizing application performance and implementing reusable components.\n
Collaborating with team members to deliver reliable and maintainable software solutions.`,
                languages: [
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Redux",
                    "Tailwind CSS",
                    "REST API",
                    "Git",
                ],
            },
            {
                name: "Mern Developer",
                meta: "Freelance · 2021 to 2023",
                desc: `Developed responsive web applications and reusable UI components for freelance projects.

Worked on frontend integration, API connectivity, responsive layouts and reusable React components.

Focused on delivering clean, maintainable and user-friendly interfaces.`,
                languages: [
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "Next.js",
                    "Redux",
                    "Axios",
                    "Git",
                ],
            },
            {
                name: "Backend Developer",
                meta: "Cognizant Technology Solutions · 2019 to 2021",
                desc: `Worked on backend application development.

Built maintainable components, integrated backend APIs and contributed to application development and optimization.`,
                languages: [
                    "Node.js",
                    "TypeScript",
                    "MongoDB",
                    "Git"
                ],
            },
        ],
    },
    {
        title: "Education",
        subtitle: "1 item",
        variant: "teal",
        files: [
            {
                name: "B.Sc Information Technology",
                meta: "Bachelor's Degree",
                desc: `Completed Bachelor of Science in Information Technology at Ksg College of Arts & Science.

Gained knowledge in programming, databases, software engineering and web technologies.`,
                languages: [
                    "Programming",
                    "Database Management",
                    "Web Development",
                    "Embbeded System",
                ],
            },
        ],
    },
    {
        title: "Beyond code",
        subtitle: "3 items",
        variant: "dark",
        files: [
            {
                name: "Open Source",
                meta: "GitHub · Projects",
                desc: `Exploring new technologies and building reusable solutions.

Sharing development projects, experiments and learning experiences through GitHub.`,
                languages: [
                    "GitHub",
                    "React",
                    "Node.js",
                    "TypeScript",
                ],
                href: "https://github.com/HEMLEEN",
            },
            {
                name: "Writing",
                meta: "Technical Notes",
                desc: `Documenting technical learnings, development experiences and programming concepts.`,
                languages: [
                    "JavaScript",
                    "React",
                    "Node.js",
                ],
            },
            {
                name: "Photography",
                meta: "Personal Interest",
                desc: `Enjoy capturing moments and exploring creative perspectives.`,
                languages: [
                    "Creativity",
                    "Photography",
                ],
            },
        ],
    },
];

// --------------------------------------------------
// Folder Card
// --------------------------------------------------

function FolderCard({
    folder,
    open,
    onToggle,
    index,
    onFileClick,
}: {
    folder: Folder;
    open: boolean;
    onToggle: () => void;
    index: number;
    onFileClick: (file: FolderFile) => void;
}) {
    const reduce = useReducedMotion();

    const ref = useRef<HTMLDivElement>(null);

    const s = skin[folder.variant ?? "light"];

    const n = folder.files.length;
    const mid = (n - 1) / 2;

    // 3D hover animation
    const px = useMotionValue(0);
    const py = useMotionValue(0);

    const rotateY = useSpring(
        useTransform(px, [-0.5, 0.5], [-12, 12]),
        { stiffness: 120, damping: 18 }
    );

    const rotateX = useSpring(
        useTransform(py, [-0.5, 0.5], [8, -8]),
        { stiffness: 120, damping: 18 }
    );

    const onMove = (e: PointerEvent<HTMLDivElement>) => {
        if (reduce || !ref.current) return;

        const r = ref.current.getBoundingClientRect();

        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
    };

    const onLeave = () => {
        px.set(0);
        py.set(0);
    };

    const [orderedFiles, setOrderedFiles] = useState(folder.files);

    const handleFileSelect = (file: FolderFile) => {
        setOrderedFiles((prev) => {
            const selectedIndex = prev.findIndex(
                (item) => item.name === file.name
            );

            if (selectedIndex === -1) return prev;

            const updated = [...prev];
            const [selected] = updated.splice(selectedIndex, 1);

            return [selected, ...updated];
        });

        onFileClick(file);
    };

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                margin: "-80px",
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative pt-36"
        >
            <motion.div
                ref={ref}
                onPointerMove={onMove}
                onPointerLeave={onLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 900,
                }}
                className="relative aspect-[390/310] w-full"
            >
                {/* Floor shadow */}
                <div className="pointer-events-none absolute inset-x-6 -bottom-2 h-8 rounded-full bg-black/25 blur-xl" />

                {/* Back panel */}
                <svg
                    viewBox="0 0 390 310"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full"
                >
                    <path
                        d={BACK_PATH}
                        className={s.back}
                    />
                </svg>

                {/* File cards */}
                {orderedFiles.map((file, i) => (
                    <motion.div
                        key={file.name}
                        animate={
                            open
                                ? {
                                    y: `${-(42 + i * 20)}%`,
                                    x: `${(i - mid) * 4}%`,
                                    rotate: (i - mid) * 5,
                                }
                                : {
                                    y: "8%",
                                    x: "0%",
                                    rotate: 0,
                                }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 110,
                            damping: 16,
                            delay: open ? i * 0.04 : 0,
                        }}
                        style={{
                            zIndex: n - i,
                        }}
                        className="absolute left-[8%] top-[22%] h-[60%] w-[84%]"
                    >
                        <button
                            type="button"
                            onClick={() => handleFileSelect(file)}
                            disabled={!open}
                            tabIndex={open ? 0 : -1}
                            aria-label={`View ${file.name} details`}
                            className={`flex h-full w-full flex-col justify-between gap-2 rounded-2xl p-4 text-left shadow-lg transition-shadow hover:shadow-xl ${fileSkin[i % 3]
                                } ${open
                                    ? "pointer-events-auto cursor-pointer"
                                    : "pointer-events-none"
                                }`}
                        >
                            <span className="text-base font-semibold leading-tight">
                                {file.name}
                            </span>

                            <span className="text-sm font-medium leading-tight opacity-75">
                                {file.meta}
                            </span>
                        </button>
                    </motion.div>
                ))}

                {/* Front glass panel */}
                <div className="pointer-events-none absolute inset-0 z-20">

                    {/* Glass background */}
                    <div
                        className={`pointer-events-none absolute inset-0 backdrop-blur-xl ${s.front}`}
                        style={FRONT_MASK}
                    />

                    {/* Glass gradient */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-70"
                        style={{
                            ...FRONT_MASK,
                            background:
                                "radial-gradient(ellipse at 15% 20%, rgba(255,255,255,0.55), transparent 55%), radial-gradient(ellipse at 90% 100%, rgba(20,184,166,0.25), transparent 50%)",
                        }}
                    />

                    {/* Front border */}
                    <svg
                        viewBox="0 0 390 310"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full"
                    >
                        <path
                            d={FRONT_PATH}
                            fill="none"
                            stroke={s.stroke}
                            strokeWidth="1.5"
                        />
                    </svg>

                    {/* Folder toggle button */}
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-expanded={open}
                        aria-label={`${folder.title}, ${folder.subtitle}`}
                        className="pointer-events-auto absolute inset-x-0 bottom-0 z-30 flex h-[42%] items-end justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-teal-600"
                    >
                        <span>
                            <span
                                style={display}
                                className={`block text-3xl uppercase leading-none ${s.text}`}
                            >
                                {folder.title}
                            </span>

                            <span className={`mt-2 block text-sm ${s.sub}`}>
                                {folder.subtitle}
                            </span>
                        </span>

                        <motion.span
                            animate={{
                                rotate: open ? 45 : 0,
                            }}
                            className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl leading-none shadow-lg ${s.plus}`}
                        >
                            +
                        </motion.span>
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --------------------------------------------------
// About Section
// --------------------------------------------------

export default function AboutSection({
    intro = "Results-driven Senior Full Stack Developer specializing in MERN Stack Technologies. Delivered scalable web and mobile applications through expertise in TypeScript, React.js, Next.js, Node.js, Express.js, NestJS, MongoDB, SQL, React Native, AWS, and Docker. Focused on optimizing application performance, implementing secure authentication systems, and enhancing user experience in diverse environments.",
    folders = defaultFolders,
    contactHref = "#contact",
}: AboutSectionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const [showContact, setShowContact] = useState(false);

    const [selectedFile, setSelectedFile] =
        useState<ModalData | null>(null);

    const [modalOpen, setModalOpen] = useState(false);


    // Open file details
    const handleFileClick = (file: FolderFile) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    // Close modal
    const handleModalClose = () => {
        setModalOpen(false);
    };


    return (
        <section
            id="about"
            className="bg-[#f4f6f8] px-6 py-24 [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:24px_24px] md:px-12"
        >
            <div className="mx-auto max-w-7xl">

                {/* About header */}
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <h2
                            style={display}
                            className="text-[18vw] uppercase leading-[0.9] text-black md:text-[9vw]"
                        >
                            About me
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
                            {intro}
                        </p>
                    </div>

                    <div className="relative">
                        <motion.a
                            href={contactHref}
                            onHoverStart={() => setShowContact(true)}
                            onHoverEnd={() => setShowContact(false)}
                            onClick={(e) => {
                                e.preventDefault();
                                setShowContact((prev) => !prev);
                            }}
                            whileHover={{
                                scale: 1.06,
                                backgroundColor: "#14b8a6",
                                color: "#fff",
                                borderColor: "#14b8a6",
                            }}
                            className="relative z-20 grid h-28 w-28 shrink-0 place-items-center rounded-full border border-black/40 text-center text-sm font-semibold uppercase leading-tight"
                        >
                            Get in
                            <br />
                            touch
                        </motion.a>

                        <AnimatePresence>
                            {showContact && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute right-0 top-full z-30 mt-4 flex min-w-64 flex-col gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl"
                                    onHoverStart={() => setShowContact(true)}
                                    onHoverEnd={() => setShowContact(false)}
                                >
                                    <a
                                        href="mailto:xx@mail.com"
                                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-teal-50"
                                    >
                                        <Mail size={20} />
                                        <span className="text-sm">xx@mail.com</span>
                                    </a>

                                    <a
                                        href="tel:+91XXXXXXXX7352"
                                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-teal-50"
                                    >
                                        <Phone size={20} />
                                        <span className="text-sm">XXXXXX7352</span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/xxx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-teal-50"
                                    >
                                        <Linkedin size={20} />
                                        <span className="text-sm">LinkedIn Profile</span>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Folders */}
                <div className="mt-6 grid grid-cols-1 gap-x-10 md:grid-cols-3">
                    {folders.map((folder, i) => (
                        <FolderCard
                            key={folder.title}
                            folder={folder}
                            index={i}
                            open={openIndex === i}
                            onToggle={() =>
                                setOpenIndex(
                                    openIndex === i ? -1 : i
                                )
                            }
                            onFileClick={handleFileClick}
                        />
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-black/60">
                    Hover to lean. Click a folder to open it.
                </p>
            </div>

            {/* Common Details Modal */}
            <CommonModal
                open={modalOpen}
                data={selectedFile}
                onClose={handleModalClose}
            />
        </section>
    );
}
