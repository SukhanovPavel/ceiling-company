import {PageHeader} from "../../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../../shared/BackgroundImage/BackgroundImage";

export const dataCeiling = [
    {
        link: "потолки/матовый",
        description: "Матовый"
    },
    {
        link: "потолки/глянцевый",
        description: "Глянцевый"
    },
    {
        link: "потолки/сатин",
        description: "Сатиновый"
    },
    {
        link: "потолки/тканевый",
        description: "Тканевый"
    },
    {
        link: "потолки/двухуровневый",
        description: "Двух-уровневый"
    },
    {
        link: "потолки/фотопечать",
        description: "Фотопечать"
    },
    {
        link: "потолки/световые-линии",
        description: "Световые линии"
    },
    {
        link: "потолки/парящий",
        description: "Парящий"
    },
]
export const Ceilings = () => (
    <>
        <PageHeader />
        <DynamicHeader data={dataCeiling} />
        <BackgroundImage
            alt={"Ceiling"}
            src={"https://static.tildacdn.com/tild6333-3731-4532-b566-623435613764/img_8641-min.jpg"} />
    </>
);