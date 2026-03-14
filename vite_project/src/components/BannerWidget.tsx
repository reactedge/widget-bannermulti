import {useWidgetConfig} from "../hooks/useWidgetConfig.ts";
import {BannerSlider} from "./BannerSlider.tsx";
import {BannerStatic} from "./BannerStatic.tsx";

type Props = {
    host: HTMLElement
}

export const BannerWidget = ({host}: Props) => {
    const {config} = useWidgetConfig(host);

    if (!config) return null;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet = window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches;

    let currentMode = config.settings.mode.desktop;

    if (isMobile) currentMode = config.settings.mode.mobile;
    else if (isTablet) currentMode = config.settings.mode.tablet;

    if (currentMode === "slider") {
        return <BannerSlider slides={config.slides} config={config.settings} />;
    }

    return <BannerStatic slides={config.slides} config={config.settings} />;
};

