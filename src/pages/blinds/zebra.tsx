import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Zebra = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.zebra.image}
        title={description.blinds.zebra.title}
        description={description.blinds.zebra.description}
        priority={description.blinds.zebra.priority}
      />
    </div>
  );
};

export default Zebra;