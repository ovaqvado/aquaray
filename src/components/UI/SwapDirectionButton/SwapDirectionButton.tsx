"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import arrow from "../../../images/change.svg";
import arrow_rel from "../../../images/arrow_rel.svg";

interface SwapDirectionButtonProps {
    onClick: () => void;
}

const SwapDirectionButton: React.FC<SwapDirectionButtonProps> = ({
    onClick,
}) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            className={style.btn_change}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image src={hover ? arrow_rel : arrow} alt="change" />
        </button>
    );
};

export default SwapDirectionButton;
