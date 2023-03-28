import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";

const About = () => (
    <>
        <Layout data={dataHome}/>
        <Index
            title={description.home.about.title}
            description={description.home.about.text}
            image={description.home.about.image}
        />
    </>
)

export default About;