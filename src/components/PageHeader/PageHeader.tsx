import Link from "next/link";
import cx from "classnames";

import styles from "./PageHeader.module.css";
import { useState } from "react";

export const VK = <svg
  className={styles.vkIcon}
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  viewBox="0 0 448 512"
>
  <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480
  113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448
  145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907
  63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64
  205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071
  297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453
  354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16
  288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
</svg>;

export const NEW = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path
    d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5
    15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9
    14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15
    17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4
    17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45
    46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62
    17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
  />
  <text>
    This is
    <tspan fontWeight="bold" fontSize="1rem" fill="white">bold and red</tspan>
  </text>
</svg>;


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
    <>
      <nav className={styles._}>
        <Link href="/">
          <img
            className={styles.logo}
            src="/logo.png" alt="logo"
          />
        </Link>
        <div className={menu}>

          <Link href="/" className={styles.link}>Главная</Link>
          <Link href="/ceilings" className={styles.link}>Потолки</Link>
          <Link href="/walls" className={styles.link + " " + styles.wallsLink}>Тихие стены{NEW}<p>New!</p></Link>
          <Link href="/windows" className={styles.link}>Окна</Link>
          <Link href="/blinds" className={styles.link}>Жалюзи</Link>
          {/*<Link href="/forDillers" className={styles.link}>Диллерам</Link>*/}
          {/*<Link href="/accessories" className={styles.link}>Комплектующие</Link>*/}
          <Link href="/contacts" className={styles.link}>Контакты</Link>
          {/*<button*/}
          {/*    type="button"*/}
          {/*    onClick={openCalc}*/}
          {/*    className={styles.calcButton}*/}
          {/*>*/}
          {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">*/}
          {/*        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7*/}
          {/*         64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3*/}
          {/*         32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1.jpg 1.jpg -64 0 32 32*/}
          {/*         0 1.jpg 1.jpg 64 0zM96 352a32 32 0 1.jpg 1.jpg 0-64 32 32 0 1.jpg 1.jpg 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7*/}
          {/*         0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1.jpg 1.jpg 0-64 32 32 0 1.jpg 1.jpg*/}
          {/*         0 64zm32 64a32 32 0 1.jpg 1.jpg -64 0 32 32 0 1.jpg 1.jpg 64 0zm64-64a32 32 0 1.jpg 1.jpg 0-64 32 32 0 1.jpg 1.jpg 0 64zm32*/}
          {/*         64a32 32 0 1.jpg 1.jpg -64 0 32 32 0 1.jpg 1.jpg 64 0zM288 448a32 32 0 1.jpg 1.jpg 0-64 32 32 0 1.jpg 1.jpg 0 64z"/></svg>*/}
          {/*</button>*/}
          {/*<button type="button" className={styles.button}>*/}
          {/*    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">*/}
          {/*        <path d="M168.2.jpg 384.9c-15-5.4-31.7-3.1.jpg-44.6 6.4c-8.2.jpg 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.jpg.6 2.jpg.7-3.3 5.4-5.1.jpg 8.1l-.3 .5c-1.jpg.6 2.jpg.3-3.2.jpg 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1.jpg 0 10.2.jpg-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.jpg.1.jpg 13.2.jpg-1.jpg.9c.8-.1.jpg 1.jpg.6-.3 2.jpg.4-.5c17.8-3.5 34.9-9.5 50.1.jpg-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1.jpg 17.9c141.4 0 256-93.1.jpg 256-208S397.4 32 256 32S0 125.1.jpg 0 240c0 45.1.jpg 17.7 86.8 47.7 120.9c-1.jpg.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1.jpg 0 0-64 32 32 0 1.jpg 0 0 64zm144-32a32 32 0 1.jpg 0 -64 0 32 32 0 1.jpg 0 64 0zm80 32a32 32 0 1.jpg 0 0-64 32 32 0 1.jpg 0 0 64z"/></svg>*/}
          {/*</button>*/}
          <Link className={styles.phoneNumber} href="tel:+79153277339">
            8 (915) 327-73-39
          </Link>

        </div>


        <button onClick={() => setOpenMenu(!openMenu)} className={styles.burger}>
          {openMenu ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>}
        </button>


        <div className={styles.footerMenu}>
          <Link href="https://vk.com/vysotapotolok" target="_blank">{VK}</Link>

          <Link href="tel:+79153277339">
            <button type="button" className={styles.phoneButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
              </svg>
            </button>
          </Link>
        </div>

      </nav>

    </>
  );
};