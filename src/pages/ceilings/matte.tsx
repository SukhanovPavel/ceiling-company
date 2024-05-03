import {Layout} from "@/components/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";

const Matte = () => (
    <>
      <Layout data={dataCeilings.links}/>
      <ProductPage
        image={description.ceiling.matte.image}
        title={description.ceiling.matte.title}
        description={description.ceiling.matte.description}
        priority={description.ceiling.matte.priority}
      />
      <ProductPage
        image={description.ceiling.gloss.image}
        title={description.ceiling.gloss.title}
        description={description.ceiling.gloss.description}
        priority={description.ceiling.gloss.priority}
      />
      <ProductPage
        image={description.ceiling.satin.image}
        title={description.ceiling.satin.title}
        description={description.ceiling.satin.description}
        priority={description.ceiling.satin.priority}
      />
    </>
)

export default Matte;