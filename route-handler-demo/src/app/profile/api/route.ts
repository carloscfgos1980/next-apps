import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";



export async function GET(request: NextRequest){
    // method 1
    const requestHeaders = new Headers(request.headers);
    const method1 = requestHeaders.get("Authorization");

    // method 2
    const headersList = headers();
    const method2 = headersList.get("Authorization");

    console.log("method 1:", method1);
    console.log("method 2:", method2)

    // cookies 1
    const theme = request.cookies.get("theme");
    console.log("cokkies1:", theme);

    // cookies 2
    cookies().set("resultPerPage", "20");
    const resultPerPage = cookies().get("resultPerPage");
    console.log("resultPerPage cookie:", resultPerPage);


    return new Response("<h1>Profile Api Data</h1>", {
        headers:{
            "Content-Type" : "text/html",
            "Set-Cookie" : "theme=dark"
        },
    });
}