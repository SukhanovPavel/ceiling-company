import {useState} from "react";
import styles from "./CalculatorForm.module.css";


export const CalculatorForm = () => {

    const [s, setS] = useState("");
    const [p, setP] = useState("");
    const [facture, setFacture] = useState("");
    const finalPrice = (() => ((facture ? Number(s) * Number(facture) : Number(s) * 500) + Number(p) * 200))();

    return (
        <div className={styles.form}>
            <div className={styles.formBlock}>
                <div className={styles.price}>
                    <span>Фактура</span>
                    <select onChange={({target: {value}}) => setFacture(value)}>
                        <option value="500">Выберите материал</option>
                        <option value="500">Мат/глянец/сатин</option>
                        <option value="1000">Тканевый</option>
                        <option value="750">Цветной/фактурный</option>
                        <option value="1400">Фотопечать</option>
                    </select>
                </div>
                <div className={styles.price}>
                    <span>Площадь</span>
                    <input
                        value={s}
                        placeholder="площадь периметр конструкция"
                        onChange={({target: {value}}) => setS(value)}
                    />
                </div>
                <div className={styles.price}>
                    <span>Периметр</span>
                    <input
                        value={p}
                        onChange={({target: {value}}) => setP(value)}
                    />
                </div>
            </div>
            <div className={styles.formBlock}>
                <div className={styles.price}>
                    <span>Количество светильников</span>
                    <input
                        id="price"
                        value={finalPrice}
                    />
                </div>
                <div className={styles.price}>
                    <span>Количество люстр</span>
                    <input
                        id="price"
                        value={finalPrice}
                    />
                </div>
                <div className={styles.price}>
                    <span>Количество углов</span>
                    <input
                        id="price"
                        value={finalPrice}
                    />
                </div>
            </div>
            <div className={styles.price}>
                <span>Цена</span>
                <input
                    id="price"
                    value={finalPrice}
                />
            </div>
        </div>
    )
}