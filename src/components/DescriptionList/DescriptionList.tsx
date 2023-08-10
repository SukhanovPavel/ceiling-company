import React from "react";

import styles from "./DescriptionList.module.css";

export const CHECK = <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

type Props = {
  title?: string;
  alt: string;
  img: string;
}

export const DescriptionList = ({ title, alt, img }: Props) => {
  return (
    <div className={styles._}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{CHECK}Компания высота предлагает качественную, чистую и не дорогую установку натяжных потолков.</p>
        <p>{CHECK}У нас собственное производство, большой выбор полотен на любой вкус. </p>
        <p>{CHECK}Наши монтажники имеют большой опыт установки. Мы готовы сделать потолки любой сложности!</p>
        <p>{CHECK}Работы проводятся с использованием газового монтажного пистолета - никакой пыли от
          перфоратора!</p>
        <p>{CHECK}Быстрые сроки исполнения! Отличные цены! Гарантия качества!</p>
        <p>{CHECK}Так же у нас вы можете приобрести с установкой пластиковые окна, жалюзи, рольставни,
          застеклить
          балкон!</p>
        <p>{CHECK}При заказе остекления - скидка на натяжные потолки!</p>
        <p>{CHECK}Различные бонусы и акции</p>
      </div>
      <img
        className={styles.img}
        alt={alt}
        src={img}
      />
    </div>
  );
};