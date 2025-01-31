import http from "http"

const server = http.createServer((req,res) => {
// console.log(req);

if (req.url === "/api/data" && req.method == "GET") {
    res.writeHead(200, {'Content-Type': 'application/json'})
    //kalau ada client yang mengakses endpoint /api/data
    //maka akan diberikan data ssonnya 
    //selain itu akan di berikan pesan error
    
   const Priasigna  = {
          nama : "izzanmanipulator",
          keahlian : "memanipulasi manusia",
          pekerjaan : "Manusia adalah alat"
    }
    res.write(JSON.stringify(Priasigna))
    res.end()

} else {
    res.writeHead(404, {'Content' : 'application/json'})
    res.end(JSON.stringify({ error : "Not found"}))
 }
})

// server.listen(3000, () => {
//     console.log("server di jalankan");

// })

server.listen(3000,() =>{
    console.log("server di guncangkan");
})