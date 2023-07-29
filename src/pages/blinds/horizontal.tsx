import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";
import { dataBlind } from "@/assets/mocks/blindPageData";


const data = {
  image: description.blinds.horizontal.image,
  title: description.blinds.horizontal.title,
  description: description.blinds.horizontal.description,
  priority: {
    title: description.blinds.horizontal.priority.title,
    list: description.blinds.horizontal.priority.list
  }
}

const Horizontal = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage productData={data}/>
    </div>
  );
};

export default Horizontal;