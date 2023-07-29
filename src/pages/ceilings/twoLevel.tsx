import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";

const TwoLevel = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage productData={description.ceiling.twoLevel} />
    </>
)

export default TwoLevel;