import { Store } from "../utilities";
import { Route } from "./route";
import { RouterEventHub } from "./router-event-hub";
export declare class Router {
    private _routes;
    private _store;
    private initialRoute;
    private _routerEventHub;
    constructor(_routes?: Array<Route>, _store?: Store, initialRoute?: string, _routerEventHub?: RouterEventHub);
    private static _instance;
    static readonly Instance: Router;
    setRoutes(routes: Array<Route>): void;
    onChanged(state: {
        route?: string;
        routeSegments?: Array<any>;
    }): void;
    navigate(routeSegments: Array<any>): void;
    navigateUrl(path: string): void;
    _addEventListeners(): void;
    addEventListener(callback: any): void;
    private _routeName;
    routePath: string;
    routeParams: any;
    private _callbacks;
    private _loginRedirect;
    private _rootAsHTML;
    private _location;
}
