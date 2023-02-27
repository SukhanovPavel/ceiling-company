import React, {useState} from "react";

import "./DynamicHeader.css";

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
            <nav className="nav">
                <div className="navLinks">
                    {data.map(link => (
                        <a href={link.link} className="link" key={link.description}>
                            {link.icon}
                            {link.description}
                        </a>
                    ))}
                </div>
                <button onClick={() => openModal(true)} className="navButton">Заказать звонок</button>
            </nav>
            {modal ?
                <div className="div">
                    <form className="form">
                        <input/>
                        <input/>
                        <button type='submit'>Оставить заявку</button>
                    </form>
                </div> : null}
        </>
    )
}