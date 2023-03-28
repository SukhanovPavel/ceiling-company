import {Layout} from "@/shared/Layout/Layout";
import {Index} from "@/shared/Index";
import {description} from "@/assets/mocks/description";
import {dataCeilings} from "@/assets/mocks/ceilingsPageData";

const PhotoPrint = () => (
    <>
        <Layout data={dataCeilings}/>
        <Index
            title={description.ceiling.photoPrint.title}
            description={description.ceiling.photoPrint.text}
            image={description.ceiling.photoPrint.image}
            priority={description.ceiling.photoPrint.priority}
        />
    </>
)

export default PhotoPrint;