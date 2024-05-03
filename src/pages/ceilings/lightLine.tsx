import {Layout} from "@/components/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";

const LightLine = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage
        image={description.ceiling.lightLine.image}
        title={description.ceiling.lightLine.title}
        description={description.ceiling.lightLine.description}
        priority={description.ceiling.lightLine.priority}
      />
    </>
)

export default LightLine;