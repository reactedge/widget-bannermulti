import {mountWidget, WIDGET_ID} from "./mountWidget";
import './styles/banner.css'
import type {BannerRawWidgetConfig} from "./BannerConfig.ts";

const mount = async (el: HTMLElement, config: BannerRawWidgetConfig) => {
     await mountWidget(el, config)
}

const api = { mount };

(window as any)[`ReactEdge_${WIDGET_ID}`] = api;

export { mount };