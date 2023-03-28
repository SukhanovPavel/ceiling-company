import {PageHeader} from "../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";

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

const WindowBlind = () => (
    <>
        <PageHeader />
        <DynamicHeader data={data} />
        <BackgroundImage
            alt={"blind"}
            src={"https://www.tuk33.ru/assets/images/resources/63/8fa592b741b3bffd7a326b008f61.jpg"}
        />
    </>
)

export default WindowBlind;