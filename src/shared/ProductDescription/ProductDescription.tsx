import React, {useState} from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { DynamicHeader } from "../DynamicHeader/DynamicHeader";
// import { BackgroundImage } from "../BackgroundImage/BackgroundImage";

import styles from "./ProductDescription.module.css";
import {Calculator} from "../../components/Calculator/Calculator";

type Props = {
    title: string;
    description: string;
    image: string;
    priority?:
        {
            title: string;
            list: string[];
        }
    data: {
        link: string,
        description: string,
        icon?: React.ReactNode,
    }[]
}

export const ProductDescription = ({
   title,
   description,
   image,
   data,
   priority
}: Props) => {

    const [modal, openModal] = useState(false);
    const [calc, openCalc] = useState(false);

    return (
        <>
            <PageHeader openCalc={() => openCalc(true)} />
            <DynamicHeader modal={modal} openModal={() => openModal(true)} data={data} />
            {calc ? <Calculator handleСloseCalc={() => openCalc(false)}/> : null}
            <div className={styles.product}>
                <h1>{title}</h1>
                <p className={styles.p}>{description}</p>
                <div className={styles.dataText}>
                    <h1 className={styles.title}>{priority?.title}</h1>
                    <ul className={styles.ul}>
                        {priority?.list.map(item => (<li>{item}</li>))}
                    </ul>
                </div>
            </div>
            <img alt={title} src={image} className={styles.productImage}/>
        </>
    )
}