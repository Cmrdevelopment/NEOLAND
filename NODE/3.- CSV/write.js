const fs = require("fs");

const alumnos = [
  {
    name: "Rodri",
    age: "43",
    job: "dev",
  },
  {
    name: "Laura",
    age: "37",
    job: "libreria",
  },
  {
    name: "Antonio",
    age: "33",
    job: "dev",
  },
];

const convertCSV = (data) => {
    let csv = "";
    let headers = Object.keys(data[0]);
    csv += headers.join(";" + "\n");
    data.forEach((row) => {
        headers.forEach((header, index) => {
            if (index > 0) {
                csv += ";";
            }
            csv += row[header];
        });
        
      csv += "\n";
    });
    return csv;
};

const CSVFile = convertCSV(alumnos);

fs.writeFile("alumnos.csv", CSVFile, (error) => {
    error ? console.log("existe un error ❌") : console.log("fichero creado 👌");
})
