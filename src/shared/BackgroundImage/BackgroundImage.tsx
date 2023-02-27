

type Props = {
    alt: string;
    src: string;
}

export const BackgroundImage = ({
    alt,
    src
                                }: Props) => (
    <img
        alt={alt}
        style={{width: "100%", position: "absolute", top: "44px"}}
        src={src}
    />
)