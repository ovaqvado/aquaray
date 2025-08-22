"use client";
import React from "react";
import style from "./style.module.scss";

interface RateDisplayProps {
    rate: number;
    isReversed: boolean;
}

const RateDisplay: React.FC<RateDisplayProps> = ({ rate, isReversed }) => (
    <div className={style.rate}>
        <p>Rate:</p>
        <p>
            {isReversed
                ? `1 USDT ≈ ${(1 / rate).toFixed(6)} SOL`
                : `1 SOL ≈ ${rate} USDT`}
        </p>
    </div>
);

export default RateDisplay;
