import type { BannerSlideProps } from "./Types";
import {
    slideWrapper,
    slideImageBase
} from "./BannerSlide/style";

export const BannerSlide = ({ slide, visibleSlides = 1, tileMode }: BannerSlideProps) => {
    const { image, title } = slide;

    const focal = image?.focalPoint || { x: 0.5, y: 0.5 };

    const wrapperStyle: React.CSSProperties = tileMode
        ? {
            flex: `0 0 calc((100% - ${(visibleSlides - 1) * 16}px) / ${visibleSlides})`,
            position: "relative",
            overflow: "hidden",
            height: "100%"
        }
        : {
            ...slideWrapper
        };

    return (
        <div
            style={wrapperStyle}
            data-banner-slide
        >
            <img
                src={image.src}
                srcSet={image.srcset}
                sizes={image.sizes}
                alt={title?.text || ""}
                style={
                    tileMode
                        ? {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: `${focal.x * 100}% ${focal.y * 100}%`
                        }
                        : {
                            ...slideImageBase,
                            objectPosition: `${focal.x * 100}% ${focal.y * 100}%`
                        }
                }
            />
        </div>
    );
};