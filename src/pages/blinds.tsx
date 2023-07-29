import { Layout } from "@/shared/Layout/Layout";
import { PageBody } from "@/shared/PageBody/PageBody";
import { dataBlind } from "@/assets/mocks/blindPageData";


const Blinds = () => (
    <>
        <Layout data={dataBlind.links} />
        <PageBody data={dataBlind.data}/>
    </>
)

export default Blinds;