import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { PageBody } from "@/shared/PageBody/PageBody";

const Actions = () => (
    <>
      <Layout data={dataHome}/>
      <PageBody data={description.home.promotions}/>
    </>
)

export default Actions;