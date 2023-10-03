import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

function NavLink({to,children}){
    return <>
        <Link 
            href={to} className={`mx-4 text-black dark:text-white`}>
            {children}
        </Link>
    </>
    
}

function MobileNav({open, setOpen}){
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-gray-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white dark:bg-gray-900 h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold text-black dark:text-white" href="/">Our Bar</Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link className="text-xl font-medium my-4 text-black dark:text-white" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className="text-xl font-normal my-4 text-black dark:text-white" href="/cocktailRecipe/cocktailSearchMain" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Recipes
                </Link>
                {/* <Link className="text-xl font-normal my-4 text-black dark:text-white" href="/cocktailAdd/cocktailAdd_Form" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Add Recipe
                </Link> */}
            </div>  
        </div>
    )
}


export default function NavBar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="flex filter drop-shadow-md bg-white dark:bg-gray-900 px-4 py-4 h-20 items-center fixed w-full z-20 top-0 left-0 ">
            <MobileNav open={mobileMenuOpen} setOpen={setMobileMenuOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/" className="flex items-center">
                    <Image 
                        priority
                        className={`${utilStyles.borderCircle}`}
                        src="/images/shawn_Sarah.jpg" 
                        height={144}
                        width={144}
                        alt="defaultImg"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white px-2">Our Bar</span>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen)
                }}>
                    {/* hamburger button lines */}
                    <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${mobileMenuOpen ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${mobileMenuOpen ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/cocktailRecipe/cocktailSearchMain">
                        Recipes
                    </NavLink>
                    {/* <NavLink to="/cocktailAdd/cocktailAdd_Form">
                        Add Recipe
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}