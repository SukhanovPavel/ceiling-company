import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const LightLine = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.lightLine.title}
            description={description.ceiling.lightLine.text}
            image={description.ceiling.lightLine.image}
            priority={description.ceiling.lightLine.priority}
        />
    </>
)

export default LightLine;