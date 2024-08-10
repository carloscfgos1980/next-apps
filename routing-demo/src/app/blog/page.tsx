import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
    // title: "Blog"
    title: {
        absolute: "Blog" // the template will be ignore and also the absolute in root/layout
    }
}

export default function Blog () {
    return (
        <div>
            <Link href="/">Home page</Link>
            <h1>Blog</h1>
        </div>
    )
}