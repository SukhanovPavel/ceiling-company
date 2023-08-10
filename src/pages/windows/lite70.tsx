import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Lite70 = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage
        image={description.widows.lite70.image}
        title={description.widows.lite70.title}
        description={description.widows.lite70.description}
        priority={description.widows.lite70.priority}
      />
    </div>
  );
};

export default Lite70;