import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";

const OurWorks = () => (
    <>
        <Layout data={dataHome}/>
        <Index
            title={description.home.ourWorks.title}
            description={description.home.ourWorks.text}
            image={description.home.ourWorks.image}
        />
    </>
)

export default OurWorks;