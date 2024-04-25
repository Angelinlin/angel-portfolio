'use client'
import { useRef, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion';

export default function Framer({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const { height, width, left, top } = rect;
            const middleX = clientX - (left + width / 2)
            const middleY = clientY - (top + height / 2)
            setPosition({ x: middleX, y: middleY })
        }
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
}