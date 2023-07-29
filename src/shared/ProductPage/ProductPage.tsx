import React from "react";

import styles from "./ProductPage.module.css";

type Props = {
  productData: {
    image: string;
    title: string;
    description: string;
    priority?: {title: string; list: string[];}
  }[] | {
      image: string;
      title: string;
      description: string;
      priority?: {title: string; list: string[];}
    }
}
export const ProductPage: React.FC = ({productData}: Props) => {
  return (
    <div className={styles._}>
      { Array.isArray(productData) ?
        productData.map(item =>
          <div key={item.title} className={styles.item}>
            <img
              className={styles.img}
              src={item.image}
              alt="vysota"
            />
            <div className={styles.desc}>
              <p><b>{item.title}</b> <br />{item.description}</p>
              <h4>{item.priority?.title}</h4>
              <ul>
                {item.priority?.list?.map((item, index) =>
                  (<li key={index}>{item}</li>))}
              </ul>
            </div>
          </div>) :
        <div  className={styles.item}>
          <img
            className={styles.img}
            src={productData.image}
            alt="vysota"
          />
          <div className={styles.desc}>
            <p><b>{productData.title}</b> <br />{productData.description}</p>
            <h4>{productData.priority?.title}</h4>
            <ul>
              {productData.priority?.list?.map((item, index) =>
                (<li key={index}>{item}</li>))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
};