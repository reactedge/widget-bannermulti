import {activity} from "../activity";
import {hydrateRoot} from "react-dom/client";
import type {BannerRawWidgetConfig} from "../Config.ts";
import {WidgetWrapper} from "../components/WidgetWrapper.tsx";

export async function mountWidget(hostElement: HTMLElement, config: BannerRawWidgetConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted', hostElement);

    hydrateRoot(
        mountedHost,
        <WidgetWrapper rawConfig={config} />
    );
}
