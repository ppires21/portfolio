import {cn} from "@/lib/utils"
import { useState } from "react"

const navItems = [
    {name: "Home", href: "#hero"}
    {name: "About", href: "#about"}
    {name: "Skills", href: "#skills"}
    {name: "Projects", href: "#projects"}
    {name: "Contact", href: "#contact"}
]


export const Navbar = () => {

const [isScrolled, setIsScrolled] = useState(false);
useEffect ()

    return (
    <nav className={cn("fixed 2-full z-40 transition-all duration-300", )}></nav>
)
}