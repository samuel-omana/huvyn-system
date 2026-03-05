'use client';

import { useEffect, useRef } from 'react';

export const OrganicMesh = ({
    className = "",
    opacity = 0.5,
    particleOpacity = 0.25,
    rows = 25,
    cols = 25,
    spacing = 35,
    waveIntensity = 15,
    speed = 0.01,
    minSize = 0.8,
    maxSize = 2.0
}: {
    className?: string;
    opacity?: number;
    particleOpacity?: number;
    rows?: number;
    cols?: number;
    spacing?: number;
    waveIntensity?: number;
    speed?: number;
    minSize?: number;
    maxSize?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; originX: number; originY: number; size: number; color: string }[] = [];

        const init = () => {
            const container = canvas.parentElement;
            if (!container) return;
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            // Calculate how many cols/rows needed to fill the entire canvas
            const numCols = Math.ceil(canvas.width / spacing) + 1;
            const numRows = Math.ceil(canvas.height / spacing) + 1;

            particles = [];
            for (let i = 0; i < numCols; i++) {
                for (let j = 0; j < numRows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;
                    particles.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        size: minSize + Math.random() * maxSize,
                        color: Math.random() > 0.5 ? '#D4D4D8' : '#A1A1AA'
                    });
                }
            }
        };

        let time = 0;
        const animate = () => {
            time += speed;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                const dist = Math.sqrt(Math.pow(p.originX - canvas.width / 2, 2) + Math.pow(p.originY - canvas.height / 2, 2));
                const wave = Math.sin(time + dist * 0.008) * waveIntensity;

                p.x = p.originX + Math.cos(time + i * 0.1) * 3;
                p.y = p.originY + wave;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = particleOpacity;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', init);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [cols, rows, spacing, waveIntensity, speed, particleOpacity, minSize, maxSize]);

    return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} style={{ opacity }} />;
};
