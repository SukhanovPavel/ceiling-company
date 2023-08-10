import { Layout } from "@/components/Layout/Layout";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";
import { dataBlind } from "@/assets/mocks/blindPageData";

const Horizontal = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.horizontal.image.toString()}
        title={description.blinds.horizontal.title}
        description={description.blinds.horizontal.description}
        priority={description.blinds.horizontal.priority}
      />
    </div>
  );
};

export default Horizontal;