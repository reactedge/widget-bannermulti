import { createRoot } from "react-dom/client";
import {activity} from "./activity";
import {BannerWidget} from "./components/BannerWidget.tsx";
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";

export function mountWidget(hostElement: HTMLElement, config: BannerRawWidgetConfig) {
    const mountedHost = hostElement;

    activity('bootstrap', 'Widget mounted');

    const root = createRoot(mountedHost);
    root.render(<BannerWidget rawConfig={config} />);
}
