import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Smart = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage productData={description.widows.smart}/>
    </div>
  );
};

export default Smart;