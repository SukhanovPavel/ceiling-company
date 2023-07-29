import { Layout } from "@/shared/Layout/Layout";
import { PageBody } from "@/shared/PageBody/PageBody";
import { dataWindows } from "@/assets/mocks/windowsPageData";


const Windows = () => (
    <>
        <Layout data={dataWindows.links}/>
        <PageBody data={dataWindows.data}/>
    </>
);

export default Windows;