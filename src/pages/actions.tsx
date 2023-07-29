import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { PageBody } from "@/shared/PageBody/PageBody";

const Actions = () => (
    <>
      <Layout data={dataHome}/>
      {/*<Index*/}
      {/*    title={description.home.promotions.title}*/}
      {/*    description={description.home.promotions.text}*/}
      {/*    image={description.home.promotions.image}*/}
      {/*/>*/}
      <PageBody data={description.home.promotions}/>
    </>
)

export default Actions;