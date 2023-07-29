import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";
import { dataBlind } from "@/assets/mocks/blindPageData";


const data = {
  title: description.blinds.horizontal.priority.title,
  list: description.blinds.horizontal.priority.list
}

const Horizontal = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        imgPath={description.blinds.horizontal.image}
        title={description.blinds.horizontal.title}
        description={description.blinds.horizontal.description}
        priority={description.blinds.horizontal.priority}
      />
    </div>
  );
};

export default Horizontal;