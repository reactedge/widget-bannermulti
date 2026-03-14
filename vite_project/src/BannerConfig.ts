import {type BannerSettingConfig, type BannerSlide} from "./components/Types.ts";
import {loadContract} from "./widget-runtime/lib/contractLoader.ts";
import {activity} from "./activity";

export interface BannerWidgetConfig {
    readonly slides: BannerSlide[]

    readonly settings: BannerSettingConfig;
}

export async function readWidgetConfig(
    hostElement: HTMLElement
): Promise<BannerWidgetConfig | null> {
    const contract = await loadContract(hostElement);

    activity('bootstrap', 'Config resolved', contract.data);

    return Object.freeze(contract.data);
}