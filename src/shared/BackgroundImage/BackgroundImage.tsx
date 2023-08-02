import {CeilingSets} from "@/shared/CeilingSet/CeilingSet";
import {WorkPrice} from "@/shared/WorkPrice/WorkPrice";
import { WorksPrice } from "@/assets/mocks/worksPrice";

import styles from "./BackgroundImage.module.css";
import { Contacts } from "@/shared/Contacts/Contacts";
import { PageBody } from "@/shared/PageBody/PageBody";
import { dataCeilings } from "@/assets/mocks/ceilingsPageData";
import { DescriptionList } from "@/shared/DescriptionList/DescriptionList";
import { Form } from "@/shared/Form/Form";

const servicesMap = WorksPrice;

type Props = {
    alt: string;
    src: string;
}

export const BackgroundImage = ({
    alt,
    src
}: Props) => (
    <div className={styles._}>

        <div className={styles.topDesc}>
            <img
                id="logoMain"
                className={styles.logo}
                src="/logo.png"
                alt="logo"
            />
            <div className={styles.title}>
                <h2>ДЕЛАЕМ НАТЯЖНЫЕ ПОТОЛКИ</h2>
                <p>ЧИСТЫМИ РУКАМИ С ЧИСТОЙ СОВЕСТЬЮ</p>
            </div>
            <Form handleCloseModal={()=>{}} notFocus    />
        </div>

        {/*<CeilingSets handleClick={() => {}} />*/}

        <WorkPrice servicesMap={servicesMap} titleH2="Примеры стоимости натяжных потолков “под ключ”:" />

        <PageBody data={dataCeilings.data} />

        <DescriptionList alt={alt} img={src} />

        <Contacts
          handleClick={() => null}
        />

    </div>
)