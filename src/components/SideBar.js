import React from "react";

function SideBar() {
    var judul = [
        " Masih Punya Stok Daging Kurban? Coba 4 Resep Gulai Kambing Ini!",
        "Seberapa Efektif Masker Melindungi Kita dari Bahaya Polusi Udara?",
        "Tak Sanggup Beli Rolex? Intip Arloji Seri Seiko 5 Sports Ini",
        "11 Cara Mencegah Kanker Tanpa Biaya yang Besar",
        "Koper dengan Material Kayu dan Aeronautika Dibanderol Rp 400 Juta"
    ];
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
            {judul.map(function(judl, index) {
                return (
                    <div class="row border p-2">
                        <div class="col-12 text-left">
                            <span class="bg-danger py-1 px-2 rounded">
                                #{index}
                            </span>
                        </div>
                        <div class="col-12 text-left py-1">{judl}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default SideBar;
