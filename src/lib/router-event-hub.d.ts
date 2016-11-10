import { RouterNavigate } from "./actions";
export declare const routerEventHubEvents: {
    NAVIGATE: string;
    ROUTE_CHANGED: string;
};
export declare class RouterEventHub {
    constructor();
    private static _instance;
    static readonly Instance: any;
    addEventListener(eventName: string, callback: any): void;
    removeEventListener(eventName: string, callback: any): void;
    dispatch(eventName: string, action: RouterNavigate): void;
    private _callbacksDictionary;
    private _lastActionsDictionary;
}
