// import React from "react";
// import { Layout } from "@/components/Layout/Layout";
// import { dataHome } from "@/assets/mocks/homePageData";
// import { ProductPage } from "@/components/ProductPage/ProductPage";
//
// const actionData = {
//   title: "Скидка 15% на натяжные потолки нашим подписчикам",
//     description:"Скидка действует для всех подписчиков нашего сообщества Вконтакте",
//     priority:
//     {
//       title: "Условия для участия в акции:",
//       list: [
//         "Розыгрыш проводится среди всех подписчиков нашего сообщества ( Натяжные потолки Высота)." +
//         "Победителя определим с помощью приложение KonkursVK.",
//         "Ваш аккаунт должен быть живым, с фото и друзьями!.",
//         " Не допускаются конкурсные аккаунты. Если более 10% из последних 50 постов являются розыгрышами, то такие " +
//         "аккаунты приложение считает конкурсными.Организатор вправе провести повторный розыгрыш приза.",
//         "акция проводится до 10 октября 2023 года"
//       ],
//     },
//   image: "/action152.png"
// };
//
// const Sale = () => {
//   return (
//     <div>
//       <Layout data={dataHome}/>
//       <ProductPage
//         image={actionData.image}
//         title={actionData.title}
//         description={actionData.description}
//         priority={actionData.priority}
//         linkVK
//       />
//     </div>
//   );
// };
//
// export default Sale;