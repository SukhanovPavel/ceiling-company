import Head from 'next/head';
import {dataHome} from "@/assets/mocks/homePageData";
import {Layout} from "@/components/Layout/Layout";
import {BackgroundImage} from "@/components/BackgroundImage/BackgroundImage";

import styles from "../styles/Home.module.css";

const Home = () => (
    <div className={styles._}>
      <Head>
        <title>Натяжные потолки, окна ПВХ, жалюзи, рольставни. Компания Высота Шатура</title>
        <meta name="description" content="Натяжные потолки, окна ПВХ, жалюзи, рольставни, тихие стены" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTop.png" />
        <link rel="canonical"/>
      </Head>
      <Layout data={dataHome} />
      <BackgroundImage alt="homePage" src="https://www.luxe-potolok.ru/o/primer/v-studiyu-2.jpg" />
    </div>
);

export default Home;

