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
                src="https://4.downloader.disk.yandex.ru/preview/d2fcc3a96d265777342475e861eec973ececd9240fec3cd361192e2facb5be12/inf/xZxwoI1Xz-wOI-oUzz8X0_J2E61a7hMZpHjCkzZD6u230fcerraMcc0oUgcNnWeXbMY5dtShRkQbyiSlSD7K4g%3D%3D?uid=336597251&filename=logo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=336597251&tknv=v2&size=2880x1358"
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