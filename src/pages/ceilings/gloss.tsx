import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Gloss = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.gloss.title}
            description={description.ceiling.gloss.text}
            image={description.ceiling.gloss.image}
            priority={description.ceiling.gloss.priority}
        />
    </>
)

export default Gloss;