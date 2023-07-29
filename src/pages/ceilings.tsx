import {Layout} from "@/shared/Layout/Layout";
import { PageBody } from "@/shared/PageBody/PageBody";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const Ceilings = () => (
    <>
      <Layout data={dataCeilings.links} />
      <PageBody data={dataCeilings.data}/>
    </>
);

export default Ceilings;