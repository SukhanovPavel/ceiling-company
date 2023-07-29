import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { WorksPrice } from "@/assets/mocks/worksPrice";
import { WorkPrice } from "@/shared/WorkPrice/WorkPrice";

const OurWorks = () => (
    <>
      <Layout data={dataHome}/>
      <WorkPrice servicesMap={WorksPrice}  titleH2={description.home.ourWorks.title.toString()}/>
    </>
)

export default OurWorks;