"use client"
import CarouselComponent from "@/components/carouselComponent";
import { useTheme } from "@/components/theme-provider";
import ClientSideFunction from "@/utils/client-utils";
// import ServerSideFunction from "@/utils/server-utils";



export interface ImageDetails {
    id: number;
    location: string;
}

export default function ClientRoutePage() {
    console.log("client route rendered");
    // const result = ServerSideFunction();
    const URL = "https://picsum.photos/400/200";

    const arrayImages:ImageDetails[] = [
        {
            id: 1,
            location: URL,
         },
        {
            id: 2,
            location: URL,
         },
        {
            id: 3,
            location: URL,
         },
        {
            id: 4,
            location: URL,
         },
        {
            id: 5,
            location: URL,
         },
    ];

    const theme = useTheme();

    return (
        <div>
            <ClientSideFunction/>
            <h1
            style={{
                color: theme.colors.primary,
                background: theme.colors.secundary
            }}
            >Cient Component
            </h1>
            {/* <p>{result}</p> */}
            <CarouselComponent arrayImages={arrayImages}/>

        </div>
    );
}