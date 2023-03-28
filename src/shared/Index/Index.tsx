import styles from "./Index.module.css";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image: string;
    priority?:
        {
            title: string;
            list: string[];
        }
}

export const Index = ({
   title,
   description,
   image,
   priority
}: Props) => (
    <>
        <div className={styles.product}>
            <h1>{title}</h1>
            <p className={styles.p}>{description}</p>
            <div className={styles.dataText}>
                <h2 className={styles.title}>{priority?.title}</h2>
                <ul className={styles.ul}>
                    {priority?.list.map(item => (<li key={item}>{item}</li>))}
                </ul>
            </div>
        </div>
        <img alt={title} src={image} className={styles.productImage}/>
    </>
)
