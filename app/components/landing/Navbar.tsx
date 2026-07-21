import React from 'react';
import {IconHeartHandshake} from "@tabler/icons-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar  h-12 flex items-center justify-between">
            <div className={"flex items-center h-full"}>
                <IconHeartHandshake stroke={2} className="h-12 w-12"/>
            </div>
            <div className={"flex items-center h-full"}>
                <div className={"flex items-center rounded-2xl h-full px-4"}>
                    <Link href={"/login"}>
                        Log in
                    </Link>
                </div>
                <div className={"flex items-center bg-primary text-white rounded-2xl hover:bg-primary/90 h-full px-4"}>
                    <Link href={"/signup"}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
