import styles from "./DynamicHeader.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  data: {
    link: string;
    description: string;
    icon?: { ReactNode };
  }[];
  modal: boolean;
  openModal: () => void;
};
export const DynamicHeader = ({ data, modal, openModal }: Props) => (
  <>
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        {data.map((link) => (
          <Link href={link.link} className={styles.link} key={link.description}>
            {link.icon}
            {link.description}
          </Link>
        ))}
      </div>
      <button type="button" onClick={openModal} className={styles.navButton}>
        Заказать звонок
      </button>
    </nav>
    {modal ? (
      <div className={styles.div}>
        <form className={styles.form}>
          <input />
          <input />
          <button type="submit">Оставить заявку</button>
        </form>
      </div>
    ) : null}
  </>
);
