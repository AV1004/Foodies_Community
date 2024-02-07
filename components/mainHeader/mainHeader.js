import Link from 'next/link'
import React from 'react'
import classes from "./mainHeader.module.css"
import Logo from "@/assets/logo.png"
import Image from 'next/image'
import MainHeaderBackground from './mainHeaderBackground'
import NavLink from './navLink'

export default function MainHeader() {
    return (

        <>


            <MainHeaderBackground />
            <header className={classes.header} >
                <Link className={classes.logo} href={"/"} >
                    {/* <img src={Logo.src} alt="A Plate Full of Food!" /> */}
                    {/* Now to use simple img is not appropriate in Nextjs as Nextjs Provides A Inbulit Image Component that provides a LazyLoading and Some Other Property Which you can explore in NextJs Offical Site :)*/}
                    <Image src={Logo} alt="A Plate Full of Food!" priority />
                    {/* One more Thing in THis Image Compoenet You have Provide WHole Image Extracted Object As Shown Above */}
                    {/* And Also The prop Priority is indicate that This resource must load first  */}
                    NextLevel Food
                    {/* In next you import img as Obj then you have to extract it's src via Object.src as shown above! */}
                </Link>

                <nav className={classes.nav} >
                    <ul>
                        <li>
                            <NavLink href={"/meals"} >Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"} >Foodies Community</NavLink>
                            {/* So here in Link we created a seprate component for this purpose only , it is not needed but we creted because we use usePathname of next in that component as it is use to fetch current path of next app and to use it you have to make a client side component as you can make this component to client component but we should have make client at end of the component tree as possible as much so that's why we make another component for link  */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
