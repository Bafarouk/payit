'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();

    return (
        <section className={"sidebar"}>
            <nav className={"flex flex-col gap-4"}>
                <Link href={"/"} className={"flex flex-row mb-12 cursor-pointer items-center gap-2"}>
                    <Image
                        className={"size-[24px] max-xl:size-14"}
                        src={"/icons/logo.svg"}
                        alt={"Payit logo"}
                        width={34}
                        height={34}
                    />
                    <h1 className={"sidebar-logo"}> Payit</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link
                            className={cn("sidebar-link", {'bg-bank-gradient': isActive})}
                            href={item.route}
                            key={item.label}>
                            <div className={"relative size-6"}>
                                <Image
                                    className={cn({'brightness-[3] invert-0': isActive})}
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill/>
                            </div>
                            <p className={cn("sidebar-label", {"!text-white": isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                {/*USER*/}
            </nav>

            {/*FOOTER*/}
        </section>
    );
};

export default Sidebar;