import React from "react";
import logofb from "../images/ic_fb@2x.png";
import logotw from "../images/ic-twitter@2x.png";
import logoig from "../images/ic-instagram@2x.png";
import logoli from "../images/ic-linkedin@2x.png";
import logoalta from "../images/logo-ALTA-v2.png";

function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row pt-5 pb-5">
                        <div class="pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center">
                            <a href="/#">
                                <img
                                    class="logo-bawah"
                                    src={logoalta}
                                    alt="logoalta"
                                />
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center">
                            <h6>Social Media:</h6>
                            <a href="https://www.facebook.com/AlterraAcademy">
                                <img
                                    class="logo-sosmed-1"
                                    src={logofb}
                                    alt="logofb"
                                />
                            </a>
                            <a href="https://twitter.com/">
                                <img
                                    class="logo-sosmed-2"
                                    src={logotw}
                                    alt="logotw"
                                />
                            </a>
                            <a href="https://www.instagram.com/alterra.academy/">
                                <img
                                    class="logo-sosmed-3"
                                    src={logoig}
                                    alt="logoig"
                                />
                            </a>
                            <a href="https://id.linkedin.com/">
                                <img
                                    class="logo-sosmed-4"
                                    src={logoli}
                                    alt="logoli"
                                />
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-5 col-sm-12 col-12 pt-3">
                            <h6 class="text-lg-right text-md-center text-sm-center kopi">
                                Copyright © 2019 - Unjelas Team
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
