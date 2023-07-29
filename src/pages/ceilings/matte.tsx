import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";

const MAP = [
  {
    title: description.ceiling.matte.title,
    description: description.ceiling.matte.description,
    image: description.ceiling.matte.image,
    priority: description.ceiling.matte.priority
  },
  {
    title: description.ceiling.gloss.title,
    description: description.ceiling.gloss.description,
    image: description.ceiling.gloss.image,
    priority: description.ceiling.gloss.priority
  },
  {
    title: description.ceiling.satin.title,
    description: description.ceiling.satin.description,
    image: description.ceiling.satin.image,
    priority: description.ceiling.satin.priority
  },
]

const Matte = () => (
    <>
      <Layout data={dataCeilings.links}/>
      <ProductPage productData={MAP}/>
    </>
)

export default Matte;