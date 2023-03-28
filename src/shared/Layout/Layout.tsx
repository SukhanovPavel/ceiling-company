import {PageHeader} from "@/shared/PageHeader/PageHeader";
import {DynamicHeader} from "@/shared/DynamicHeader/DynamicHeader";
import {Calculator} from "@/shared/Calculator/Calculator";
import {useState} from "react";

export const Layout = ({data}) => {

    const [modal, openModal] = useState(false);
    const [calc, openCalc] = useState(false);

    return (
        <>
            <PageHeader openCalc={() => openCalc(true)} />
            <DynamicHeader data={data} modal={modal} openModal={() => openModal(true)} />
            {calc ? <Calculator handleСloseCalc={() => openCalc(false)}/> : null}
        </>
    )
}