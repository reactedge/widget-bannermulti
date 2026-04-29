import { useState } from "react";
import { BannerSlide } from "./BannerSlide.tsx";
import { NavigationDots } from "./NavigationDots.tsx";
import { NavigationArrows } from "./NavigationArrows.tsx";
import type { BannerSliderProps } from "./Types.ts";
import {activity} from "../activity";

export const BannerSlider = ({ slides, config, visibleSlides }: BannerSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ratio = config.mode.desktop || "16:7";
    const [w, h] = ratio.split(":").map(Number);

    const totalGroups = Math.ceil(slides.length / visibleSlides);

    const start = currentIndex * visibleSlides;
    const end = start + visibleSlides;

    console.log({ratio, start, end , visibleSlides})

    const tileMode = visibleSlides > 1;

    activity('banner_slider', 'Banner Slider', {
        start,
        end,
        totalGroups,
        tileMode,
        visibleSlides
    });

    return (
        <div className="re-banner-media">
            <div className="re-banner-viewport">
               <div
                    className={`re-banner-track ${
                        tileMode
                            ? "re-banner-track--tiles"
                            : "re-banner-track--single"
                    }`}
                    style={
                        tileMode
                            ? { height: config.height ?? "auto" }
                            : { aspectRatio: `${w} / ${h}` }
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

                    <NavigationArrows
                        current={currentIndex}
                        total={totalGroups}
                        onChange={setCurrentIndex}
                    />
               </div>
            </div>

            <div className="re-banner-navigation">
                <NavigationDots
                    current={currentIndex}
                    total={totalGroups}
                    onChange={setCurrentIndex}
                />
            </div>
        </div>
    );
};