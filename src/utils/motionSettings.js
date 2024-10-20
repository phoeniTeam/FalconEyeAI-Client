export const revealingMotion = {
    initial: { opacity: 0, filter: "blur(10px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toTopMotion = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toBottomMotion = {
    initial: { opacity: 0, y: -20, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toLeftMotion = {
    initial: { opacity: 0, x: -20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toRightMotion = {
    initial: { opacity: 0, x: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toBottomRightMotion = {
    initial: { opacity: 0, x: 20, y: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toBottomLeftMotion = {
    initial: { opacity: 0, x: -20, y: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toTopRightMotion = {
    initial: { opacity: 0, x: 20, y: -20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

export const toTopLeftMotion = {
    initial: { opacity: 0, x: -20, y: -20, filter: "blur(10px)" },
    whileInView: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
    viewport: { once: true },
    transition: { duration: 1, type: "tween" },
};

