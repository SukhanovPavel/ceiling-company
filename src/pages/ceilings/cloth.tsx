import {Layout} from "@/components/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";




const Cloth = () => (
    <>
        <Layout data={dataCeilings.links}/>
        <ProductPage
          image={description.ceiling.cloth.image}
          title={description.ceiling.cloth.title}
          description={description.ceiling.cloth.description}
          priority={description.ceiling.cloth.priority}
        />
    </>
)

export default Cloth;