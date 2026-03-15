import { createRoot } from "react-dom/client";
import {activity} from "./activity";
import {getMountedHost} from "./widget-runtime/lib/hostReader.ts";
import {BannerWidget} from "./components/BannerWidget.tsx";
import {fallback} from "./lib/fallback.ts";

export const WIDGET_ID = 'bannermulti';

export function mountWidget(hostElement: HTMLElement) {
    const mountedHost = getMountedHost(hostElement);

    // Create React root inside shadow
    const root = createRoot(mountedHost);
    root.render(<BannerWidget host={hostElement} />);

    activity('bootstrap', 'Widget mounted');

    fallback()
}
