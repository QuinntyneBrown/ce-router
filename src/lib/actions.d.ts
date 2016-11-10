export declare var routerActions: {
    LINK_CLICK: string;
    ROUTE_CHANGED: string;
};
export declare class RouterNavigate extends CustomEvent {
    constructor(routeSegments: Array<string>);
}
export declare class RouteChanged extends CustomEvent {
    constructor(options: any);
}
