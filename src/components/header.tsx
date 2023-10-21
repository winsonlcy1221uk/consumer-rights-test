'use client'

import { source_sans_3, playfair_display } from "@/app/fonts"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from '@mui/icons-material/Menu';

const ArrowDown = ()=>{
    return(
        <svg className="inline-block ml-1" xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1.13525 1.40674L3.9165 4.54999C3.94023 4.57681 3.97432 4.59217 4.01013 4.59217C4.04594 4.59217 4.08003 4.57681 4.10375 4.54999L6.88525 1.40674" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Header = () => {
    const pathname = usePathname();
    const navItems = [
        {name: 'What we do', path: '/' },
        {name: 'Our work', path: '/our_work' },
        {name: 'News', path: '/news' },
        {name: 'Who we are', path: '/who_we_are' },
        {name: 'Get in touch', path: '/get_in_touch' },
    ]
    return(
        <header className="flex xl:w-4/5 xsm:full-w items-center mx-auto my-0 justify-between lg:flex-row xsm:flex-col lg:p-7">
            <div className="p-7 xsm:hidden lg:block">
                <Image
                src="/dlp-logo.svg"
                alt="Logo"
                width={240}
                height={52}
                priority
                />
            </div>
            <nav>
                <ul className={playfair_display.className + " xsm:hidden lg:flex font-bold justify-between lg:flex-row xsm:flex-col space-x-5 p-7 lg:text-xl md:text-base xsm:text-sm tracking-tight"}>
                    {navItems.map((item)=>(
                        <li key={item.path}>
                            <Link href={item.path} className={`${pathname===item.path ? 'border-b border-white pb-3':''} hover:opacity-80`}>
                               {item.name}
                            {
                            (pathname===item.path)?
                            <ArrowDown />:''   
                            }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="xsm:inline lg:hidden p-2"><MenuIcon /></button>
        </header>
    )
}