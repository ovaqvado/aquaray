"use client";
import Image, { StaticImageData } from "next/image";
import style from "./style.module.scss";
import React from "react";
// импорт стрелки через ES-модуль
import arrowDown from "../../../images/arrow_down.svg";

interface CurrencyInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
    active: boolean;
    currencyImg: StaticImageData;
    currencyName: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
    value,
    onChange,
    onFocus,
    onBlur,
    active,
    currencyImg,
    currencyName,
}) => (
    <div className={`${style.container_swap} ${active ? style.active : ""}`}>
        <div className={style.change_currency}>
            <Image
                className={style.image}
                src={currencyImg}
                width={40}
                height={40}
                alt="currency"
            />
            <p className={style.name}>{currencyName}</p>
            <Image src={arrowDown} width={16} height={16} alt="arrow_down" />
        </div>
        <div className={style.valut}>
            <input
                className={style.currency_input}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                type="text"
                inputMode="decimal"
            />
            <p className={style.usd}>$0</p>
        </div>
    </div>
);

export default CurrencyInput;
