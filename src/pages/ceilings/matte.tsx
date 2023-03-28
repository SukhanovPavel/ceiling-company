import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Matte = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.matte.title}
            description={description.ceiling.matte.text}
            image={description.ceiling.matte.image}
            priority={description.ceiling.matte.priority}
        />
    </>
)

export default Matte;