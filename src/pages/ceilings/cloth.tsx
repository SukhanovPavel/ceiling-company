import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";




const Cloth = () => (
    <>
        <Layout data={dataCeilings.links}/>
        <ProductPage productData={description.ceiling.cloth}/>
    </>
)

export default Cloth;