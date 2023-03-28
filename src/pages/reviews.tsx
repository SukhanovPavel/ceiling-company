import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";

const Reviews = () => (
    <>
        <Layout data={dataHome}/>
        <Index
            title={description.home.reviews.title}
            description={description.home.reviews.text}
            image={description.home.reviews.image}
        />
    </>
)

export default Reviews;