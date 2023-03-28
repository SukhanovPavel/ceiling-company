import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";

const Actions = () => (
    <>
        <Layout data={dataHome}/>
        <Index
            title={description.home.promotions.title}
            description={description.home.promotions.text}
            image={description.home.promotions.image}
        />
    </>
)

export default Actions;