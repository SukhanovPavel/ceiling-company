import React from "react";
import { Layout } from "@/shared/Layout/Layout";
import { dataCeilings } from "@/assets/mocks/ceilingsPageData";
import { ProductPage } from "@/shared/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";
import { dataWindows } from "@/assets/mocks/windowsPageData";

const Lamination = () => {
  return (
    <div>
      <Layout data={dataWindows.links}/>
      <ProductPage
        image={description.widows.lamination.image}
        title={description.widows.lamination.title}
        description={description.widows.lamination.description}
        priority={description.widows.lamination.priority}
      />
    </div>
  );
};

export default Lamination;