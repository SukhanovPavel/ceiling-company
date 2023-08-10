import {PageHeader} from "@/components/PageHeader/PageHeader";
import {DynamicHeader} from "@/components/DynamicHeader/DynamicHeader";
import {Calculator} from "@/components/Calculator/Calculator";
import {useState} from "react";

type Props = {
  data?: {
    link: string;
    description: string;
    icon?: string | JSX.Element;
  }[];
  title?: string;
}

export const Layout = ({data, title}: Props) => {

    const [modal, openModal] = useState(false);
    const [calc, openCalc] = useState(false);

    return (
        <>
            <PageHeader />
            <DynamicHeader data={data} title={title} modal={modal} openModal={() => openModal(true)} />
            {calc ? <Calculator handleСloseCalc={() => openCalc(false)}/> : null}
        </>
    )
}