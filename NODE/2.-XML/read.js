const fs = require ("fs")

const {XMLParser, XMLNuelder, XMLValidator} = require ("fast-xml-parser");

const parser = new XMLParser();



fs.readFile("books.xml", "utf-8", (error, data)=> {
    let parseData;
    if (error) {
        console.log(error)
    } else {
        parseData = parser.parse(data);
        //! IMPOORTANTE !!! para utilizar estos datos hay que llamar otra funcion
        readConsole(parseData)
    }
});

const readConsole = (data) => {
    // console.log(data);

    const { libros } = data;
    // console.log(libros);

    const {libro} = libros
    // console.log(libro);

libro.forEach((element, index) => {
    console.log("libro", element);
    });
};

