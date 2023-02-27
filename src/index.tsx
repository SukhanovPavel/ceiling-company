import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {App} from './App';
import store from "./store";
import {
    createBrowserRouter, RouterProvider,
    RouterProviderProps
} from "react-router-dom";
import {
    Accessories,
    Contacts,
    Ceilings,
    ForDillers,
    Windows,
    WindowBlind
} from "./pages";
import {productDescription} from "./assets/productDescription/productDescription";

import "./index.css"
import {ProductDescription} from "./shared/ProductDescription/ProductDescription";
import {dataHome} from "./App";
import {dataCeiling} from "./pages/ceilings/Ceilings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "о-компании",
        element: <ProductDescription
            title={productDescription.home.about.title}
            description={productDescription.home.about.text}
            image={productDescription.home.about.image}
            data={dataHome}
        />
    },
    {
        path: "акции",
        element: <ProductDescription
            title={productDescription.home.promotions.title}
            description={productDescription.home.promotions.text}
            image={productDescription.home.about.image}
            data={dataHome}
        />,
    },
    {
        path: "наши-работы",
        element: <ProductDescription
            title={productDescription.home.ourWorks.title}
            description={productDescription.home.ourWorks.text}
            image={productDescription.home.about.image}
            data={dataHome}
        />,
    },
    {
        path: "отзывы",
        element: <ProductDescription
            title={productDescription.home.reviews.title}
            description={productDescription.home.reviews.text}
            image={productDescription.home.about.image}
            data={dataHome}
        />,
    },


    {
        path: "потолки",
        element: <Ceilings />,
    },
    {
        path: "потолки/матовый",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/глянцевый",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/сатин",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/тканевый",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/двухуровневый",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/фотопечать",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/световые-линии",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },
    {
        path: "потолки/парящий",
        element: <ProductDescription
            title={productDescription.ceiling.matte.title}
            description={productDescription.ceiling.matte.text}
            image={productDescription.ceiling.matte.image}
            data={dataCeiling}
        />
    },


    {
        path: "окна",
        element: <Windows />,
    },
    {
        path: "жалюзи",
        element: <WindowBlind />,
    },
    {
        path: "диллерам",
        element: <ForDillers />,
    },
    {
        path: "комплектующие",
        element: <Accessories />,
    },
    {
        path: "контакты",
        element: <Contacts />,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
