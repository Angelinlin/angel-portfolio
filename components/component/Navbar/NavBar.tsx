"use client"
import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ButtonNav from "./ButtonNav/index";

export function NavigationMenuDemo() {

    const links = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Works",
            href: "/works",
        }
    ]


    return (
        <div className="w-screen h-12 z-50 flex items-center justify-center bg-transparent fixed pt-6">
            <div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'backInOut' }}
                    className="flex-row gap-2 tropiNav hidden md:flex"
                >
                    <NavigationMenu className="flex flex-row gap-2 madim">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg bg-neutral-900 text-white`}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  text-lg bg-neutral-900 text-white`}>
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/works" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  text-lg bg-neutral-900 text-white`}>
                                        Works
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        {/* <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/future" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                                        future
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList> */}
                    </NavigationMenu>
                </motion.div>
            </div>

            <div className="flex md:hidden w-full justify-end items-center">
                <ButtonNav />
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
