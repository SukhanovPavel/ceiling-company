import { Layout } from "@/shared/Layout/Layout";
import Head from "next/head";

const data = [
  {
    link: "",
    description: "Для уточнения цен на комплектующие и полотна свяжитесь с нами по телефону или почте"
  }
]

const Accessories = () => (
    <>
      <Head>
        <title>Комплектующие для натяжных потолков</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTop.png" />
      </Head>
      <Layout data={data}/>
    </>
)

export default Accessories;