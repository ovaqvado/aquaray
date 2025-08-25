"use client";
import * as React from "react";
import style from "./style.module.scss";
import Image from "next/image";

import moon from "../../../images/moonToogle.svg";
import sun from "../../../images/sunToogle.svg";

const ToogleTheme = () => {
    const [isDark, setIsDark] = React.useState(true);

    // Загружаем тему из localStorage при монтировании
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        }
    }, []);

    // Сохраняем тему в localStorage при изменении
    React.useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div className={style.box} onClick={toggleTheme}>
            <div
                className={`${style.thumb} ${isDark ? style.right : style.left}`}
            >
                <Image src={isDark ? moon : sun} alt="toggle icon" />
            </div>
        </div>
    );
};

export default ToogleTheme;
