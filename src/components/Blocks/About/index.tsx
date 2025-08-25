import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";
// Images
import sale from "../../../images/sale.svg";
import blazing from "../../../images/blazing.svg";
import shield from "../../../images/shield.svg";
import share from "../../../images/share.svg";
import bg from "../../../images/bgDoc.png";

const About = () => {
    return (
        <div id="about" className={style.swap}>
            <Image className={style.bg} src={bg} alt="background" />
            <div className={style.container_text}>
                <p className={style.title}>About us</p>
                <p className={style.subtitle}>
                    The Next Generation of Swaps on Solana
                </p>
            </div>
            <p className={style.description}>
                AquaRay is a decentralized exchange (DEX) built on Solana,
                designed for maximum speed, minimal fees, and seamless user
                experience. With cutting-edge smart contracts and integration
                with Jupiter, AquaRay delivers the most efficient swap routes
                across the entire Solana ecosystem.
            </p>
            <div className={style.slider_container}>
                <div className={style.card_container}>
                    <div className={style.card}>
                        <Image
                            className={style.image}
                            src={sale}
                            alt="Low fees"
                        />
                        <p className={style.title_card}>Low fees</p>
                        <p className={style.description_card}>
                            Only 0.1% trading fees, lower than any major DEX on
                            Solana
                        </p>
                    </div>
                    <div className={style.card}>
                        <Image
                            className={style.image}
                            src={blazing}
                            alt="Blazing fast"
                        />
                        <p className={style.title_card}>Blazing fast</p>
                        <p className={style.description_card}>
                            Swap transactions complete in under 0.4 seconds
                        </p>
                    </div>
                    <div className={style.card}>
                        <Image
                            className={style.image}
                            src={shield}
                            alt="Secure"
                        />
                        <p className={style.title_card}>Secure</p>
                        <p className={style.description_card}>
                            Rust-based smart contracts with comprehensive audits
                        </p>
                    </div>
                    <div className={style.card}>
                        <Image
                            className={style.image}
                            src={share}
                            alt="Integrated"
                        />
                        <p className={style.title_card}>Integrated</p>
                        <p className={style.description_card}>
                            Powered by Jupiter for optimal routing and liquidity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
