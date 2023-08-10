import {Layout} from "@/components/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";

const PhotoPrint = () => (
    <>
        <Layout data={dataCeilings.links}/>
      <ProductPage
        image={description.ceiling.photoPrint.image}
        title={description.ceiling.photoPrint.title}
        description={description.ceiling.photoPrint.description}
        priority={description.ceiling.photoPrint.priority}
      />
    </>
)

export default PhotoPrint;