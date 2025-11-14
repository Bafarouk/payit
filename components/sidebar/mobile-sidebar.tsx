'use client';
import React from 'react';
import {
    Sheet, SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const MobileSidebar = ({user}: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className={"w-full max-w-[264px]"}>
            <Sheet>
                <SheetTrigger>
                    <Image
                        className={"cursor-pointer"}
                        src={"/icons/hamburger.svg"}
                        alt={"menu"}
                        width={30}
                        height={30}
                    />
                </SheetTrigger>
                <SheetContent side={"left"} className={"border-none bg-white"}>
                    <nav className={"flex flex-col gap-4"}>
                        <Link href={"/"} className={"flex flex-row cursor-pointer items-center gap-1 px-4"}>
                            <Image
                                src={"/icons/logo.svg"}
                                alt={"Payit logo"}
                                width={34}
                                height={34}
                            />
                            <h1 className={"text-26 font-ibm-plex-serif font-bold text-black-1"}> Payit</h1>
                        </Link>
                        <div className={"mobilenav-sheet"}>
                            <SheetClose asChild>
                                <nav className={"flex h-full flex-col gap-6 pt-16 text-white"}>
                                    {sidebarLinks.map((item) => {
                                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                                        return (
                                            <SheetClose asChild key={item.route}>
                                                <Link
                                                    className={cn("mobilenav-sheet_close w-full", {'bg-bank-gradient': isActive})}
                                                    href={item.route}
                                                    key={item.label}>
                                                    <Image
                                                        className={cn({'brightness-[3] invert-0': isActive})}
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        height={20}
                                                        width={20}
                                                    />
                                                    <p className={cn("text-16 font-semibold text-black-2", {"text-white": isActive})}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </nav>
                            </SheetClose>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileSidebar;