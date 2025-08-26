"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

import arrow from "../../../images/arrow_right.svg";
import bg from "../../../images/bgDoc.png";
import doc_gd from "../../../images/doc_gd.png";

const Documentations = () => {
    return (
        <div id="docs" className={styles.documentations}>
            <Image className={styles.bg} src={bg} alt="background" />
            <Image className={styles.doc_gd} src={doc_gd} alt="doc_gd" />
            <div className={styles.text_container}>
                <p className={styles.title}>Documentation</p>
                <p className={styles.subtitle}>
                    Here you&apos;ll find everything from smart contract
                    architecture and liquidity pool mechanics to integration
                    guides
                </p>
            </div>

            <div className={styles.slider_container}>
                <div className={styles.card_container}>
                    <div className={styles.card}>
                        <p className={styles.title_card}>How to Swap</p>
                        <p className={styles.description_card}>
                            Learn how to perform token swaps on AquaRay with our
                            step-by-step guide
                        </p>
                        <Link className={styles.read_btn} href="/">
                            <span className={styles.read_text}>Read more</span>
                            <Image src={arrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title_card}>Liquidity Pools</p>
                        <p className={styles.description_card}>
                            Understand how liquidity pools work and how you can
                            provide liquidity
                        </p>
                        <Link className={styles.read_btn} href="/">
                            <span className={styles.read_text}>Read more</span>
                            <Image src={arrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.title_card}>Security & Audit</p>
                        <p className={styles.description_card}>
                            Review our security practices and audit reports
                        </p>
                        <Link className={styles.read_btn} href="/">
                            <span className={styles.read_text}>Read more</span>
                            <Image src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documentations;
