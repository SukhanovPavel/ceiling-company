import {Layout} from "@/shared/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { DescriptionList } from "@/shared/DescriptionList/DescriptionList";

const About = () => (
    <>
      <Layout data={dataHome}/>
      <DescriptionList
        title={description.home.about.title}
        alt={description.home.about.title}
        img={description.home.about.image}
      />
    </>
)

export default About;