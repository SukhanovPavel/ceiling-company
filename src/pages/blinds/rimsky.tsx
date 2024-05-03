import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Rimsky = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.rimsky.image}
        title={description.blinds.rimsky.title}
        description={description.blinds.rimsky.description}
        priority={description.blinds.rimsky.priority}
      />
    </div>
  );
};

export default Rimsky;