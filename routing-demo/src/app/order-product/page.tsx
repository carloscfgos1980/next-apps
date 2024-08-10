"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick =() => {
        console.log("placing order");
        router.push("/");
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place order</button>
        </div>
    )
}