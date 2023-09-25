import React, {useState} from "react";

import styles from "./Form.module.css";
// import {DONE} from "@/components/Sets/Sets";

export const Download = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8
    5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7
    14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/></svg>

type Props = {
    handleCloseModal: () => void;
    notFocus?: boolean;
    where?: string;
    num?: string;
    quality?: string;
    time?: string;
    ceil?: string;
    money?: string;
    reload?: () => void;

};

export const Form = (
    {
        handleCloseModal,
        notFocus,
        where,
        num,
        quality,
        time,
        ceil,
        money,
        reload
    }: Props) => {

    const [popUp, lookPopUp] = useState(false);

    const [modal, openModal] = useState(false);

    const [formName, setFormName] = useState("");
    const [formNumber, setFormNumber,] = useState("");

    const tg = {
        token: "6130140893:AAFhk1tw2Ue4xcAmBDgckymy-BbNL2gGuwI",
        chat_id: "-991452979"
    };

    function sendMessage(text: string | any) {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage`

        const obj = {
            chat_id: tg.chat_id,
            text: text
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
        setTimeout(() => {
            setFormName("");
            setFormNumber("");
            lookPopUp(true);
            setTimeout(() => lookPopUp(false), 3000);
        }, 0);
        handleCloseModal();
    };


    const message = `Заявка с сайта:
    
    ${formName ? `1. Имя клиента: ${formName},` : ''} 
    
    ${formNumber ? `2. Телефон клиента: ${formNumber},` : ''}`;

    const [filesLength, setFilesLength] = useState(0);

    const SubmitForm = () => {
        sendMessage(message);
        handleCloseModal();
    }

    return (
        <div className={styles.form}>

            <label className={styles.input}>
                <p>Ваше имя:</p>
                <input
                    autoFocus={notFocus ? false : true}
                    value={formName.replace(/[^\D]/g, "")}
                    onChange={({target:{value}}) => setFormName(value)}
                    placeholder="Имя"
                    type="text"
                    title="Имя рсскими буквами"
                />
            </label>

            <div className={styles.input}>
                <label>Ваш номер телефона:</label>
                <input
                    // className={styles.borderBlue}
                    value={formNumber.replace(/[^\d]/g, "")}
                    onChange={({target:{value}}) => setFormNumber(value) }
                    placeholder="Телефон"
                    title="phone"
                    type="text"
                    onKeyUp={formNumber ?
                        (event) => event.key === "Enter" ? (() => {
                            SubmitForm();
                            typeof(reload) === "function" ? reload() : null;
                        })() : null :
                        (event) => event.key === "Enter" ? () => {
                            openModal(true)
                            setTimeout(() => openModal(false), 1500)
                        } : null
                    }
                />
            </div>
            <button
                onClick={formNumber && formName && true ?
                    () => {
                        SubmitForm();
                        typeof(reload) === "function" ? reload() : null;
                    } : () => {
                        openModal(true)
                        setTimeout(() => openModal(false), 1500)
                    }}
            >
                Заказать потолок
            </button>
            {popUp ? <div className={styles.popUp}>
                Контактные данные отправлены. В ближайшее время вам позвонит менеджер
            </div> : null}
            {modal && <div className={styles.warningModal}>
                <h3>Заполните все обязательные поля</h3>
            </div>}
        </div>
    )
};