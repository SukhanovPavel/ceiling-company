import { Layout } from "@/shared/Layout/Layout";
import { PageBody } from "@/shared/PageBody/PageBody";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { description } from "@/assets/mocks/description";

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
        <Layout data={dataWindows.links}/>
        <PageBody data={dataWindows.data}/>
    </>
);

export default Windows;