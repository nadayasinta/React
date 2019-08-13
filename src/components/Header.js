import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
    const clickSignOut = () => {
        localStorage.setItem("username", "");
        localStorage.setItem("email", "");
        localStorage.setItem("status", "");
    };

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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/category/business">Business</Link>
                            </li>
                            <li>
                                <Link to="/category/health">Health</Link>
                            </li>
                            <li>
                                <Link to="/category/science">Science</Link>
                            </li>

                            <li>
                                <div class="dropdown">
                                    <button
                                        class="btn p-0 dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Lainnya
                                    </button>

                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <Link
                                            class="dropdown-item"
                                            to="/category/entertainment"
                                        >
                                            Entertainment
                                        </Link>
                                        <Link
                                            class="dropdown-item"
                                            to="/category/general"
                                        >
                                            General
                                        </Link>
                                        <Link
                                            class="dropdown-item"
                                            to="/category/sports"
                                        >
                                            Sports
                                        </Link>
                                        <Link
                                            class="dropdown-item"
                                            to="/category/technology"
                                        >
                                            Technology
                                        </Link>
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
                            onChange={props.doSearch}
                        />
                    </div>
                </div>

                <div class="col-3 ">
                    <nav>
                        <ul class="m-0 float-right">
                            <Link to="/signin">
                                <li>Sign In</li>
                            </Link>
                            <Link to="/signin" onClick={clickSignOut}>
                                <li>Sign Out</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
