import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
    const loggedIn = { firstName: "John" , lastName: "Doe" };

    return (
        <main className={"flex h-screen w-full font-inter"}>
            <Sidebar user={loggedIn} />

            <div className={"flex size-full flex-col"}>
                <div className={"root-layout-mobile"}>
                    <div>
                        <MobileSidebar user={loggedIn} />
                    </div>
                    <Image className={"pb-1.5"} src={"/icons/logo.svg"} alt={"logo"} width={30} height={30} />
                </div>
            {children}
            </div>
        </main>
    );
}