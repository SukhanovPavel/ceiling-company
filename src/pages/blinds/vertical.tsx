import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Vertical = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.vertical.image}
        title={description.blinds.vertical.title}
        description={description.blinds.vertical.description}
        priority={description.blinds.vertical.priority}
      />
    </div>
  );
};

export default Vertical;