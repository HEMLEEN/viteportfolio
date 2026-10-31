"use client";

import { useEffect, useState } from "react";
import SphereImageGrid, {type ImageData } from "./img-sphere";
import { PointerHighlight } from "@/components/velora/pointer-highlight";

const tile = (city: string, from: string, to: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><text x="200" y="215" font-size="44" font-family="Georgia,serif" fill="#fff" text-anchor="middle">${city}</text></svg>`
    )}`;

const BASE_IMAGES: Omit<ImageData, "id">[] = [
    { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chennai_-_bird%27s-eye_view.jpg?width=400", alt: "Aerial view of Chennai and Marina Beach", title: "Chennai", description: "Tamil Nadu’s capital on the Coromandel Coast, home to Marina Beach, one of the longest urban beaches in the world, and a deep Carnatic music tradition." },
    { src: tile("Bengaluru", "#0f766e", "#134e4a"), alt: "Bengaluru", title: "Bengaluru", description: "Karnataka’s capital and India’s tech hub, set on a plateau with a mild climate, lots of parks, and a busy café and craft-brewery scene." },
    { src: tile("Coimbatore", "#b45309", "#78350f"), alt: "Coimbatore", title: "Coimbatore", description: "Known as the Manchester of South India for its textile mills and engineering industry, with the Western Ghats rising right behind the city." },
    { src: tile("Kochi", "#0369a1", "#0c4a6e"), alt: "Kochi", title: "Kochi", description: "A Kerala port with centuries of spice trade. Fort Kochi is known for its Chinese fishing nets, old churches and art spaces." },
    { src: tile("Report", "#0369a1", "#0c4a6e"), alt: "Report", title: "Report management", description: " A smarter way to manage reports." },
    { src: tile("Church Site", "#0369a1", "#0c4a6e"), alt: "Report", title: "Church website", description: "Developing church organization site.." },
    { src: tile("Canteen Management", "#0369a1", "#0c4a6e"), alt: "Report", title: "Canteen management", description: " A smarter canteen." },


];

const IMAGES: ImageData[] = Array.from({ length: 36 }, (_, i) => {
    const base = BASE_IMAGES[i % BASE_IMAGES.length];
    return { id: `work-${i + 1}`, ...base };
});

function useSphereSize() {
    const [size, setSize] = useState(520);
    useEffect(() => {
        const update = () => setSize(window.innerWidth < 640 ? 340 : window.innerWidth < 1024 ? 460 : 560);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return size;
}

export default function WorkTogether() {
    const size = useSphereSize();

    return (
        <section
            id="work-together"
            className="w-full bg-[#12233a] text-[#f3efe6]"
            aria-labelledby="work-together-title"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_auto] lg:py-28">
                <div className="max-w-xl">
                    <h2
                        id="work-together-title"
                        className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Collaborate with <span className="text text-teal-500"> <PointerHighlight> Teams </PointerHighlight></span> Across Different <span className="text text-teal-500">Projects and Cities</span>.
                    </h2>
                    <p className="mt-6 max-w-md text-lg leading-relaxed text-[#f3efe6]/75">
                        I already have experience working with the <span className="text text-teal-500"><PointerHighlight> MERN Stack </PointerHighlight></span>, and I am interested in expanding my experience by working with different teams and projects. I enjoy developing <span className="text text-teal-500"><PointerHighlight> Web & Mobile applications </PointerHighlight></span>, solving technical problems, and learning new technologies.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        {/* <a
                            href={`mailto:${email}?subject=Let’s work together`}
                            className="rounded-full bg-[#ffc94d] px-7 py-3.5 text-base font-semibold text-[#12233a] transition-colors hover:bg-[#ffd877] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc94d]"
                        >
                            Start a project
                        </a> */}
                        {/* <a
                            href="/projects"
                            className="rounded-full border border-[#f3efe6]/30 px-7 py-3.5 text-base font-medium transition-colors hover:border-[#f3efe6]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3efe6]"
                        >
                            See My Projects
                        </a> */}
                    </div>

                    {/* <p className="mt-8 text-sm text-[#f3efe6]/60">
                        Booking projects for next quarter. Drag the sphere to browse; tap a
                        photo to open it.
                    </p> */}
                </div>

                <div className="flex justify-center">
                    <SphereImageGrid
                        images={IMAGES}
                        containerSize={size}
                        sphereRadius={size * 0.36}
                        dragSensitivity={0.8}
                        momentumDecay={0.96}
                        maxRotationSpeed={6}
                        baseImageScale={0.16}
                        perspective={1000}
                        autoRotate
                        autoRotateSpeed={0.2}
                    />
                </div>
            </div>
        </section>
    );
}