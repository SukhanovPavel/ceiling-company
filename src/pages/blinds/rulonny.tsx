import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { dataBlind } from "@/assets/mocks/blindPageData";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { description } from "@/assets/mocks/description";

const Rulonny = () => {
  return (
    <div>
      <Layout data={dataBlind.links}/>
      <ProductPage
        image={description.blinds.rulonny.image}
        title={description.blinds.rulonny.title}
        description={description.blinds.rulonny.description}
        priority={description.blinds.rulonny.priority}
      />
    </div>
  );
};

export default Rulonny;