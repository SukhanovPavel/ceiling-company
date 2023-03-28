import {PageHeader} from "../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";

const data = [
    {
        link: "",
        description: "Скачать прайс"
    }
]

const Accessories = () => (
    <>
        <PageHeader />
        <DynamicHeader data={data} />
        <BackgroundImage alt={"product"} src={"https://rkktop.ru/upload/iblock/bee/DSC_0231.JPG"} />
    </>
)

export default Accessories;