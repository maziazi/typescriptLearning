"use strict";
let namaSaya = "Muhamad Azis";
let nim = 22523289;
let isDead = false;
// Inisalisasi variabel awal menentukan jenis tipe datanya
// Variabel tipe any dapat dimasukan berbagai jenis tipe data
let pacar;
pacar = "isna";
pacar = 23;
pacar = true;
// satu variabel bisa mendeklarasikan beberapa jenis tipe data
let pacarSaya;
pacarSaya = "1 Ribu Orang!";
pacarSaya = 2;
//Pembuatan array, jenis tipe data bisa menyesuaikan dan dapat menggunakan any juga
let teman;
teman = ["Qina", "Fadila", "Salwa"];
// Pembuatan tuple array, untuk jenis tipe data berbeda dalam satu array
let cumaTeman;
cumaTeman = ["Hilda", 19, true];
let bestieSaya;
bestieSaya = {
    nama: "Sandi",
    isBaik: true,
    hutang: 75000,
};
// Function, tipe data default pada function mengikuti tipe data pada return. 
// Tipe data void tidak dapat return apapun dan menghasilkan undefined, tapi dapat dimunculkan dengan console.log
function create() {
    // apabila return kosong maka tipe datanya akan menjadi void dan hasil runningnya undefined
    return "Terima Kasih";
}
// Arrow Function
const create2 = () => "Hello World";
const result = create2();
// Parameter
function add(x, y) {
    const z = x + y;
    console.log("hasilnya adalah: " + z);
}
add(10, 20);
function add1(x, y) {
    return `${x} ditambah ${y} hasilnya: ${x + y}`;
}
const result1 = add1(10, 20);
let azis;
azis = true;
console.log({ namaSaya });
console.log({ nim });
console.log({ isDead });
console.log({ pacar });
console.log({ pacarSaya });
console.log({ teman });
console.log({ cumaTeman });
console.log({ bestieSaya });
console.log(create());
console.log({ result });
console.log({ result1 });
console.log({ azis });
