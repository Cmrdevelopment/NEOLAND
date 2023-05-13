import fs from "fs";

const readData = () => {
  fs.readFile("ejemplo.txt", "utf-8", (error, dataText) => {
    error
      ? console.log("error en la lectura del archivo ❌")
      : correcData(dataText);
  });
};

const correcData = (data) => {
  let fixedData = data.match(/\D/g).join(""); // /\D/g => significa que busque digitos y el join los quita
  writeText(fixedData);
};

const writeText = (data) => {
  fs.writeFile("correctText.txt", data, () => {
    // correctText.txt es el nombre del archivo que quereos excribir, data como segundo parametros y el tercer elmento es la colbac
    console.log("Creando el fichero 👌");
  });
};

readData();
