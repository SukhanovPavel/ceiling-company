import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { description } from "@/assets/mocks/description";

const Lite60 = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage
        image={description.widows.lite60.image}
        title={description.widows.lite60.title}
        description={description.widows.lite60.description}
        priority={description.widows.lite60.priority}
      />
    </div>
  );
};

export default Lite60;