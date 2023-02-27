import {PageHeader} from "../PageHeader/PageHeader";
import {DynamicHeader} from "../DynamicHeader/DynamicHeader";
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";

import "./ProductDescription.css"
import React from "react";

type Props = {
    title: string;
    description: string;
    image: string;
    data: {
        link: string,
        description: string,
        icon?: React.ReactNode,
    }[]
}

export const ProductDescription = ({
    title,
    description,
    image,
    data
                                   }: Props) => {

    return (
        <>
            <PageHeader />
            <DynamicHeader data={data} />
            <div className="product">
                <h1>{title}</h1>
                <div className="dataText">{description}</div>
            </div>
            <img alt={title} src={image} className="productImage"/>
        </>
    )
}