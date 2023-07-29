import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Rimsky = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage productData={description.blinds.rimsky}/>
    </div>
  );
};

export default Rimsky;