const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  let contentType = "text/html"; // Cambio "const" a "let" para permitir reasignación

  switch (path.extname(filePath)) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    // Agrega más casos si necesitas servir otros tipos de archivos (imágenes, etc.)
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Archivo no encontrado
        fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf-8");
        });
      } else {
        // Otro error de lectura
        res.writeHead(500);
        res.end("Error interno del servidor");
      }
    } else {
      // Archivo encontrado
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor del front-end escuchando en http://localhost:${port}`);
});
