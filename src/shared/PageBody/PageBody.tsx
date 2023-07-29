import Link from "next/link";

import styles from "./PageBody.module.css";

type Props = {
  data: {
    link?: string;
    img: string;
    title: string;
    description: string;
  }[]
}
export const PageBody: React.FC = ({data}: Props) => {
  return (
    <div className={styles._}>
      {
        data.map(item =>
        <Link key={item.title} href={item.link || ""} className={styles.item}>
          <img
            className={styles.img}
            src={item.img}
            alt="vysota"
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>)
      }
    </div>
  );
};