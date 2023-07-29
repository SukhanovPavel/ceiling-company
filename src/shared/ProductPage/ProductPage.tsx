import React from "react";
import Image from "next/image";

import styles from "./ProductPage.module.css";

interface Props {
  imgPath: string;
  title: string;
  description: string;
  priority: {
    title: string;
    list: string[];
  };
}




export const ProductPage: React.FC = (props: Props) => {
  return (
    <div className={styles._}>
      <div  className={styles.item}>
        <Image
          width={300}
          height={300}
          className={styles.img}
          src={props.imgPath}
          alt="vysota"
        />
        <div className={styles.desc}>
          <p><b>{props.title}</b> <br />{props.description}</p>
          <h4>{props.priority?.title}</h4>
          <ul>
            {props.priority?.list?.map((item, index) =>
              (<li key={index}>{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};