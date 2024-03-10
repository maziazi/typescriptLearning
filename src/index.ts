let namaSaya: string = "Muhamad Azis";
let nim: number = 22523289;
let isDead: boolean = false;

// Inisalisasi variabel awal menentukan jenis tipe datanya
// Variabel tipe any dapat dimasukan berbagai jenis tipe data
let pacar;
pacar = "isna";
pacar = 23;
pacar = true;

// satu variabel bisa mendeklarasikan beberapa jenis tipe data
let pacarSaya: number | string;
pacarSaya = "1 Ribu Orang!";
pacarSaya= 2;

//Pembuatan array, jenis tipe data bisa menyesuaikan dan dapat menggunakan any juga
let teman: string[];
teman = ["Qina", "Fadila", "Salwa"]

// Pembuatan tuple array, untuk jenis tipe data berbeda dalam satu array
let cumaTeman: [String, number, boolean];
cumaTeman = ["Hilda", 19, true];

// Custom Type, membuat objek
type Bestie ={
    nama:string,
    isBaik:boolean,
    // mendeklarasikan variabel dangan tanda tanya menunjukan bahwa variabel ini bersifat opsional untuk diisikan data
    hutang?: number,
}
let bestieSaya: Bestie;
bestieSaya={
    nama: "Sandi",
    isBaik: true,
    hutang: 75_000,
}

// Function, tipe data default pada function mengikuti tipe data pada return. 
// Tipe data void tidak dapat return apapun dan menghasilkan undefined, tapi dapat dimunculkan dengan console.log
function create(): string{
    // apabila return kosong maka tipe datanya akan menjadi void dan hasil runningnya undefined
    return "Terima Kasih";
}

// Arrow Function
const create2 = ():string=>"Hello World";
const result = create2();

// Parameter
function add(x: number, y: number): void{
    const z: number = x + y;
    console.log("hasilnya adalah: " + z);
}
add(10, 20);

function add1(x: number, y: number): string{
    return `${x} ditambah ${y} hasilnya: ${x+y}`;
}
const result1 = add1(10, 20);

// Union Type - Kustomisasi Tipe Data
type Pria = string;
type Wanita = boolean;
type Gander = Pria | Wanita;
let azis: Gander;
azis=true;

console.log({namaSaya});
console.log({nim});
console.log({isDead});
console.log({pacar});
console.log({pacarSaya});
console.log({teman});
console.log({cumaTeman});
console.log({bestieSaya});
console.log(create());
console.log({result});
console.log({result1});
console.log({azis});
