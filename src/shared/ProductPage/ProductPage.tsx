import React from "react";
import Image from "next/image";

import styles from "./ProductPage.module.css";

// interface Props {
//   imgPath: string;
//   title: string;
//   description: string;
//   priority: {
//     title: string;
//     list: string[];
//   };
// }




export const ProductPage: React.FC = ({imgPath, title, description, priority}) => {
  return (
    <div className={styles._}>
      <div  className={styles.item}>
        <Image
          width={300}
          height={300}
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