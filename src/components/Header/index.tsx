import * as React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import Logo from "@/images/logo.svg";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href="/">
                <Image width={133} height={35} src={Logo} alt="logo" />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>About Us</li>
                    <li className={styles.navItem}>Docs</li>
                    <li className={styles.navItem}>Liquidity</li>
                </ul>
            </nav>
            <div>Toggle</div>
        </div>
    );
};

export default Header;
