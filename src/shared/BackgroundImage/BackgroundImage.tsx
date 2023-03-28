import styles from "./BackgroundImage.module.css";
import Image from "next/image";
import Link from "next/link";

export const CHECK = <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

type Props = {
    alt: string;
    src: string;
}

export const BackgroundImage = ({
    alt,
    src
}: Props) => (
    <div className={styles._}>
        <div className={styles.topWrap}>
            <div className={styles.text}>
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
                src={src}
            />
        </div>
        <div className={styles.ceilings}>
            <Link href="/ceilings/matte" className={styles.ceiling}>
                <img
                    className={styles.ceilingImg}
                    src="https://18onlygame.ru/wp-content/uploads/0/6/3/063500337153ce64dbcbd5e30d838c6b.jpeg"
                    alt="matte"
                />
                <p>Простые натяжные потолки</p>
            </Link>
            <Link href="/ceilings/twoLevel" className={styles.ceiling}>
                <img
                    className={styles.ceilingImg}
                    src="https://mykaleidoscope.ru/uploads/posts/2020-02/1581100299_37-p-krasivii-dizain-potolkov-63.jpg"
                    alt="matte"
                />
                <p>Двухуровневые потолки</p>
            </Link>
            <Link href="/ceilings/lightLine" className={styles.ceiling}>
                <img
                    className={styles.ceilingImg}
                    src="https://o3oh.ru/wp-content/uploads/2/7/4/274f5a3d97abb306d0ba2cb323614804.jpeg"
                    alt="matte"
                />
                <p>Световые линии / подсветка</p>
            </Link>
            <Link href="/ceilings/photoPrint" className={styles.ceiling}>
                <img
                    className={styles.ceilingImg}
                    src="https://i.ebayimg.com/images/g/GdIAAOSwI-BWFo5o/s-l400.jpg"
                    alt="matte"
                />
                <p>Фотопечать</p>
            </Link>
        </div>
    </div>
)