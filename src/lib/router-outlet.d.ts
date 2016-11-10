import { RouteListener } from "./route-listener";
import { Router } from "./router";
export declare abstract class RouterOutlet extends HTMLElement {
    _router: Router;
    constructor(_router?: Router);
    connectedCallback(): void;
    use(listener: RouteListener): void;
    private _listeners;
    _onRouteChanged(options: any): void;
    private _currentView;
    private _routeName;
}
