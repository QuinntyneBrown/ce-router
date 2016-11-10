import { Router } from "./router";
export declare class LinkImageComponent extends HTMLElement {
    private _router;
    constructor(_router?: Router);
    static readonly observedAttributes: string[];
    connectedCallback(): void;
    onRouteChange(state: any): void;
    onClick(e: Event): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    routeSegments: Array<any>;
    readonly route: string;
}
