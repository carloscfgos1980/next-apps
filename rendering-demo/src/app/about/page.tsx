import { cookies } from "next/headers";

export default function About() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log("About server component");
    console.log(theme);
    return (
        <div>
            <h1>About Page {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}