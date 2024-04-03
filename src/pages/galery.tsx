import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import Head from "next/head";
import { Layout } from "@/components/Layout/Layout";

const gelery = [
  {
    path: "/blackGloss.JPG",
    width: "1024",
    height: "768"
  },
  {
    path: "/contur.JPG",
    width: "768",
    height: "1024"
  },
  {
    path: "/gloss.JPG",
    width: "1024",
    height: "768"
  },
  {
    path: "/gostinaya.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/lightLine.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/lines.jpg",
    width: "1024",
    height: "768"
  },
  {
    path: "/mansarda.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/matte.jpeg",
    width: "768",
    height: "1024"
  },
  {
    path: "/photoPrint.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/room.JPG",
    width: "1024",
    height: "768"
  },
  {
    path: "/sanUzel.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/track.jpeg",
    width: "1024",
    height: "768"
  },
  {
    path: "/twoLevel.JPG",
    width: "1024",
    height: "768"
  }
];

const Galery = () => {
  return (
    <>
      <Head>
        <title>Натяжные потолки, окна ПВХ, жалюзи, рольставни. Компания Высота Шатура</title>
        <meta name="description" content="Натяжные потолки, окна ПВХ, жалюзи, рольставни, тихие стены" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTop.png" />
      </Head>
      <Layout />
      <div style={{paddingTop: "3rem", background: "whitesmoke"}}>
        <Gallery>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {gelery.map((item) => (
              <Item
                original={item.path}
                thumbnail={item.path}
                width={item.width}
                height={item.height}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={item.path} height={"300px"} />
                )}
              </Item>
            ))}</div>
        </Gallery>
      </div>
    </>
  );
};

export default Galery;