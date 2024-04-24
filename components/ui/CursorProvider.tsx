'use client'
import React from 'react'
import { useEffect, useRef } from "react";

export default function CursorProvider({ children }: { children: React.ReactNode }) {
    const tracker = useRef<HTMLDivElement | null>(null);

    const mouse = {
        x: 0,
        y: 0,
    }

    const onMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    const tick = () => {
        if (tracker.current) {
            tracker.current.style.left = `${mouse.x}px`;
            tracker.current.style.top = `${mouse.y}px`;
        }
        requestAnimationFrame(tick);
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        tick();
    }, []);

    return (
        <>
            <div ref={tracker} className='pointer-events-none w-12 h-12 blur-md saturate-200 bg-neutral-800 fixed -translate-x-6 rounded-full -translate-y-6 z-50'></div>
            {children}
        </>
    )
}