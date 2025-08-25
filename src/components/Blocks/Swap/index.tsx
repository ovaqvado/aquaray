// Swap.tsx
"use client";
import React from "react";
import style from "./style.module.scss";
import SwapCalculator from "@/components/UI/SwapCalculator/SwapCalculator";
import Image from "next/image";
// Images
import bSwap from "../../../images/bSwap.png";
import gSwap from "../../../images/gSwap.png";

const Swap = () => (
    <div className={style.swap}>
        <Image src={gSwap} alt="gSwap" className={style.bg2} />
        <Image src={bSwap} alt="bSwap" className={style.bg} />
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
