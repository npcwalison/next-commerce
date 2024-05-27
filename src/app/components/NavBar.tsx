import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";


const NavBar = () => {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
            <Link
                href="/"
                className="uppercase font-bold text-md h-12 flex items-center"
            >
                Next Store
            </Link>
            <div className="flex items-center gap-8">
                <SignedIn>
                    Usuario Logado
                </SignedIn>
                <SignedOut>
                    Fazer Login
                </SignedOut>
            </div>
        </nav>
    );
};


export default NavBar;
