import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

const scrapping = async (KeyWord) => {
  const BASE_URL = "https://www.game.es/";

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  await page.goto(BASE_URL); // abrir la página

  await page.click("#searchinput"); // el id lo buscamos en el input de la web game para buscar.
  await page.type("#searchinput", KeyWord); // el keyboard es el parametro de la función global, Con inquirer ponemos la pregunta para elegir lo que deseamos buscar
  await page.keyboard.press("Enter"); // con este metodo presionamos enter

  await page.waitForTimeout(8000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(6000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  const items = await page.$$eval("div.search-item", (nodes) =>
    nodes.map((n) => ({
      title: n.querySelector(".a cm-txt")?.innerText, // Optional chaining es el ? y dice que si no tienes lo que pido disponible no me rompas la ejecución
      image: n.querySelector(".img-responsive")?.src,
      price: n.querySelector("div.buy--price")?.innerText,
      type: n.querySelector("span.cm-txt")?.innerText,
    }))
  );

  items.pop(); // quitamos el vacio, es decir, borramos el último elemento

  await browser.close(); // cerramos el navegador

  const dataString = JSON.stringify(items);

  fs.writeFile(
    `${KeyWord.replace(" ", "").toLowerCase()}.json`,
    dataString,
    () => {
      console.log("Archivo escrito");
    }
  );
};

inquirer
  .prompt([
    {
      name: "busqueda",
      message: "Que quieres buscar?",
    },
  ])
  .then((answer) => {
    let KeyWord = answer.busqueda;
    scrapping(KeyWord);
  });
