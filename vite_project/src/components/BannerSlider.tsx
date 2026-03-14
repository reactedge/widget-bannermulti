import { useState } from "react";
import { BannerSlide } from "./BannerSlide.tsx";
import { NavigationDots } from "./NavigationDots.tsx";
import { NavigationArrows } from "./NavigationArrows.tsx";
import type { BannerSliderProps } from "./Types.ts";

export const BannerSlider = ({ slides, config }: BannerSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ratio = config.mode.desktop || "16:7";
    const [w, h] = ratio.split(":").map(Number);
    const paddingTop = (h / w) * 100;

    const visibleSlides = config.visibleSlides ?? 1;
    const totalGroups = Math.ceil(slides.length / visibleSlides);

    const start = currentIndex * visibleSlides;
    const end = start + visibleSlides;

    const tileMode = visibleSlides > 1;

    return (
        <div className="banner-media">
            <div
                style={
                    tileMode
                        ? {
                            display: "flex",
                            gap: "16px",
                            width: "100%",
                            height: config.height ?? "300px"
                        }
                        : {
                            position: "relative",
                            width: "100%",
                            paddingTop: paddingTop + "%"
                        }
                }
            >
                {slides.slice(start, end).map((slide, i) => (
                    <BannerSlide
                        key={`${start}-${i}`}
                        slide={slide}
                        isActive={false}
                        tileMode={tileMode}
                        visibleSlides={visibleSlides}
                    />
                ))}
            </div>

            {/* NAVIGATION */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "12px"
                }}
            >
                <NavigationDots
                    current={currentIndex}
                    total={totalGroups}
                    onChange={setCurrentIndex}
                />

                <NavigationArrows
                    current={currentIndex}
                    total={totalGroups}
                    onChange={setCurrentIndex}
                />
            </div>

        </div>
    );
};