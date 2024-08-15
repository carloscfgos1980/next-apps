import fs from "fs";


export default function ServerComponentTwo() {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
    return (
        <div>Server component Two</div>
    );
}