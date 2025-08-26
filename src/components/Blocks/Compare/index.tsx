import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import compareBg from "../../../images/purple.png";
import compareBg2 from "../../../images/bg2.png";
import compareMb from "../../../images/compareMb.png";
import compareMbGd from "../../../images/compareMbGd.png";

const Compare = () => {
    return (
        <div className={style.compare}>
            <Image className={style.bg} src={compareBg} alt="compare_bg" />
            <Image className={style.bg} src={compareBg2} alt="compare_bg" />
            <Image
                className={style.compareMb}
                src={compareMb}
                alt="compareMb"
            />
            <Image
                className={style.compareMbGd}
                src={compareMbGd}
                alt="compareMbGd"
            />
            <div className={style.text_container}>
                <p className={style.title}>Compare Fees</p>
                <p className={style.subtitle}>Lower fees. Higher value.</p>
            </div>
            <div className={style.table}>
                <div className={style.table_head}>
                    <p className={style.table_title}>DEX</p>
                    <p className={style.table_title}>Traiding Fee</p>
                    <p className={style.table_title}>Speed</p>
                    <p className={style.table_title}>Liquidity</p>
                </div>
                {/* Добавляем специальный класс для первой строки */}
                <div className={`${style.table_row} ${style.first_row}`}>
                    <p className={style.table_text}>AquaRay</p>
                    <p className={style.table_text}>0.1%</p>
                    <p className={style.table_text}>Ultra Fast</p>
                    <p className={style.table_text}>Aggregated</p>
                </div>
                <div className={style.table_row}>
                    <p className={style.table_text}>Raydium</p>
                    <p className={style.table_text}>0.25%</p>
                    <p className={style.table_text}>Fast</p>
                    <p className={style.table_text}>Very High</p>
                </div>
                <div className={style.table_row}>
                    <p className={style.table_text}>Orca</p>
                    <p className={style.table_text}>0.3%</p>
                    <p className={style.table_text}>Fast</p>
                    <p className={style.table_text}>High</p>
                </div>
            </div>
        </div>
    );
};

export default Compare;
