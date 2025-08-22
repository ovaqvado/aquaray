"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import SwapDirectionButton from "../SwapDirectionButton/SwapDirectionButton";
import RateDisplay from "../RateDisplay/RateDisplay";
import sol from "../../../images/sol.png";
import usdt_img from "../../../images/usdt.png";

const RATE = 181.694081;

const SwapCalculator = () => {
    const [inputValue, setInputValue] = useState("1");
    const [outputValue, setOutputValue] = useState((1 * RATE).toFixed(6));
    const [isReversed, setIsReversed] = useState(false);
    const [activeInput, setActiveInput] = useState<"input" | "output" | null>(
        null,
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setInputValue(value);
            setOutputValue(
                value
                    ? !isReversed
                        ? (parseFloat(value) * RATE).toFixed(6)
                        : (parseFloat(value) / RATE).toFixed(6)
                    : "0",
            );
        }
    };

    const handleOutputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setOutputValue(value);
            setInputValue(
                value
                    ? !isReversed
                        ? (parseFloat(value) / RATE).toFixed(6)
                        : (parseFloat(value) * RATE).toFixed(6)
                    : "0",
            );
        }
    };

    const handleSwapDirection = () => setIsReversed(!isReversed);

    return (
        <div className={style.container_calculator}>
            <div className={style.container_change}>
                <p className={style.text_change}>Exchange Calculator</p>
                <SwapDirectionButton onClick={handleSwapDirection} />
            </div>

            <div className={style.inputs_rate_wrapper}>
                {/* Колонка с инпутами */}
                <div className={style.inputs_column}>
                    <CurrencyInput
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={() => setActiveInput("input")}
                        onBlur={() => setActiveInput(null)}
                        active={activeInput === "input"}
                        currencyImg={isReversed ? usdt_img : sol}
                        currencyName={isReversed ? "USDT" : "SOL"}
                    />

                    <CurrencyInput
                        value={outputValue}
                        onChange={handleOutputChange}
                        onFocus={() => setActiveInput("output")}
                        onBlur={() => setActiveInput(null)}
                        active={activeInput === "output"}
                        currencyImg={isReversed ? sol : usdt_img}
                        currencyName={isReversed ? "SOL" : "USDT"}
                    />
                </div>

                {/* Rate сбоку */}
                <RateDisplay rate={RATE} isReversed={isReversed} />
            </div>

            <button className={style.btn_run}>Start Swapping</button>
        </div>
    );
};

export default SwapCalculator;
