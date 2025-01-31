import http from "http"
// create a local server
// dan umum digunakan untuk proses development server
const PORT = 3000
const server = http.createServer((req, res) => {
    //tentukan respon tipe header (data yang mau dikirim)
    //pakai writeHead(http_response_code, {tipe datanya apa})
    //lalu tampilkan datanya dan hentikan requestnya

    //ini kalau JSON
    //===============================================================
    // res.writeHead(200,{'Content-Type': 'application/json'})

    //lalu tampilkan datanya dan hentikan requestnya
    //JSON stringify digunakan untuk mengubah object JS menjadi string JSON
    // res.end(JSON.stringify({
    //     data: 'Hello World',
    // }));
    // Ini kalau plain text
    // res.writeHead(200, { 'Content-Type' : 'text/html'});
    // res.end("<h1>Ini dari server Node.Js</h1>")
    //===============================================================
    //res.writeHead = hanya digunakan untuk menentukana jenis header (data saja)
    //tidak bisa digunakan untuk mengirim atau menulis data 

    // res.write = digunakan untuk menulis atau mengirim data

    //jadi format penulisannya kaya begini
    //res.writeHead
    //res.write
    //res.end
})
//jalankan servernya
//versi1
//server.listen(3000)
//versi2
server.listen(PORT,() =>{
    console.log(`Server di jalankan pada port ${PORT}`);
})