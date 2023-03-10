import {useState} from "react";
import styles from "./CalculatorForm.module.css";


export const CalculatorForm = () => {

    const [s, setS] = useState("");
    const [p, setP] = useState("");
    const [facture, setFacture] = useState("");
    const finalPrice = (() => ((facture ? Number(s) * Number(facture) : Number(s) * 500) + Number(p) * 200))();

    return (
        <>
            <div>
                <span>Фактура</span>
                <select onChange={({target: {value}}) => setFacture(value)}>
                    <option value="500">Выберите материал</option>
                    <option value="500">Мат/глянец/сатин</option>
                    <option value="1000">Тканевый</option>
                    <option value="750">Цветной/фактурный</option>
                    <option value="1400">Фотопечать</option>
                </select>
            </div>
            <div>
                <span>Площадь</span>
                <input
                value={s}
                placeholder="площадь периметр конструкция"
                onChange={({target: {value}}) => setS(value)}
                />
            </div>
            <div>
                <span>Периметр</span>
                <input 
                    value={p} 
                    onChange={({target: {value}}) => setP(value)}
                />
            </div>
            <div>
                <span>Количество светильников</span>
                <input
                    id="price"
                    value={finalPrice}
                />
            </div>
            <div>
                <span>Количество люстр</span>
                <input
                    id="price"
                    value={finalPrice}
                />
            </div>
            <div>
                <span>Количество углов</span>
                <input
                    id="price"
                    value={finalPrice}
                />
            </div>
            <div>
                <span>Цена</span>
                <input
                    id="price"
                    value={finalPrice}
                />
            </div>
        </>
//     <Form
//         onSubmit={onSubmit}
//         // validate={validate}
//         render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit} className={styles.form}>
//                 <div className={styles.config}>
//
//                     <div className={styles.material}>
//                         <label>
//                             Фактура потолка:
//                             <Field
//                                 className={styles.select}
//                                 name="facture"
//                                 component="select"
//                             >
//                                 <option value="650">Глянцевый/Матовый/Сатин</option>
//                                 <option value="750">Цветной/фактурный</option>
//                                 <option value="1400">Фотопечать</option>
//                                 <option value="1200">Тканевый потолок</option>
//                             </Field>
//                         </label>
//                     </div>
//
//
//                     <div className={styles.options}>
//                         <h4>Дополнительные опции</h4>
//                         <div className={styles.checkbox}>
//                             <Field name="lightLine" value="3000" component="input" type="checkbox" />
//                             Световые линии
//                         </div>
//                         <div className={styles.checkbox}>
//                             <Field name="flying" value="1000" component="input" type="checkbox" />
//                             Парящий
//                         </div>
//                         <div className={styles.checkbox}>
//                             <Field name="shadow" value="800" component="input" type="checkbox" />
//                             Теневой потолок
//                         </div>
//                         <div className={styles.checkbox}>
//                             <Field name="twoLevel" value="2500" component="input" type="checkbox" />
//                             Двухуровневый
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.config}>
//                     <div className={styles.inputs}>
//                         <h4>Производитель</h4>
//                         <div className={styles.checkbox}>
//                             <Field name="madeIn" value="0" component="input" type="checkbox" />
//                             MSD
//                         </div>
//                         <div className={styles.checkbox}>
//                             <Field name="Bauf" value="200" component="input" type="checkbox" />
//                             Bauf
//                         </div>
//                     </div>
//                     <div className={styles.inputs}>
//                         <h4>Площадь потолка, кв.м.*</h4>
//                         <Field
//                             name="S"
//                             component="input"
//                             type="text"
//                             placeholder="Площадь потолка"
//                             render={({ input, meta }) => (
//                                 <div>
//                                     <label>S</label>
//                                     <input {...input} onChange={onSubmit}/>
//                                     {meta.touched && meta.error && <span>{meta.error}</span>}
//                                 </div>
//                             )}
//                         />
//                     </div>
//                     <div className={styles.inputs}>
//                         <h4>Количество светильников</h4>
//                         <Field
//                             name="luminaire"
//                             component="input"
//                             type="text"
//                             placeholder="Количество светильников"
//                         />
//                     </div>
//                     <div className={styles.inputs}>
//                         <h4>Количество люстр</h4>
//                         <Field
//                             name="lamp"
//                             component="input"
//                             type="text"
//                             placeholder="Количество люстр"
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <div className={styles.price}>
//                         <h3>Итоговая стоимость:</h3>
//                         <Field
//                             name="FINALPRICE"
//                             component="input"
//                             type="text"
//                             placeholder="Итоговая стоимость"
//                             // render={({ input, meta }) => (
//                             //     <div>
//                             //         {JSON.stringify(input, 0, 2)}
//                             //     </div>
//                             // )}
//                         />
//                     </div>
//                     <div className={styles.config}>
//                         <div className={styles.inputs}>
//                             <h4>Периметр</h4>
//                             <Field
//                                 name="P"
//                                 component="input"
//                                 type="text"
//                                 placeholder="Периметр, м"
//                             />
//                         </div>
//                         <div className={styles.inputs}>
//                             <h4>Длина конструкции</h4>
//                             <Field
//                                 name="construction"
//                                 component="input"
//                                 type="text"
//                                 placeholder="Длина конструкции, м"
//                             />
//                         </div>
//                         <div className={styles.inputs}>
//                             <h4>Количество углов</h4>
//                             <Field
//                                 name="corners"
//                                 component="input"
//                                 type="text"
//                                 placeholder="Количество углов"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <button type="submit">
//                     Submit
//                 </button>
//             </form>
//         )}
//     />
    )
}