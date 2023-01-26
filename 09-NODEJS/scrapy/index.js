const puppeteer = require('puppeteer');


//(() => { })();  Función auto ejecutada.

(async () => {
  // Crea un navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    args: ['--window-size=1920,1080']
  });

  // Abrir una nueva pestaña en el navegador
  const page = await browser.newPage();

  // Navegar hacia Amazon

  await page.goto('https://amazon.es');

  await page.waitForSelector('#twotabsearchtextbox');
  await page.type('#twotabsearchtextbox', 'juegos nintendo switch')

  await wait(2000);
  await page.click('#nav-search-submit-button');

  await wait(2000);
  const hrefs = await page.evaluate(() => {
    const enlaces = document.querySelectorAll('[data-component-type="s-search-result"] h2 a');
    const hrefs = [];
    for (let enlace of enlaces) {
      hrefs.push(enlace.href);
    }

    return hrefs;
  });

  for (let href of hrefs) {
    await page.goto(href);
    await wait(2000);

    const titulo = await page.evaluate(() => document.querySelector('span#productTitle').innerText);

    const precio = await page.evaluate(() => document.querySelector('span.a-offscreen').innerText);

    const imagen = await page.evaluate(() => document.querySelector('#landingImage').src);

    console.log(titulo, precio, imagen);

  }

  await browser.close();

})();

function wait(milliseconds) {
  return new Promise(r => setTimeout(r, milliseconds));
}