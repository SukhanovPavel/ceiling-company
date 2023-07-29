import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { description } from "@/assets/mocks/description";

const Lite60 = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage productData={description.widows.lite60}/>
    </div>
  );
};

export default Lite60;