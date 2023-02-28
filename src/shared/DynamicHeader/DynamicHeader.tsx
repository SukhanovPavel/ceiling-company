import React, {useState} from "react";

import styles from "./DynamicHeader.module.css";

type Props ={
    data: {
        link: string,
        description: string,
        icon?: React.ReactNode,
    }[]
};
export const DynamicHeader = ({
                                  data
                              }: Props) => {

    const [modal, openModal] = useState(false);

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navLinks}>
                    {data.map(link => (
                        <a href={link.link} className={styles.link} key={link.description}>
                            {link.icon}
                            {link.description}
                        </a>
                    ))}
                </div>
                <button onClick={() => openModal(true)} className={styles.navButton}>Заказать звонок</button>
            </nav>
            {modal ?
                <div className={styles.div}>
                    <form className={styles.form}>
                        <input/>
                        <input/>
                        <button type='submit'>Оставить заявку</button>
                    </form>
                </div> : null}
        </>
    )
}