import { mountWidget } from "./mountWidget";
import './styles/banner.css'

class BannerWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

customElements.define("bannermulti-widget", BannerWidget);

