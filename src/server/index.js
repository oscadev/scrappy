const rp = require("request-promise");
const { JSDOM } = window.require("jsdom");
console.log("test");

function RequestHTML(url) {
  rp.get(url).then((html) => {
    console.log(html);
    const dom = new JSDOM(html, { includeNodeLocations: true });
    const items = dom.window.document.querySelectorAll("*");
    console.log("SDFHJSDFJKSHDFJKSDHFJSDFHSD: ", items.length);
    let filtered = [];
    items.forEach((e) => {
      if (e.textContent === "27.1.0") {
        filtered.push(e);
      }
    });

    console.log("filtered: ", dom.nodeLocation(filtered[0]));

    return "testing";
  });
}

module.exports = RequestHTML;
