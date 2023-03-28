import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Satin = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.satin.title}
            description={description.ceiling.satin.text}
            image={description.ceiling.satin.image}
            priority={description.ceiling.satin.priority}
        />
    </>
)

export default Satin;