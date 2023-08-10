import Link from "next/link";
import styles from "./PhotoFeed.module.css";
import Image from "next/image";


type Props = {
  data: {
    link: string;
    img: string;
    title: string;
    description: string;
  }
}

export const PhotoFeed = ({data}: Props[]) => {
  return (
    <div className={styles._}>
      {
        data.map(item =>
          <Link key={item.title} href={item.link} className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                fill
                // width={250}
                // height={180}
                priority
                className={styles.img}
                src={item.img}
                alt="vysota"
              />
            </div>
            <h3>{item.title}</h3>
            {<p>{item.description}</p>}
          </Link>)
      }
    </div>
  );
};