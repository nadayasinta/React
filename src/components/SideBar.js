import React from "react";

function SideBar(props) {
    return (
        <div class="container sidebar">
            <div class="row border p-2">
                <div class="col-6 font-weight-bold text-left">
                    {" "}
                    BERITA TERKINI{" "}
                </div>
                <div class="col-6 text-right">
                    {" "}
                    <a href="/#">lihat semua</a>{" "}
                </div>
            </div>
            {props.news.map(function(berita, index) {
                return (
                    <div class="row border p-2">
                        <div class="col-12 text-left">
                            <span class="bg-danger py-1 px-2 rounded">
                                #{index + 1}
                            </span>
                        </div>
                        <div class="col-12 text-left py-1">
                            <a href={berita.url}>{berita.title}</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SideBar;
