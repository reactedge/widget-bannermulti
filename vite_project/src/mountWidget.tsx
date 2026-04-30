import { createRoot } from "react-dom/client";
import {activity} from "./activity";
import {getMountedHost} from "./widget-runtime/lib/hostReader.ts";
import {BannerWidget} from "./components/BannerWidget.tsx";
import {fallback} from "./lib/fallback.ts";
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";

export const WIDGET_ID = 'bannermulti';

export function mountWidget(hostElement: HTMLElement, config: BannerRawWidgetConfig) {
    const mountedHost = getMountedHost(hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<BannerWidget rawConfig={config} />);

    activity('bootstrap', 'Widget mounted');

    fallback()
}
