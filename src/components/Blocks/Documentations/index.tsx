import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
// Image
import arrow from "../../../images/arrow_right.svg";
import bg from "../../../images/bgDoc.png";

const Documentations = () => {
    return (
        <div id="docs" className={style.documentations}>
            <Image className={style.bg} src={bg} alt="background" />
            <div className={style.text_container}>
                <p className={style.title}>Documentation</p>
                <p className={style.subtitle}>
                    Here you&lsquo;ll find everything from smart contract
                    architecture and liquidity pool mechanics to integration
                    guides
                </p>
            </div>
            <div className={style.slider_container}>
                <div className={style.card_container}>
                    <div className={style.card}>
                        <p className={style.title_card}>How to Swap</p>
                        <p className={style.description_card}>
                            Learn how to perform token swaps on AquaRay with our
                            step-by-step guide
                        </p>
                        <Link className={style.read_btn} href="/">
                            <span className={style.read_text}>Read more</span>
                            <Image
                                className={style.arrow}
                                src={arrow}
                                alt="arrow"
                            />
                        </Link>
                    </div>
                    <div className={style.card}>
                        <p className={style.title_card}>Liquidity Pools</p>
                        <p className={style.description_card}>
                            Understand how liquidity pools work and how you can
                            provide liquidity
                        </p>
                        <Link className={style.read_btn} href="/">
                            <span className={style.read_text}>Read more</span>
                            <Image
                                className={style.arrow}
                                src={arrow}
                                alt="arrow"
                            />
                        </Link>
                    </div>
                    <div className={style.card}>
                        <p className={style.title_card}>Security & Audit</p>
                        <p className={style.description_card}>
                            Review our security practices and audit reports
                        </p>
                        <Link className={style.read_btn} href="/">
                            <span className={style.read_text}>Read more</span>
                            <Image
                                className={style.arrow}
                                src={arrow}
                                alt="arrow"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documentations;
