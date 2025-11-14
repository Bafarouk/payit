import React from 'react';
import HeaderBox from "@/components/header-box";
import BalanceBox from "@/components/balance-box";

const Home = () => {
    const loggedIn = { firstName: "John" };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type={"greeting"}
                        title={"welcome"}
                        user={loggedIn?.firstName || "Guest"}
                        subtext={"Access and manage your account and transactions efficiently"}/>
                </header>

                <BalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
            </div>
        </section>
    );
};

export default Home;
