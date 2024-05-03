import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataWindows } from "@/assets/mocks/windowsPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Evo = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage
        image={description.widows.evo.image}
        title={description.widows.evo.title}
        description={description.widows.evo.description}
        priority={description.widows.evo.priority}
      />
    </div>
  );
};

export default Evo;