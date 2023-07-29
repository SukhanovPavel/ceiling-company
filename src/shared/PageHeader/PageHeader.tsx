import Link from "next/link";
import cx from "classnames";

import styles from "./PageHeader.module.css";
import {useState} from "react";


// type Props = {
//     openCalc: () => void;
// }
export const PageHeader = () => {

    const [openMenu, setOpenMenu] = useState(true);

    const menu = cx({
        [styles.links]: true,
        [styles.linksNone]: openMenu
    });

    return (
        <nav className={styles._}>
            <img
                className={styles.logo}
                src="https://4.downloader.disk.yandex.ru/preview/d2fcc3a96d265777342475e861eec973ececd9240fec3cd361192e2facb5be12/inf/xZxwoI1Xz-wOI-oUzz8X0_J2E61a7hMZpHjCkzZD6u230fcerraMcc0oUgcNnWeXbMY5dtShRkQbyiSlSD7K4g%3D%3D?uid=336597251&filename=logo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=336597251&tknv=v2&size=2880x1358" alt="logo"
            />
            <div className={menu}>

                <Link href="/" className={styles.link}>Главная</Link>
                <Link href="/ceilings" className={styles.link}>Потолки</Link>
                <Link href="/windows" className={styles.link}>Окна</Link>
                <Link href="/blinds" className={styles.link}>Жалюзи</Link>
                <Link href="/forDillers" className={styles.link}>Диллерам</Link>
                <Link href="/accessories" className={styles.link}>Комплектующие</Link>
                <Link href="/contacts" className={styles.link}>Контакты</Link>
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={openCalc}*/}
                {/*    className={styles.calcButton}*/}
                {/*>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">*/}
                {/*        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7*/}
                {/*         64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3*/}
                {/*         32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32*/}
                {/*         0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7*/}
                {/*         0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1*/}
                {/*         0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32*/}
                {/*         64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>*/}
                {/*</button>*/}
                <button type="button" className={styles.button}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                </button>

            </div>

            <Link className={styles.phoneNumber} href="tel:+79999999999">
                +7(999)999-99-99
            </Link>

            <Link href="tel:+79999999999">
                <button type="button" className={styles.phoneButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/>
                    </svg>
                </button>
            </Link>


            <div className={styles.footerMenu}>
                <button onClick={() => setOpenMenu(!openMenu)} className={styles.burger}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>
        </nav>
    )
}