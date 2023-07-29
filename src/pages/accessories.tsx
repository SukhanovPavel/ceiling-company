import {PageHeader} from "../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";
import { Layout } from "@/shared/Layout/Layout";

const data = [
    {
        link: "",
        description: "Скачать прайс"
    }
]

const Accessories = () => (
    <>
        <Layout />
        <BackgroundImage alt={"product"} src={"https://rkktop.ru/upload/iblock/bee/DSC_0231.JPG"} />
    </>
)

export default Accessories;