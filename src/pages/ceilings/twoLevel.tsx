import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const TwoLevel = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.twoLevel.title}
            description={description.ceiling.twoLevel.text}
            image={description.ceiling.twoLevel.image}
            priority={description.ceiling.twoLevel.priority}
        />
    </>
)

export default TwoLevel;