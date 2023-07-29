import React from "react";

import styles from "./ProductPage.module.css";

type Props = {
  imgPath: string;
  title: string;
  description: string;
  priority?: {title: string; list: string[];}
}



export const ProductPage: React.FC = ({imgPath, priority, description, title}: Props) => {
  return (
    <div className={styles._}>
      <div  className={styles.item}>
        <img
          className={styles.img}
          src={imgPath}
          alt="vysota"
        />
        <div className={styles.desc}>
          <p><b>{title}</b> <br />{description}</p>
          <h4>{priority?.title}</h4>
          <ul>
            {priority?.list?.map((item, index) =>
              (<li key={index}>{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};