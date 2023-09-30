type notifications = {
    children?: import("typescript").JsxElement | HTMLElement | string | any | null,
    style?: string,
    duration?: number
}

export const PopNotification = ({style, children}:notifications) => {
    return (
        <div className={`flex px-4 py-4 z-50 items-center space-x-1.5 rounded-lg absolute bottom-0 left-0 ml-16 mb-16 ${style}`}>{children}</div>
    );
}