const path = require("path");
const { fileURLToPath } = require("url");

// path absoluto

//console.log(path.resolve("teste.txt"));

// formar path

const midFolder = "relatorios";
const fileName = "bruno.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);