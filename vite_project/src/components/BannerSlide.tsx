import type { BannerSlideProps } from "./Types";

export const BannerSlide = ({ slide, visibleSlides = 1, tileMode }: BannerSlideProps) => {
    const { image, title } = slide;

    const focal = image?.focalPoint;

    const wrapperStyle: React.CSSProperties | undefined = tileMode
        ? { flex: `0 0 calc((100% - ${(visibleSlides - 1) * 16}px) / ${visibleSlides})` }
        : undefined;

    const objectPosition = focal
        ? `${focal.x * 100}% ${focal.y * 100}%`
        : undefined;

    return (
        <div
            className={`re-banner-slide ${tileMode ? "re-banner-slide--tile" : ""}`}
            style={wrapperStyle}
            data-banner-slide
        >
            <img
                src={image.src}
                srcSet={image.srcset}
                sizes={image.sizes}
                alt={title?.text || ""}
                className="re-banner-image"
                style={objectPosition ? { objectPosition } : undefined}
            />
        </div>
    );
};