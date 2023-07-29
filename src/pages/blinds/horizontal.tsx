import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";
import { dataBlind } from "@/assets/mocks/blindPageData";

const Horizontal = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage productData={description.blinds.horizontal}/>
    </div>
  );
};

export default Horizontal;