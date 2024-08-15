"use client";
import { useState } from "react";

export default function NavSearch() {
    const [search, setSeatch] = useState(""); 
    console.log("Nav Search rendered");
    return (
        <div>Nav Search</div>
    );
}