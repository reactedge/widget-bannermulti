import {type BannerSettingConfig, type BannerSlide} from "./components/Types.ts";
import {activity} from "./activity";

export interface BannerRawWidgetConfig {
    data: BannerWidgetConfig
}
export interface BannerWidgetConfig {
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export const WIDGET_ID = 'bannermulti';

export function readWidgetConfig(
    rawConfig: BannerRawWidgetConfig
): BannerWidgetConfig {
    const contract = rawConfig.data

    activity('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}