const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const jualan = [
    { sintak: "(NG)", nama: "Nasi Goreng", harga: 15000 },
    { sintak: "(AG)", nama: "Ayam Geprek", harga: 10000 },
    { sintak: "(AB)", nama: "Ayam Bakar", harga: 12000 },
    { sintak: "(ET)", nama: "Es Teh Manis", harga: 5000 },
    { sintak: "(EJ)", nama: "Es Jeruk Peras", harga: 8000 }
];

console.log("--=( Warung BABA CHAN )=--");
console.log("Daftar Menu :");
jualan.forEach(item => {
    console.log(`- ${item.sintak} ${item.nama} - ${item.harga.toLocaleString('id-ID')}`);
});

let pesanan = [];
let totalHarga = 0;

function menuUtama() {
    console.log("\n1. Pesan");
    console.log("2. Daftar Pesanan Saya");
    console.log("3. Keluar");
    rl.question("Pilih (1/2/3): ", (jawaban) => {
        if (jawaban === "1") {
            pesanMakanan();
        } else if (jawaban === "2") {
            daftarPesanan();
        } else if (jawaban === "3") {
            console.log("Terima kasih telah memesan di Warung BABA CHAN!");
            rl.close();
        } else {
            console.log("Pilihan tidak valid! Coba lagi.");
            menuUtama();
        }
    });
}

function pesanMakanan() {
    rl.question("Masukkan kode menu (contoh: NG, AG, AB, ET, EJ): ", (sintak) => {
        const sintakFormatted = `(${sintak.toUpperCase()})`; // Tambahkan tanda kurung ke input pengguna
        const item = jualan.find(m => m.sintak === sintakFormatted); // Cocokkan dengan data

        if (item) {
            pesanan.push(item);
            totalHarga += item.harga;
            console.log(`Pesanan ditambahkan: ${item.nama}`);
        } else {
            console.log("Kode menu tidak ditemukan, silakan coba lagi.");
        }
        menuUtama();
    });
}

function daftarPesanan() {
    if (pesanan.length === 0) {
        console.log("Pesanan Anda masih kosong.");
    } else {
        console.log("Daftar Pesanan Anda:");
        pesanan.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nama} - ${item.harga.toLocaleString('id-ID')}`);
        });
        console.log(`Total Harga: ${totalHarga.toLocaleString('id-ID')}`);
    }
    menuUtama();
}

menuUtama();