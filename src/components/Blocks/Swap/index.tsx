// Swap.tsx
"use client";
import React from "react";
import style from "./style.module.scss";
import SwapCalculator from "@/components/UI/SwapCalculator/SwapCalculator";

const Swap = () => (
    <div className={style.swap}>
        <div className={style.container_text}>
            <p className={style.title}>Swap tokens at the speed of light</p>
            <p className={style.description}>
                The most efficient DEX on Solana with ultra-low fees
            </p>
        </div>
        <SwapCalculator />
    </div>
);

export default Swap;
