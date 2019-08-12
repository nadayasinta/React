import React from "react";
import logo from "../images/logo.svg";

function Header() {
    return (
        <div class="header container-fluid">
            <div class="row align-items-center py-2 px-5">
                <div class="col-2">
                    <div class="float-left">
                        <img class="logo" src={logo} alt="logo" />
                        <a href="/#" class="font-weight-bold">
                            KabarKabar
                        </a>
                    </div>
                </div>

                <div class="col-5 ">
                    <nav>
                        <ul class="m-0">
                            <li>
                                <a href="/#">Sepakbola</a>
                            </li>
                            <li>
                                <a href="/#">Ekonomi</a>
                            </li>
                            <li>
                                <a href="/#">Politik</a>
                            </li>
                            <li>
                                <a href="/#">Hiburan</a>
                            </li>

                            <li>
                                <div class="dropdown show ">
                                    <a
                                        class="btn p-0 dropdown-toggle"
                                        href="/#"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Lainnya
                                    </a>

                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <a class="dropdown-item" href="/#">
                                            Action
                                        </a>
                                        <a class="dropdown-item" href="/#">
                                            Another action
                                        </a>
                                        <a class="dropdown-item" href="/#">
                                            Something else here
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-2">
                    <div class="active-cyan-4">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                </div>

                <div class="col-3 ">
                    <nav>
                        <ul class="m-0 float-right">
                            <a href="/#">
                                <li>Masuk</li>
                            </a>
                            <a href="/#">
                                <li>Daftar</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
