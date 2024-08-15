import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading product details ...</p>}>
                <Products/>
            </Suspense>
            <Suspense fallback={<p>Loading review details ...</p>}>
                <Reviews/>
            </Suspense>
        </div>
    );
}