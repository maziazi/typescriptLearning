"use strict";
// function beli(buku: Buku): void {
//     console.log(`
//     -----
//     terimakasih ${buku.penulis} 
//     -----
//     Berhasil menulis buku bestseller internasional sebagai acuan untuk mendirikan start-up, yaitu:
//     Judul : ${buku.judul}
//     Banyak Halaman : ${buku.jumlahHalaman}
//     Ketersediaan Buku : ${buku.tersediaStok}
//     Penerbit : ${buku.penerbit}
//     `);
// }
function beliNonFiksi(buku) {
    console.log(`
    -----
    Terimakasih ${buku.penulis} 
    -----

    Berhasil menulis buku bestseller internasional sebagai acuan untuk mendirikan start-up, yaitu:
    Judul : ${buku.judul}
    Jenis : ${buku.jenis}
    Penerbit : ${buku.penerbit}
    Edisi : ${buku.edisi}
    Banyak Halaman : ${buku.jumlahHalaman}
    Ketersediaan Buku : ${buku.tersediaStok}
    `);
}
function beliFiksi(buku) {
    console.log(`
    -----
    Terimakasih ${buku.penulis} 
    -----

    Berhasil menulis buku bestseller internasional sebagai acuan untuk mendirikan start-up, yaitu:
    Judul : ${buku.judul}
    Genre : ${buku.genre}
    Penerbit : ${buku.penerbit}
    Edisi : ${buku.edisi}
    Banyak Halaman : ${buku.jumlahHalaman}
    Ketersediaan Buku : ${buku.tersediaStok}
    `);
}
const zeroToOne = {
    judul: "Zero To One",
    penulis: "Peter Thiel",
    jumlahHalaman: 244,
    tersediaStok: false,
    penerbit: "Gramedia",
    edisi: 5,
    jenis: "Bisnis",
};
const hecticHecticHatTrick = {
    judul: "Hectic, Hectic, Hat Trick!",
    penulis: "Sashi Kirana",
    jumlahHalaman: 210,
    tersediaStok: true,
    penerbit: "Elex Media Komputindo",
    edisi: 1,
    genre: "Pendidikan",
};
// beli(zeroToOne);
beliNonFiksi(zeroToOne);
beliFiksi(hecticHecticHatTrick);
