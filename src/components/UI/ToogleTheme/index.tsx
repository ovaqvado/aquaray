// components/ToogleTheme.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ToogleTheme() {
    const [dark, setDark] = useState(true);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="relative w-20 h-10 rounded-full p-1 flex items-center transition-all duration-300"
            style={{
                background: "linear-gradient(90deg, #6d37fe 0%, #00ffff 100%)",
            }}
        >
            <motion.div
                initial={false}
                animate={{ x: dark ? 0 : 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute top-1 left-1 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                style={{
                    backgroundColor: "#0d1b2a", // тёмный фон под иконку
                    border: "2px solid #00ffff",
                }}
            >
                {dark ? (
                    <Moon size={18} className="text-cyan-400" />
                ) : (
                    <Sun size={18} className="text-yellow-400" />
                )}
            </motion.div>
        </button>
    );
}
