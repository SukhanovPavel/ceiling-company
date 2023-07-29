import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";

const Soaring = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage productData={description.ceiling.soaring} />
    </>
)

export default Soaring;