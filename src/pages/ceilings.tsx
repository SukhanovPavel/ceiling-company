import {Layout} from "@/shared/Layout/Layout";
import {BackgroundImage} from "../shared/BackgroundImage/BackgroundImage";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Ceilings = () => (
    <>
        <Layout data={dataCeilings} />
        <BackgroundImage
            alt={"Ceiling"}
            src="https://static.tildacdn.com/tild6333-3731-4532-b566-623435613764/img_8641-min.jpg"
        />
    </>
);

export default Ceilings;