import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";

const Soaring = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage
        image={description.ceiling.soaring.image}
        title={description.ceiling.soaring.title}
        description={description.ceiling.soaring.description}
        priority={description.ceiling.soaring.priority}
      />
    </>
)

export default Soaring;