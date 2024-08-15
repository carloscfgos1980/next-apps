import ClientSideFunction from "@/utils/client-utils";
import ServerSideFunction from "@/utils/server-utils";

export default function ServerRoutePage() {
    console.log("server route rendered");
    const result = ServerSideFunction();
    return (
        <div>
            {/* <ClientSideFunction/> */}
            <h1>Server Component</h1>
            <p>{result}</p>
        </div>
    );
}