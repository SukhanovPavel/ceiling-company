import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Soaring = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.soaring.title}
            description={description.ceiling.soaring.text}
            image={description.ceiling.soaring.image}
            priority={description.ceiling.soaring.priority}
        />
    </>
)

export default Soaring;