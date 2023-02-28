

import styles from "./BackgroundImage.module.css";

type Props = {
    alt: string;
    src: string;
}

export const BackgroundImage = ({
                                    alt,
                                    src
                                }: Props) => (
    <img
        className={styles._}
        alt={alt}
        src={src}
    />
)