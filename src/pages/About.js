import React from "react";
import foto from "../images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
    return (
        <div>
            <Header />
            <div class="container-fluid about-me text-left">
                <h1 class="container pl-2 pt-5 pb-5">ABOUT ME.</h1>
            </div>

            <div class="container ">
                <div class="row pt-5 pb-5 ">
                    <div class="col-lg-7 col-md-12 col-sm-12 col-12 pl-5 text-left">
                        <div class="about-anne">
                            <p>
                                Hello! I’m Anne Sullivan, a full-stack engineer
                                based in Malang, IDN who enjoys building things
                                that live on the internet. I develop exceptional
                                websites and web apps that provide intuitive,
                                pixel-perfect user interfaces with efficient and
                                modern backends. <br />
                                <br />
                                Shortly after graduating from Alterra Academy, I
                                joined the engineering team at Alterra where I
                                work on a wide variety of interesting and
                                meaningful projects on a daily basis. <br />
                                <br />
                                Here’s few technologies I’ve been working with
                                recently :
                            </p>
                        </div>
                        <div>
                            <table class="tabel-anne">
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Sigle Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
                        <div class="foto-id text-lg-right text-md-center text-sm-center">
                            <img src={foto} alt="foto" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
