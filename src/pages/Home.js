import React from "react";
import foto from "../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Header from "../components/Header";

function Home() {
    return (
        <div class="home-background">
            <Header />
            <div class="container homeground">
                <div class="row align-items-center isi-home">
                    <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                        <img id="foto-profil" src={foto} alt="foto" />
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 text-left">
                        <div class="main-p">
                            <p class="sapaan">Hi, my name is </p>
                            <p class="nama">Anne Sullivan</p>
                            <p class="hobi">I build things for the web</p>
                            <p class="tombol">
                                <a href="/#">Get In Touch</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
