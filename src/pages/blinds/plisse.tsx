import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Plisse = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.plisse.image}
        title={description.blinds.plisse.title}
        description={description.blinds.plisse.description}
        priority={description.blinds.plisse.priority}
      />
    </div>
  );
};

export default Plisse;