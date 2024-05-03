import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Smart = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage
        image={description.widows.smart.image}
        title={description.widows.smart.title}
        description={description.widows.smart.description}
        priority={description.widows.smart.priority}
      />
    </div>
  );
};

export default Smart;