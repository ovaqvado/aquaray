import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
//Images
import solLogo from "../../../images/sol.png";
import rayLogo from "../../../images/ray.svg";
import orcaLogo from "../../../images/orca.svg";

const Provide = () => {
    return (
        <div className={style.provide}>
            <div className={style.text_container}>
                <p className={style.title}>Provide Liquidity</p>
                <p className={style.subtitle}>
                    Become a liquidity provider and start earning a share of
                    swap fees on AquaRay
                </p>
            </div>
            <div className={style.container_info}>
                <div className={style.cards_container}>
                    <div className={style.card}>
                        <div className={style.card_inner}>
                            <Image src={solLogo} alt="sol" />
                            <span className={style.card_text_container}>
                                <p className={style.card_text}>SOL</p>
                                <p className={style.card_text}>
                                    0.05% fee | Deepest liquidity
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_inner}>
                            <Image src={rayLogo} alt="ray" />
                            <span className={style.card_text_container}>
                                <p className={style.card_text}>RAY</p>
                                <p className={style.card_text}>
                                    0.3% fee | High volatility
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_inner}>
                            <Image src={orcaLogo} alt="orca" />
                            <span className={style.card_text_container}>
                                <p className={style.card_text}>ORCA</p>
                                <p className={style.card_text}>
                                    0.25% fee | Stable pair
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.box_info}>
                    <p className={style.title_info}>Your Potential Earnings</p>
                    <div className={style.text_info}>
                        <div className={style.text_info_inner}>
                            APR up to 12%
                        </div>
                    </div>

                    <p className={style.subtitle_text_info}>
                        Provide liquidity to earn a share of the 0.1% swap fees
                        proportional to your stake in the pool
                    </p>
                </div>
            </div>
            <p className={style.subtitle}>
                Add liquidity in popular pairs, earn passive income from swap
                fees, and remove liquidity anytime with no lockups
            </p>
        </div>
    );
};

export default Provide;
