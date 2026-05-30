import {type BannerSettingConfig, type BannerSlide} from "./components/Types.ts";
import type {WidgetActivity} from "./activity";

export interface RawWidgetConfig {
    data: BannerWidgetConfig
}
export interface BannerWidgetConfig {
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export const WIDGET_ID = 'bannermulti';

export function readWidgetConfig(
    rawConfig: RawWidgetConfig,
    activity?: WidgetActivity
): BannerWidgetConfig {
    const contract = rawConfig.data

    activity?.log('bootstrap', 'Config resolved', contract);

    return Object.freeze(contract);
}