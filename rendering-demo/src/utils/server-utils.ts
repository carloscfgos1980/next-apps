import "server-only";

export default function ServerSideFunction() {
    console.log(`
        use multiple libraries,
        interact with database,
        process condfidential information
        `);
    return "server result"
}