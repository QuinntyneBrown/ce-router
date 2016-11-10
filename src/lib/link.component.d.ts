import { RouterEventHub } from "./router-event-hub";
export declare class LinkComponent extends HTMLElement {
    private _routerEventHub;
    constructor(_routerEventHub?: RouterEventHub);
    static readonly observedAttributes: string[];
    connectedCallback(): void;
    onClick(e: Event): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    onRouterHubEvent(e: any): void;
    routeSegments: Array<any>;
    private _routeName;
    readonly route: string;
}
