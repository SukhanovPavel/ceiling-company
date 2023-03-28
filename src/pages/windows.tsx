import {PageHeader} from "../shared/PageHeader/PageHeader";
import {DynamicHeader} from "../shared/DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";

const data = [
    {
        link: "",
        description: "Melke Lite 60"
    },
    {
        link: "",
        description: "Melke Lite 70"
    },
    {
        link: "",
        description: "Melke Evolution"
    },
    {
        link: "",
        description: "Melke ART"
    },
    {
        link: "",
        description: "Melke Smart"
    },
    {
        link: "",
        description: "Rehau Blitz"
    },
    {
        link: "",
        description: "Rehau Grazio"
    },
    {
        link: "",
        description: "Цветные окна"
    },
]

const Windows = () => (
    <>
        <PageHeader />
        <DynamicHeader data={data} />
        <BackgroundImage alt={"windows"} src={"https://st3.stpulscen.ru/images/product/410/005/753_big.jpg"} />
    </>
);

export default Windows;