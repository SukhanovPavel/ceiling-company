import Link from "next/link";

import styles from "./DynamicHeader.module.css";

type Props = {
  data?: {
    link: string;
    description: string;
    icon?: any;
  }[];
  title?: string;
  modal: boolean;
  openModal: () => void;
};
export const DynamicHeader = ({ data, title, modal, openModal }: Props) => (
  <>
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        {title ? <h3>{title}</h3> : null}
        {data ? Array.isArray(data) && data.map(link => (
          <Link href={link.link} className={styles.link} key={link.description}>
            {link.icon}
            {link.description}
          </Link>
        )) : null}
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
