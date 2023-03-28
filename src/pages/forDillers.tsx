import {PageHeader} from "../shared/PageHeader/PageHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";

const data = [
    {
        link: "",
        description: "Скачать прайс для диллеров"
    }
]

const ForDillers = () => (
    <>
        <PageHeader />
        <DynamicHeader data={data} />
        <BackgroundImage alt={"dialer"} src={"https://kvadratpotolok.ru/storage/files/3/4-1.jpg"} />
    </>
)

export default ForDillers;