import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { WorksPrice } from "@/assets/mocks/worksPrice";
import { WorkPrice } from "@/shared/WorkPrice/WorkPrice";

const OurWorks = () => (
    <>
      <Layout data={dataHome}/>
      {/*<Index*/}
      {/*    title={description.home.ourWorks.title}*/}
      {/*    description={description.home.ourWorks.text}*/}
      {/*    image={description.home.ourWorks.image}*/}
      {/*/>*/}
      <WorkPrice servicesMap={WorksPrice}  titleH1={description.home.ourWorks.title}/>
    </>
)

export default OurWorks;