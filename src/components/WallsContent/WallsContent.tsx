import React from "react";
import styles from "./WallsContent.module.css";
import Link from "next/link";

const priority = [
  "технологичный, быстрый и чистый монтаж ",
"гарантированно идеально ровная поверхность ",
"возможность интегрировать световые решения, в том числе скрытые ",
"огромный выбор цветов и фактур ",
"тактильность (это нужно видеть и трогать)",
"антивандальное покрытие (устойчивость к истиранию, ударопрочный материал)",
"фотопечать-роспись (индивидуальное решение, эксклюзивный дизайн)",
"термозащита (негорючий материал) ",
"гипоаллергенный (не содержит клея)",
"и главное, акустический комфорт (отделка стен эффективно гасит эхо)"
]

export const WallsContent = () => {
  return (
      <div className={styles._}>
        <Link href="/walls-3-21.pdf#view=FitH">
          <button className={styles.backLink}>Презентация</button>
        </Link>
        <iframe src="/walls-3-21.pdf#view=FitH" className={styles.pdf}/>
        <div  className={styles.item}>
          <div className={styles.videoCont}>
            <video className={styles.video} width="750" height="500" controls>
              <source src="/walls/video.MP4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.desc}>
            <p> Это новый продукт для отделки стен. Он серьезно отличается от существовавших ранее способов монтажа.
              Поскольку монтируется не с помощью скоб или гвоздей, а в специальные профильные системы. Это позволяет
              монтировать на неподготовленные стены и делать без шва поверхности с размером до 3*50 метров. Плюс
              подложка с акустическими свойствами🔥
            </p>
            <h4>Преимущества Архитектурного текстиля:</h4>
            <ul>
              {priority.map((item, index) =>
                (<li key={index}>{item}</li>))}
            </ul>
          </div>
        </div>
      </div>
  );
};