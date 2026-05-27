import {mountWidget} from "./mountWidget";
import {type BannerRawWidgetConfig, WIDGET_ID} from "./BannerConfig.ts";

import "./styles/banner.css"

const mount = async (el: HTMLElement, config: BannerRawWidgetConfig) => {
     await mountWidget(el, config)
}

const api = { mount };

(window as any)[`ReactEdge_${WIDGET_ID}`] = api;

export { mount };