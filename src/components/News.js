import React from "react";
import newsimage from "../images/news.jpg";
import dislikeimage from "../images/dislike.png";
import heartimage from "../images/heart.png";
import shareimage from "../images/share.png";

function News() {
    return (
        <div class="container news">
            <div class="row border">
                <div class="col-12 p-0">
                    <img class="logo w-100" src={newsimage} alt="logo" />{" "}
                </div>
                <div class="col-12 text-left py-3">
                    <h3 class="font-weight-bold">
                        Deterjen Cair dan Bubuk, Mana Lebih Baik?
                    </h3>
                </div>
                <div class="col-12 text-left">
                    <p>
                        Ketika mencuci, ada banyak hal yang kita perlu
                        perhatikan. Mulai dari kecepatan putaran mesin cucinya,
                        suhu air, memisahkan jenis-jenis pakaian tertentu ketika
                        mencuci, dan lainnya.
                    </p>
                </div>
                <div class="col-12 text-left">
                    <p class="text-secondary">Last update 3 minutes ago</p>
                </div>

                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={heartimage}
                            alt="logo"
                        />
                    </a>
                </div>
                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={shareimage}
                            alt="logo"
                        />
                    </a>
                </div>
                <div class="col-4 border bg-light py-2">
                    <a href="/#">
                        <img
                            class="logo logososmed"
                            src={dislikeimage}
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default News;
