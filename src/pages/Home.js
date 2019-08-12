import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import News from "../components/News";

function Home() {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <Header />
                </div>
            </div>
            <div class="container py-5">
                <div class="row">
                    <div class="col-4">
                        <SideBar />
                    </div>
                    <div class="col-8">
                        <News />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
