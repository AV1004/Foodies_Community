"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

import classes from "./navLink.module.css"


export default function NavLink({ children, href }) {
    const path = usePathname();
    //  usePathname is use to get current path of user's broswer and you can use it as shown in below and you have use it in client component as we have shown above
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link} >{children}</Link>
    )
}
