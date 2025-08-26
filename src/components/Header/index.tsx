"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

import Link from "next/link";
import ToogleTheme from "../UI/ToogleTheme";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect } from "react";

//Images
import Logo from "@/images/logo.svg";
import bg from "@/images/bg_head.png";
import bg_mb from "@/images/head_mb.png";
import top from "@/images/top_bug.png";
import right from "@/images/right_bug.png";
import left from "@/images/left_bug.png";
import bottom from "@/images/bottom_bug.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"; // блокируем скролл
        } else {
            document.body.style.overflow = "auto"; // возвращаем скролл
        }

        // Очистка при размонтировании
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <Image className={styles.bg} src={bg} alt="bg" />
            <Image className={styles.bg_mb} src={bg_mb} alt="bg" />

            {/* Лого только для ПК */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image width={133} height={35} src={Logo} alt="logo" />
                </Link>
            </div>

            {/* Лого для мобилы рядом с бургером */}
            <div
                className={`${styles.logoMobileHeader} ${
                    menuOpen ? styles.hidden : ""
                }`}
            >
                <Link href="/">
                    <Image width={120} height={32} src={Logo} alt="logo" />
                </Link>
            </div>

            {/* Навигация */}
            <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
                {menuOpen && (
                    <>
                        <Image
                            className={styles.topBug}
                            src={top}
                            alt="top bug"
                        />
                        <Image
                            className={styles.rightBug}
                            src={right}
                            alt="right bug"
                        />
                        <Image
                            className={styles.leftBug}
                            src={left}
                            alt="left bug"
                        />
                        <Image
                            className={styles.bottomBug}
                            src={bottom}
                            alt="bottom bug"
                        />
                    </>
                )}
                {/* Лого внутри открытого меню */}
                <div className={styles.logoMobile}>
                    <Link href="/">
                        <Image width={133} height={35} src={Logo} alt="logo" />
                    </Link>
                </div>

                <ul className={styles.navList}>
                    <li
                        className={styles.link}
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </li>
                    <li
                        className={styles.link}
                        onClick={() => scrollToSection("about")}
                    >
                        About Us
                    </li>
                    <li
                        className={styles.link}
                        onClick={() => scrollToSection("docs")}
                    >
                        Docs
                    </li>
                    <li
                        className={styles.link}
                        onClick={() => scrollToSection("liquidity")}
                    >
                        Liquidity
                    </li>
                </ul>

                {/* Добавляем переключатель темы внутрь меню */}
                <div className={styles.themeMobile}>
                    <ToogleTheme />
                </div>

                <nav className={styles.btn_mobiles_link}>
                    <ul className={styles.btns}>{/* ... ваши кнопки ... */}</ul>
                </nav>

                <nav className={styles.btn_mobiles_link}>
                    <ul className={styles.btns}>
                        <button className={styles.btn_link}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3259 1.99951H21.6992L14.3293 10.4723L23 21.9995H16.2112L10.8945 15.0074L4.80967 21.9995H1.4345L9.31783 12.9367L1 2.00043H7.96117L12.7673 8.39144L18.3259 1.99951ZM17.1425 19.9694H19.0116L6.9455 3.92363H4.93983L17.1425 19.9694Z"
                                    fill="url(#paint0_linear_121_65)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_121_65"
                                        x1="1"
                                        y1="11.9995"
                                        x2="23"
                                        y2="11.9995"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#6D37FE" />
                                        <stop offset="1" stopColor="#00FFFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <button className={styles.btn_link}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.3175 4.48314C18.7615 3.78 17.1193 3.27844 15.4321 2.99102C15.4168 2.98848 15.4011 2.99067 15.3871 2.99728C15.3732 3.00388 15.3616 3.01459 15.3541 3.02791C15.1426 3.39689 14.9086 3.8795 14.7451 4.25733C12.9265 3.986 11.0767 3.986 9.25816 4.25733C9.07654 3.83609 8.8702 3.42559 8.64016 3.02791C8.63263 3.01459 8.62109 3.00388 8.60712 2.99728C8.59315 2.99067 8.57745 2.98848 8.56216 2.99102C6.87468 3.27734 5.2322 3.77914 3.67671 4.48314C3.66334 4.48803 3.65217 4.49745 3.64522 4.50971C0.534248 9.0835 -0.319243 13.5451 0.0992523 17.9507C0.102252 17.9723 0.112752 17.9905 0.130752 18.0053C1.94269 19.325 3.96886 20.3331 6.12319 20.9866C6.1384 20.9913 6.15475 20.9911 6.16985 20.9861C6.18496 20.981 6.19804 20.9714 6.20719 20.9585C6.67018 20.3387 7.07918 19.6848 7.43418 18.9971C7.44155 18.9829 7.44408 18.9668 7.44138 18.9511C7.43867 18.9354 7.43089 18.921 7.41918 18.91L7.39218 18.8938C6.74622 18.6487 6.12038 18.3551 5.5202 18.0156C5.50344 18.0063 5.49098 17.9909 5.4854 17.9728C5.47981 17.9547 5.48153 17.9351 5.4902 17.9182L5.5127 17.8901C5.63969 17.7967 5.76369 17.7007 5.88469 17.6023C5.89529 17.594 5.90801 17.5886 5.92149 17.5868C5.93496 17.5849 5.94869 17.5868 5.96119 17.592C9.88965 19.3572 14.1421 19.3572 18.0226 17.592C18.0354 17.5862 18.0498 17.584 18.0638 17.5859C18.0779 17.5877 18.0912 17.5934 18.1021 17.6023C18.2231 17.7007 18.3471 17.7967 18.4741 17.8901C18.4846 17.8973 18.4932 17.9069 18.4988 17.9182C18.5046 17.9294 18.5072 17.9419 18.5066 17.9545C18.506 17.9671 18.5022 17.9793 18.4954 17.99C18.4887 18.0007 18.4792 18.0095 18.4681 18.0156C17.8705 18.3605 17.2436 18.6538 16.5946 18.8923C16.5842 18.896 16.5748 18.9018 16.5671 18.9095C16.5593 18.9171 16.5533 18.9264 16.5496 18.9366C16.5459 18.9464 16.5444 18.9569 16.5452 18.9673C16.546 18.9777 16.549 18.9879 16.5541 18.9971C16.9141 19.6834 17.3266 20.3387 17.7796 20.9585C17.7887 20.9714 17.8018 20.981 17.8169 20.9861C17.832 20.9911 17.8484 20.9913 17.8636 20.9866C20.0221 20.3367 22.0519 19.3284 23.865 18.0053C23.874 17.999 23.8815 17.9909 23.887 17.9814C23.8924 17.972 23.8957 17.9615 23.8965 17.9507C24.3975 12.8574 23.058 8.43263 20.3475 4.51118C20.3452 4.50449 20.3412 4.49845 20.336 4.49357C20.3308 4.48869 20.3245 4.48511 20.3175 4.48314ZM8.02067 15.2675C6.83718 15.2675 5.86369 14.1989 5.86369 12.8883C5.86369 11.5778 6.81918 10.5077 8.02067 10.5077C9.23116 10.5077 10.1956 11.5851 10.1776 12.8883C10.1776 14.1989 9.22216 15.2675 8.02067 15.2675ZM15.9946 15.2675C14.8126 15.2675 13.8376 14.1989 13.8376 12.8883C13.8376 11.5778 14.7931 10.5077 15.9946 10.5077C17.2051 10.5077 18.1711 11.5851 18.1516 12.8883C18.1516 14.1989 17.2051 15.2675 15.9946 15.2675Z"
                                    fill="url(#paint0_linear_121_71)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_121_71"
                                        x1="-1.78814e-07"
                                        y1="11.99"
                                        x2="24"
                                        y2="11.99"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#6D37FE" />
                                        <stop offset="1" stopColor="#00FFFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <button className={styles.btn_link}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.7212 3.95868C20.9917 3.84762 21.2877 3.80932 21.5786 3.84775C21.8694 3.88619 22.1443 3.99996 22.3748 4.17723C22.6052 4.3545 22.7827 4.58877 22.8889 4.85568C22.995 5.12258 23.0259 5.41236 22.9782 5.69485L20.4957 20.384C20.2549 21.8009 18.6611 22.6134 17.329 21.9076C16.2147 21.3172 14.5597 20.4074 13.0711 19.4582C12.3267 18.9831 10.0467 17.4615 10.3269 16.3788C10.5677 15.4531 14.3988 11.9743 16.588 9.90607C17.4472 9.09351 17.0554 8.62477 16.0407 9.3722C13.5209 11.228 9.47532 14.05 8.13772 14.8444C6.95775 15.5449 6.34259 15.6645 5.60702 15.5449C4.26505 15.3271 3.0205 14.9897 2.00471 14.5786C0.632094 14.0233 0.698864 12.1825 2.00362 11.6465L20.7212 3.95868Z"
                                    fill="url(#paint0_linear_121_147)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_121_147"
                                        x1="1"
                                        y1="12.9999"
                                        x2="23"
                                        y2="12.9999"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#6D37FE" />
                                        <stop offset="1" stopColor="#00FFFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </ul>
                </nav>
            </nav>

            {/* Переключатель для ПК */}
            <div className={styles.themeDesktop}>
                <ToogleTheme />
            </div>

            {/* Бургер */}
            <button
                className={styles.burger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
        </header>
    );
};

export default Header;
