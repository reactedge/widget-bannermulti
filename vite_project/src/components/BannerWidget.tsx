import {BannerSlider} from "./BannerSlider.tsx";
import {BannerStatic} from "./BannerStatic.tsx";
import {getVisibleSlides} from "../lib/vslide.ts";
import {activity} from "../activity";
import {type BannerRawWidgetConfig, readWidgetConfig} from "../BannerConfig.ts";

type Props = {
    rawConfig: BannerRawWidgetConfig
}

export const BannerWidget = ({rawConfig}: Props) => {
    const config = readWidgetConfig(rawConfig);

    if (!config) return null;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    let currentMode = config.settings.mode.desktop;

    if (isMobile) currentMode = config.settings.mode.mobile;
    else if (isTablet) currentMode = config.settings.mode.tablet;

    if (currentMode === "slider") {
        const visibleSlides = getVisibleSlides(
            isMobile,
            isTablet,
            config.settings.visibleSlides?? 1
        )
        activity('vibille_slides', 'Visible Slides', {isMobile, isTablet, visibleSlides});
        return <BannerSlider slides={config.slides} config={config.settings} visibleSlides={visibleSlides} />;
    }

    return <BannerStatic slides={config.slides} config={config.settings} />;
};

