import Link from "next/link";



export default function Products () {
    const productId = 100;
    return (
        <>
        <Link href="/">Home page</Link>
        <h1>Products</h1>
        <h2>
            <Link href="products/1">producto 1</Link>
        </h2>
        <h2>
            <Link href="products/2">producto 2</Link>
        </h2>
        <h2>
            <Link href="products/3" replace>producto 3</Link>
        </h2>
        <h2>
            <Link href={`products/${productId}`}>producto {productId}</Link>
        </h2>
        </>
    )
}