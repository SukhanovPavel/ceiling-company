import Head from 'next/head';
import {Layout} from "@/components/Layout/Layout";
import { WallsContent } from "@/components/WallsContent/WallsContent";

const data = [{
    link: "/walls/wallsPdf",
    description: "Презентация"
  }];

const Home = () => (
  <>
    <Head>
      <title>Тихие стены. Аккустический комфорт. Натяжные потолки, окна ПВХ, жалюзи, рольставни. Компания Высота Шатура</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logoTop.png" />
    </Head>
    <Layout data={data} />
    <WallsContent />
  </>
);

export default Home;