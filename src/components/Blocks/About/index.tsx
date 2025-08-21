import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
// Images
import arrow from "../../../images/change.svg";
import arrow_down from "../../../images/arrow_down.svg";
import sol from "../../../images/sol.png";
import usdt_img from "../../../images/usdt.png";

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.container_text}>
                <p className={style.title}>Swap tokens at the speed of light</p>
                <p className={style.description}>
                    The most efficient DEX on Solana with ultra-low fees
                </p>
            </div>
            <div className={style.container_calculator}>
                <div className={style.container_change}>
                    <p className={style.text_change}>Exchange Calculator</p>
                    <button className={style.btn_change}>
                        <Image src={arrow} alt="change" />
                    </button>
                </div>
                <div>
                    <div className={style.container_swap}>
                        <div className={style.change_currency}>
                            <Image
                                src={sol}
                                width={40}
                                height={40}
                                alt="valut"
                            />
                            <p>SOL</p>
                            <Image
                                src={arrow_down}
                                width={16}
                                height={16}
                                alt="arrow_down"
                            />
                        </div>
                        <div className={style.valut}>
                            <p className={style.currency}>1</p>
                            <p className={style.usd}>$0</p>
                        </div>
                    </div>
                    <div className={style.container_swap}>
                        <div className={style.change_currency}>
                            <Image
                                src={usdt_img}
                                width={40}
                                height={40}
                                alt="valut"
                            />
                            <p>USDT</p>
                            <Image
                                src={arrow_down}
                                width={16}
                                height={16}
                                alt="arrow_down"
                            />
                        </div>
                        <div className={style.valut}>
                            <p className={style.currency}>181.694081</p>
                            <p className={style.usd}>$0</p>
                        </div>
                    </div>
                    <div className={style.rate}>
                        <p>Rate:</p>
                        <p>1 SOL ≈ 181.694081 USDT</p>
                    </div>
                </div>
                <div>
                    <button className={style.btn_run}>Start Swapping</button>
                </div>
            </div>
        </div>
    );
};

export default About;
