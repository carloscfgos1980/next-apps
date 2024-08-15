export default async function Products() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            <h1>Product</h1>           
        </div>
    );
}