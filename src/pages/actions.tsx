import {Layout} from "@/components/Layout/Layout";
import {description} from "@/assets/mocks/description";
import {dataHome} from "@/assets/mocks/homePageData";
import { PageBody } from "@/components/PageBody/PageBody";
import Head from "next/head";
import { photoFeedData } from "@/assets/mocks/photoFeed";
import { PhotoFeed } from "@/components/PhotoFeed/PhotoFeed";

const actionsData = [
  {
    title: "Потолок в подарок!",
    img: "/actionGift2.jpeg",
    link: "/actions/gift",
    description: "Разыграем натяжной потолок среди наших подписчиков в ВК в 11 октября",
  },
  {
    title: "Скидка на натяжные потолки 15%",
    img: "/action152.png",
    link: "/actions/sale",
    description: "Скидка 15% для наших подписчиков ВК",
  },
]

const Actions = () => (
    <>
      <Head>
        <title>Акции компании - акции на натяжные потолки, акции на окна, акции на жалюзи</title>
        <meta name="description" content="Акции и скидки на наши товары и услуги" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTop.png" />
      </Head>
      <Layout data={dataHome}/>
      <PhotoFeed data={actionsData} />
    </>
)

export default Actions;