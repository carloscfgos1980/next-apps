import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

export default function Interleaving() {
    return (
        <div>
            <h1>Interleaving</h1>
            <ClientComponentOne>
                <ServerComponentOne/>
            </ClientComponentOne>
        </div>
    );
}