'use client';
import {useRouter} from 'next/navigation';
import { usePathname } from 'next/navigation';



type ButtonType =  {
    isLink: string,
    action: string,
    href?: string,
    style: string,
    children: import('typescript').JsxElement | string | any
}

const Route = (action:string, router:any, href?:string) => {

    switch (action) {
        case "push":
            router.push(href)
            break;
        case "refresh":
            router.refresh()
            break;
        case "back": 
            router.back()
        default:
            router.refresh();
    }

}

export default function Button ({isLink, action, href, style, children}:ButtonType) {

    const router = useRouter();
    const pathname = usePathname();
    const active = href === pathname;





    return (
        <button onClick={() => Route(action,router, href)} className={`${style} ${active  ? isLink : ""}`}>{children}</button>
    );

}