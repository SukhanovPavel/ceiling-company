import Link from "next/link";

import styles from "./WorkPrice.module.css";
import {useState} from "react";
import Image from "next/image";

const Left = <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
const Right = <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg>

type Props = {
    servicesMap: {
        title: string;
        img: string;
        description: {text: string; num: string}[];
        price?: string;
        link: string;
    }[];
    titleH2?: string;
    allServicesButton?: boolean;
};
export const WorkPrice = ({servicesMap, titleH2, allServicesButton}: Props) => {

    const [slide, setSlide] = useState(0);
    const Slide = servicesMap[slide];
    const SlideTwo = slide === servicesMap.length-1 ? servicesMap[0] : servicesMap[slide+1];
    const SlideThree = slide === servicesMap.length-2 ?
        servicesMap[0] : slide === servicesMap.length-1 ? servicesMap[1] : servicesMap[slide+2];

    let p = '-1000px';
    return (
        <div className={styles._}>
            {titleH2 ? <h2>{titleH2}</h2> : null}
            <div className={styles.services}>
                {/*<button onClick={slide === 0 ?*/}
                {/*    () => setSlide(12) : () => setSlide(slide - 1)} className={styles.arrow}>{Left}</button>*/}

                {/*<div className={styles.wrap}>*/}
                {/*    <div*/}
                {/*      key={Slide.title}*/}
                {/*      className={styles.service+" "+styles.shadowLeft}*/}
                {/*    >*/}
                {/*        <div className={styles.imgContainer}>*/}
                {/*            <Image*/}
                {/*              alt="vysota"*/}
                {/*              fill*/}
                {/*              className={styles.img}*/}
                {/*              src={Slide.img}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <h3>{Slide.title}</h3>*/}
                {/*        <div className={styles.desc}>*/}
                {/*            {Slide.description.map(item =>*/}
                {/*              (<div key={item.text}><span>{item.text}</span><span>{item.num}</span></div>))}*/}
                {/*        </div>*/}
                {/*        {Slide.price ?*/}
                {/*          <div>*/}
                {/*              Цена: {Slide.price} руб.*/}
                {/*          </div> : null*/}
                {/*        }*/}
                {/*        <Link href={Slide.link}>*/}
                {/*            <button className={styles.button}>Подробнее</button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*    <div key={SlideTwo.title} className={styles.service+" "+styles.dNone+" "+styles.shadowCenter}>*/}
                {/*        <div className={styles.imgContainer}>*/}
                {/*            <Image*/}
                {/*              alt="vysota"*/}
                {/*              fill*/}
                {/*              className={styles.img}*/}
                {/*              src={SlideTwo.img}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <h3>{SlideTwo.title}</h3>*/}
                {/*        <div className={styles.desc}>*/}
                {/*            {SlideTwo.description.map(item =>*/}
                {/*              (<div key={item.text}><span>{item.text}</span><span>{item.num}</span></div>))}*/}
                {/*        </div>*/}
                {/*        {SlideTwo.price ?*/}
                {/*          <div>*/}
                {/*              Цена: {SlideTwo.price} руб.*/}
                {/*          </div> : null*/}
                {/*        }*/}
                {/*        <Link href={SlideTwo.link}>*/}
                {/*            <button className={styles.button}>Подробнее</button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*    <div className={styles.service+" "+styles.dNone+" "+styles.shadowRight}>*/}
                {/*        <div className={styles.imgContainer}>*/}
                {/*            <Image*/}
                {/*              alt="vysota"*/}
                {/*              fill*/}
                {/*              className={styles.img}*/}
                {/*              src={SlideThree.img}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <h3>{SlideThree.title}</h3>*/}
                {/*        <div className={styles.desc}>*/}
                {/*            {SlideThree.description.map(item =>*/}
                {/*              (<div key={item.text}><span>{item.text}</span><span>{item.num}</span></div>))}*/}
                {/*        </div>*/}
                {/*        {SlideThree.price ?*/}
                {/*          <div>*/}
                {/*              Цена: {SlideThree.price} руб.*/}
                {/*          </div> : null*/}
                {/*        }*/}
                {/*        <Link href={SlideThree.link}>*/}
                {/*            <button className={styles.button}>Подробнее</button>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<button*/}
                {/*  onClick={slide === 12 ?*/}
                {/*    () => setSlide(0) : () => setSlide(slide + 1)}*/}
                {/*  className={styles.arrow}*/}
                {/*>*/}
                {/*    {Right}*/}
                {/*</button>*/}

                {servicesMap.map( item =>
                  <div key={item.title} className={styles.service}>
                    <div className={styles.imgContainer}>
                        <Image
                          alt="vysota"
                          fill
                          className={styles.img}
                          src={item.img}
                        />
                    </div>
                    <h3>{item.title}</h3>
                    <div className={styles.desc}>
                        {item.description.map(desc =>
                          (<div key={desc.text}><span>{desc.text}</span><span>{desc.num}</span></div>))}
                    </div>
                    {item.price ?
                      <div>
                          Цена: {item.price} руб.
                      </div> : null
                    }
                    <Link href={item.link}>
                        <button className={styles.button}>Подробнее</button>
                    </Link>
                  </div>)
                }

            </div>
            {allServicesButton ? <Link href="/services"><button className={styles.button}>Смотреть все услуги</button></Link> : null}
        </div>
    )
}