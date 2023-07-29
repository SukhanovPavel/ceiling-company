import {PageHeader} from "../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";
import { Layout } from "@/shared/Layout/Layout";
import { dataCeilings } from "@/assets/mocks/ceilingsPageData";
import { PageBody } from "@/shared/PageBody/PageBody";
import { dataBlind } from "@/assets/mocks/blindPageData";

const data = [
    {
        link: "",
        description: "Плиссе"
    },
    {
        link: "",
        description: "Рулонные"
    },
    {
        link: "",
        description: "Зебра"
    },
    {
        link: "",
        description: "Вертикальные"
    },
    {
        link: "",
        description: "Горизонтальные"
    },
    {
        link: "",
        description: "Кассетные"
    }
]

const Blinds = () => (
    <>
        <Layout data={dataBlind.links} />
        <PageBody data={dataBlind.data}/>
    </>
)

export default Blinds;