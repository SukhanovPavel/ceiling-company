import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Cloth = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.cloth.title}
            description={description.ceiling.cloth.text}
            image={description.ceiling.cloth.image}
            priority={description.ceiling.cloth.priority}
        />
    </>
)

export default Cloth;