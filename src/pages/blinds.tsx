import { Layout } from "@/components/Layout/Layout";
import { PageBody } from "@/components/PageBody/PageBody";
import { dataBlind } from "@/assets/mocks/blindPageData";
import Head from "next/head";


const Blinds = () => (
    <>
      <Head>
        <title>
          Рулонные жалюзи, вертикальные жалюзи, горизонтальные жалюзи, плиссе, римские шторы, кассетные жалюзи, день-ночь
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTop.png" />
      </Head>
      <Layout data={dataBlind.links} />
      <PageBody data={dataBlind.data}/>
    </>
)

export default Blinds;