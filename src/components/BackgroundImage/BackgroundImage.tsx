import {CeilingSets} from "@/components/CeilingSet/CeilingSet";
import {WorkPrice} from "@/components/WorkPrice/WorkPrice";
import { WorksPrice } from "@/assets/mocks/worksPrice";

import styles from "./BackgroundImage.module.css";
import { Contacts } from "@/components/Contacts/Contacts";
import { PageBody } from "@/components/PageBody/PageBody";
import { dataCeilings } from "@/assets/mocks/ceilingsPageData";
import { DescriptionList } from "@/components/DescriptionList/DescriptionList";
import { Form } from "@/components/Form/Form";
import Link from "next/link";
import Marquee from "react-fast-marquee";

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

          <Link href='/actions/gift'>
            <div className={styles.widgLeft}>Акция! Потолок в подарок!</div>
          </Link>
          <Link href='/actions/sale'>
            <div className={styles.widgRight}>15% скидка всем подписчикам!</div>
          </Link>
          <Link href="/actions"  className={styles.mobileWidg}>
            <Marquee>
              Акция! Потолок в подарок нашему подписчику в нашей группе
              Вконтакте! Также 15% скидка всем подписчикам группы до 10 октября
            </Marquee>
          </Link>

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
            <Form handleCloseModal={()=>{}} notFocus />
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