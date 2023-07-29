import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Art = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage productData={description.widows.art}/>
    </div>
  );
};

export default Art;