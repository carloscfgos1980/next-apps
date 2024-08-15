import "client-only";

export default function ClientSideFunction() {
    console.log(`
        use window object,
        use localSorage
        `);
    return "server result"
}