import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { LinkResponse } from "./lib/LinkType";

export async function middleware(req: NextRequest, ev: NextFetchEvent){
    const reference = req.nextUrl.pathname.split("/").pop();

    if (!reference || typeof reference !== "string"){
        return NextResponse.rewrite(req.nextUrl.origin)
    }

    const referenceFetch = await fetch(`${req.nextUrl.origin}/api/${reference}`);
    
    if (referenceFetch.status !== 200) {
        return NextResponse.redirect(req.nextUrl.origin)
    }

    const data = await referenceFetch.json() as LinkResponse;

    if (data?.link_type === "BIN" && data?.original_data){
        return NextResponse.redirect(data.original_data);
    }
};


export const config = {
    matcher: [
        '/((?!api|_next/static|favicon.ico).*)',
    ],
};