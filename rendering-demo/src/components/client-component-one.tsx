// import ServerComponentOne from "./server-component-one";
import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne({children}:{children: React.ReactNode}) {
    return (
        <div>
            <h1>client component one</h1>
            <ClientComponentTwo/>
            {/* <ServerComponentOne/> */}
            {children}
        </div>
    );
}