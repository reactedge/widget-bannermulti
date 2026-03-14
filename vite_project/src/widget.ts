import { mountWidget } from "./mountWidget";
import './styles/banner.css'

class BannerWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

if (!customElements.get("banner-widget")) {
    customElements.define("banner-widget", BannerWidget);
}

