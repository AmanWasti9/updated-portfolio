import gsap from "gsap";

export type TextEffect =
    | "typewriter"
    | "blur"
    | "slideUp"
    | "stretch"
    | "flip"
    | "reverseScale"
    | "rotate3d";

export function animateText(
    elements: HTMLElement[],
    effect: TextEffect
) {
    const tl = gsap.timeline();

    switch (effect) {
        case "typewriter":
            tl.fromTo(
                elements,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.03,
                    ease: "none",
                }
            );
            break;

        case "blur":
            tl.fromTo(
                elements,
                { opacity: 0, filter: "blur(20px)" },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    stagger: 0.04,
                    ease: "power2.out",
                }
            );
            break;

        case "slideUp":
            tl.fromTo(
                elements,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.02,
                    ease: "elastic.out(1, 0.5)",
                }
            );
            break;

        case "stretch":
            tl.fromTo(
                elements,
                { opacity: 0, scaleY: 10, scaleX: 0.2 },
                {
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: 0.05,
                    ease: "power2.out",
                }
            );
            break;

        case "flip":
            tl.fromTo(
                elements,
                { opacity: 0, rotationX: -90 },
                {
                    opacity: 1,
                    rotationX: 0,
                    stagger: 0.03,
                    transformOrigin: "center",
                }
            );
            break;

        case "reverseScale":
            tl.fromTo(
                elements,
                { opacity: 0, scaleX: -1 },
                {
                    opacity: 1,
                    scaleX: 1,
                    stagger: 0.04,
                    ease: "power2.out",
                }
            );
            break;

        case "rotate3d":
            tl.fromTo(
                elements,
                { opacity: 0, rotationX: -90, y: 30 },
                {
                    opacity: 1,
                    rotationX: 0,
                    y: 0,
                    stagger: 0.03,
                    ease: "power1.inOut",
                }
            );
            break;
    }

    return tl;
}