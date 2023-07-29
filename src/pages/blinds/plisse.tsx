import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Plisse = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage productData={description.blinds.plisse}/>
    </div>
  );
};

export default Plisse;