import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";

const TwoLevel = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage
        image={description.ceiling.twoLevel.image}
        title={description.ceiling.twoLevel.title}
        description={description.ceiling.twoLevel.description}
        priority={description.ceiling.twoLevel.priority}
      />
    </>
)

export default TwoLevel;