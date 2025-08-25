"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Logo from "@/images/logo.svg";
import bg from "@/images/bg_head.png";
import Link from "next/link";
import ToogleTheme from "../UI/ToogleTheme";

const Header = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.header}>
            <Image className={styles.bg} src={bg} alt="bg" />
            <Link href="/">
                <Image width={133} height={35} src={Logo} alt="logo" />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li
                        className={styles.navItem}
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </li>
                    <li
                        className={styles.navItem}
                        onClick={() => scrollToSection("about")}
                    >
                        About Us
                    </li>
                    <li
                        className={styles.navItem}
                        onClick={() => scrollToSection("docs")}
                    >
                        Docs
                    </li>
                    <li
                        className={styles.navItem}
                        onClick={() => scrollToSection("liquidity")}
                    >
                        Liquidity
                    </li>
                </ul>
            </nav>
            <ToogleTheme />
        </div>
    );
};

export default Header;
