"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface AntigravityProps {
    count?: number;
    magnetRadius?: number;
    ringRadius?: number;
    waveSpeed?: number;
    waveAmplitude?: number;
    particleSize?: number;
    lerpSpeed?: number;
    color?: string;
    autoAnimate?: boolean;
    particleVariance?: number;
    rotationSpeed?: number;
    depthFactor?: number;
    pulseSpeed?: number;
    particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron';
    fieldStrength?: number;
}

const AntigravityInner: React.FC<AntigravityProps> = ({
    count = 300,
    magnetRadius = 10,
    ringRadius = 10,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 2,
    lerpSpeed = 0.1,
    color = '#FF9FFC',
    autoAnimate = false,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = 'capsule',
    fieldStrength = 10
}) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const { viewport } = useThree();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastMouseMoveTime = useRef(0);
    const virtualMouse = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const temp = [];
        const width = viewport.width || 100;
        const height = viewport.height || 100;

        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            const x = (Math.random() - 0.5) * width;
            const y = (Math.random() - 0.5) * height;
            // Distribute more in the background, less in the immediate foreground
            const z = (Math.random() - 0.5) * 40 - 10;
            const randomRadiusOffset = (Math.random() - 0.5) * 2;

            temp.push({
                t,
                factor,
                speed,
                xFactor,
                yFactor,
                zFactor,
                mx: x,
                my: y,
                mz: z,
                cx: x,
                cy: y,
                cz: z,
                vx: 0,
                vy: 0,
                vz: 0,
                randomRadiusOffset
            });
        }
        return temp;
    }, [count, viewport.width, viewport.height]);

    // Initialize colors
    React.useLayoutEffect(() => {
        if (!meshRef.current) return;

        // Palette: Soft Gray, Medium Gray, Purple (Accent), Cyan (Accent)
        const palette = ['#a1a1aa', '#d4d4d8', '#71717a', '#6c63ff', '#00d4ff'];
        const tempColor = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const r = Math.random();
            let colorHex;
            if (r < 0.4) colorHex = palette[0]; // 40% Soft Gray
            else if (r < 0.7) colorHex = palette[1]; // 30% Light Gray
            else if (r < 0.85) colorHex = palette[2]; // 15% Darker Gray
            else if (r < 0.92) colorHex = palette[3]; // 7% Purple
            else colorHex = palette[4]; // 8% Cyan

            tempColor.set(colorHex);
            meshRef.current.setColorAt(i, tempColor);
        }
        if (meshRef.current.instanceColor) {
            meshRef.current.instanceColor.needsUpdate = true;
        }
    }, [count]);

    useFrame(state => {
        const mesh = meshRef.current;
        if (!mesh) return;

        const { viewport: v, pointer: m } = state;
        const mouseDist = Math.sqrt(
            Math.pow(m.x - lastMousePos.current.x, 2) + Math.pow(m.y - lastMousePos.current.y, 2)
        );

        if (mouseDist > 0.001) {
            lastMouseMoveTime.current = Date.now();
            lastMousePos.current = { x: m.x, y: m.y };
        }

        let destX = (m.x * v.width) / 2;
        let destY = (m.y * v.height) / 2;

        if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
            const time = state.clock.getElapsedTime();
            destX = Math.sin(time * 0.5) * (v.width / 4);
            destY = Math.cos(time * 0.5 * 2) * (v.height / 4);
        }

        const smoothFactor = 0.05;
        virtualMouse.current.x += (destX - virtualMouse.current.x) * smoothFactor;
        virtualMouse.current.y += (destY - virtualMouse.current.y) * smoothFactor;

        const targetX = virtualMouse.current.x;
        const targetY = virtualMouse.current.y;

        particles.forEach((particle, i) => {
            let { t, speed, mx, my, mz, cz } = particle;

            // Very subtle natural drift
            t = particle.t += speed / 10;
            const driftX = Math.sin(t) * 0.5;
            const driftY = Math.cos(t) * 0.5;

            const dx = (mx + driftX) - targetX;
            const dy = (my + driftY) - targetY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let targetPos = { x: mx + driftX, y: my + driftY, z: mz * depthFactor };

            // Smooth Repulsion
            if (dist < magnetRadius) {
                const force = (magnetRadius - dist) / magnetRadius; // 0 to 1
                const repulsion = force * fieldStrength;

                const angle = Math.atan2(dy, dx);
                targetPos.x += Math.cos(angle) * repulsion;
                targetPos.y += Math.sin(angle) * repulsion;
                targetPos.z += force * 2; // Slight lift
            }

            particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
            particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
            particle.cz += (targetPos.z - particle.cz) * lerpSpeed;

            dummy.position.set(particle.cx, particle.cy, particle.cz);

            // Rotation: Random tumbling + slight alignment with mouse influence
            dummy.rotation.x = Math.sin(t * 0.2) * Math.PI;
            dummy.rotation.y = Math.cos(t * 0.2) * Math.PI;
            dummy.rotation.z = Math.sin(t * 0.2 + particle.factor) * Math.PI;

            const scale = particleSize;
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        });
        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            {particleShape === 'capsule' && <capsuleGeometry args={[0.015, 0.6, 4, 8]} />}
            {particleShape === 'sphere' && <sphereGeometry args={[0.1, 16, 16]} />}
            {particleShape === 'box' && <boxGeometry args={[0.1, 0.1, 0.1]} />}
            {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.1]} />}
            <meshBasicMaterial color="#ffffff" vertexColors={false} toneMapped={false} />
        </instancedMesh>
    );
};

const Antigravity: React.FC<AntigravityProps> = props => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 50], fov: 35 }}
                gl={{ alpha: true, antialias: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
                eventSource={typeof window !== 'undefined' ? document.body : undefined}
                eventPrefix="client"
            >
                <AntigravityInner {...props} />
            </Canvas>
        </div>
    );
};

export default Antigravity;
