import React from "react";
import logo from "../images/logo-ALTA@2x.png";

function Header() {
    return (
        <div>
            <header>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div class="alterra text-left">
                                <a href="/#">
                                    <img
                                        class="logo-atas"
                                        src={logo}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div class="row align-items-center navig">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-md-center text-sm-center text-lg-right">
                                    <a href="/#">HOME</a>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-md-center text-sm-center text-lg-center">
                                    <a href="/#" class="aktif">
                                        ABOUT
                                    </a>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-md-center text-sm-center text-lg-left">
                                    <a href="/#">EXPERIENCE</a>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-md-center text-sm-center text-lg-right">
                                    <a href="/#">CONTACT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
