import React from "react";
import { ProductPage } from "@/components/ProductPage/ProductPage";
import { dataHome } from "@/assets/mocks/homePageData";
import { Layout } from "@/components/Layout/Layout";

const actionData = {
  title: "Натяжной потолок в подарок! 11 октября 2023 года",
  description:"В подарок: " +
    "1 - натяжной потолок  с установкой не более 15 м2 в одном помещении, " +
    "2 - установка люстры, " +
    "3 - вставка (плинтус), " +
    "4 - Обход трубы. Установка доп. освещения, карнизы, ниши и т.д. Оплачиваются отдельно.",
  priority:
    {
      title: "Условия для участия в акции:",
      list: [
        "",
        "Розыгрыш проводится среди всех подписчиков нашего сообщества ( Натяжные потолки Высота)." +
        "Победителя определим с помощью приложение KonkursVK.",
        "Ваш аккаунт должен быть живым, с фото и друзьями!.",
        " Не допускаются конкурсные аккаунты. Если более 10% из последних 50 постов являются розыгрышами, то такие " +
        "аккаунты приложение считает конкурсными.Организатор вправе провести повторный розыгрыш приза.",
      ],
    },
  image: "/actionGift2.jpeg"
};

const Gift = () => {
  return (
    <div>
      <Layout data={dataHome}/>
      <ProductPage
        image={actionData.image}
        title={actionData.title}
        description={actionData.description}
        priority={actionData.priority}
      />
    </div>
  );
};

export default Gift;