"use client";

import React from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "motion/react";

type CurvedScrollWrapperProps = {
    children: React.ReactNode;
    perspective?: number;
    damping?: number;
    stiffness?: number;
    skewRange?: [number, number];
    rotateRange?: [number, number];
    className?: string;
};

const CurvedScrollWrapper: React.FC<CurvedScrollWrapperProps> = ({
    children,
    perspective = 1000,
    damping = 50,
    stiffness = 400,
    skewRange = [-2, 2],
    rotateRange = [1, -1],
    className = "",
}) => {
    const { scrollY } = useScroll();
    const velocity = useVelocity(scrollY);

    const smooth = useSpring(velocity, { damping, stiffness });

    const skewY = useTransform(smooth, [-3000, 3000], skewRange, { clamp: true });
    const rotateX = useTransform(smooth, [-3000, 3000], rotateRange, { clamp: true });

    return (
        <div style={{ perspective: `${perspective}px` }} className={className}>
            <motion.div
                style={{
                    skewY,
                    rotateX,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    width: "100%",
                    willChange: "transform",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default CurvedScrollWrapper;
