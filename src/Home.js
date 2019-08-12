import React from 'react';
import logo from './asset/img/logo-ALTA@2x.png';
import foto from './asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function Home(){
    return (
        <div class="home-background">
            <header>
                <div class="container">
                    <div class="row align-items-center ">
                        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div class="alterra text-left">
                              <a href="/#"><img class="logo-atas" src={logo} alt="logo"/></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div class="row align-items-center navig">
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="/#" class="aktif">HOME</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="/#">ABOUT</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="/#">EXPERIENCE</a></div>
                                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="/#">CONTACT</a></div> 
                            </div>
                        </div>    
                    </div>
                </div> 
            </header>
            
                <div class="container homeground">
                    <div class="row align-items-center isi-home">
                        <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                            <img id="foto-profil" src={foto} alt="foto"/>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 col-12 text-left">
                            <div class="main-p">
                                <p class="sapaan">Hi, my name is </p>
                                <p class="nama">Anne Sullivan</p>
                                <p class="hobi">I build things for the web</p>
                                <p class="tombol"><a href="/#">Get In Touch</a></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home;