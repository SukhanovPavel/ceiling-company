import {CalculatorForm} from "./CalculatorForm/CalculatorForm";

import styles from "./Calculator.module.css";

type Props = {
    handleСloseCalc: () => void;
}
export const Calculator = ({handleСloseCalc}: Props) => {

    return (
        <div onClick={ e => (e.currentTarget === e.target) && handleСloseCalc() } className={styles._}>
            <div className={styles.calc}>
                <CalculatorForm />
            </div>
        </div>
    )
}