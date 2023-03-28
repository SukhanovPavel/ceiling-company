import {CalculatorForm} from "./CalculatorForm/CalculatorForm";

import styles from "./Calculator.module.css";

type Props = {
    handleСloseCalc: () => void;
}
export const Calculator = ({handleСloseCalc}: Props) => {

    // const p = (store: Price )=> store.price;

    // const price = useSelector(p);
    //
    // const dispatch = useDispatch();

    return (
        <div onClick={ e => (e.currentTarget === e.target) && handleСloseCalc() } className={styles._}>
            <div className={styles.calc}>
                <CalculatorForm />
            </div>
        </div>
    )
}