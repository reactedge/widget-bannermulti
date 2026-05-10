import {activity} from "../activity";
import {hydrateRoot} from "react-dom/client";
import type {BannerRawWidgetConfig} from "../BannerConfig.ts";
import {BannerWidget} from "../components/BannerWidget.tsx";

export async function mountWidget(hostElement: HTMLElement, config: BannerRawWidgetConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted', hostElement);

    hydrateRoot(
        mountedHost,
        <BannerWidget rawConfig={config} />
    );
}
