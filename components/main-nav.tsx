"use client";

import Link from "next/link";
import { Category } from "@/types"
import { usePathname } from "next/navigation"
import {cn} from "@/lib/utils";


interface MainNavProps {
    data:Category[];
}

// extracting the data array from the props to create a new array of routes which contains the href, label, and active properties
const MainNav: React.FC<MainNavProps> = ({data}) => {
    const pathname = usePathname()

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));
       

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
    
        {routes.map((route) => (
            <Link 
                key={route.href}
                href={route.href}
                className={cn("text-sm font-medium transition-colors hover:text-gray-800", route.active? "text-black": "text-neutral-500")}
                >
                {route.label}
            </Link>
        ))}

    </nav>
  )
}

export default MainNav