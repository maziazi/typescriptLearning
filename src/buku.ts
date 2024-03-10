type EdisiCetak = 1 | 2 | 3 | 4 | 5 ;

interface Buku {
    judul: string;
    penulis: string;
    jumlahHalaman: number;
    tersediaStok: boolean;
    edisi: EdisiCetak;
}
// Interface dengan nama sama maka propertinya akan ditambahkan dengan isi sebelumnya
interface Buku{
    penerbit: string;
}

type Genre = "Horor" | "Komedi" | "Pendidikan" | "Misteri";
interface Fiksi extends Buku{
    genre: Genre;
}

type Jenis = "Bisnis" | "Psikologi" | "Produktivitas"
interface NonFiksi extends Buku{
    jenis: string;
}

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

function beliNonFiksi(buku: NonFiksi): void {
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
    `)
}

function beliFiksi(buku: Fiksi): void {
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
    `)
}

const zeroToOne:NonFiksi ={
    judul: "Zero To One",
    penulis: "Peter Thiel",
    jumlahHalaman: 244,
    tersediaStok: false,
    penerbit: "Gramedia",
    edisi: 5,
    jenis: "Bisnis",
}

const hecticHecticHatTrick:Fiksi={
    judul: "Hectic, Hectic, Hat Trick!",
    penulis: "Sashi Kirana",
    jumlahHalaman: 210,
    tersediaStok: true,
    penerbit: "Elex Media Komputindo",
    edisi: 1,
    genre: "Pendidikan",
}

// beli(zeroToOne);
beliNonFiksi(zeroToOne);
beliFiksi(hecticHecticHatTrick);
