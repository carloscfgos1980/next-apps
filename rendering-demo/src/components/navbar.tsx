// "use client"
// import { useState } from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
    // const [search, setSeatch] = useState("");
    console.log("Navbar rendered");
    return (
        <div>
            <h1>Navbar</h1>
            <NavLinks/>
            <NavSearch/>
        </div>
    );
}