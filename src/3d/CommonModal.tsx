
"use client";

import { useEffect, useState } from "react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import {
    X,
    ArrowUpRight,
    Code2,
} from "lucide-react";

export interface ModalData {
    name: string;
    meta: string;
    desc: string;
    languages?: string[];
}

interface CommonModalProps {
    open: boolean;
    data: ModalData | null;
    onClose: () => void;
}

export default function CommonModal({
    open,
    data,
    onClose,
}: CommonModalProps) {
    const [showMore, setShowMore] = useState(false);

    const isLong = (data?.desc.length ?? 0) > 220;

    useEffect(() => {
        setShowMore(false);
    }, [data]);

    // Escape key and body scroll
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && data && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="common-modal-title"
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 20,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 25,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative my-auto w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-[#f4f6f8] shadow-2xl"
                    >
                        {/* Modal Header */}
                        <div className="relative overflow-hidden bg-neutral-950 px-7 py-9 text-white sm:px-10">

                            {/* Background decoration */}
                            <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full bg-teal-400/20 blur-3xl" />

                            {/* Close icon */}
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close modal"
                                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative z-10">
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
                                    Experience & Details
                                </p>

                                <h2
                                    id="common-modal-title"
                                    className="max-w-md text-3xl font-bold leading-tight sm:text-4xl"
                                >
                                    {data.name}
                                </h2>

                                <p className="mt-3 text-sm leading-relaxed text-white/60">
                                    {data.meta}
                                </p>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="px-7 py-8 sm:px-10">

                            {/* Description */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-500/10 text-teal-600">
                                        <Code2 size={17} />
                                    </span>

                                    <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                                        About
                                    </h3>
                                </div>

                                <p className="whitespace-pre-line text-sm leading-7 text-neutral-700 sm:text-base">
                                    {isLong && !showMore
                                        ? `${data.desc.slice(0, 220).trim()}...`
                                        : data.desc}
                                </p>

                                {isLong && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowMore((prev) => !prev)
                                        }
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-teal-600 transition hover:text-teal-700"
                                    >
                                        {showMore
                                            ? "Show less"
                                            : "Read more"}

                                        <ArrowUpRight size={15} />
                                    </button>
                                )}
                            </div>

                            {/* Technologies */}
                            {data.languages &&
                                data.languages.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-neutral-500">
                                            Technologies & Skills
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                            {data.languages.map(
                                                (language) => (
                                                    <span
                                                        key={language}
                                                        className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:border-teal-400 hover:text-teal-600"
                                                    >
                                                        {language}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                            {/* Footer */}
                            <div className="mt-9 flex justify-end border-t border-neutral-200 pt-5">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
