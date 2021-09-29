const rp = require("request-promise");
console.log("test");

function RequestHTML(url) {
  rp.get(url).then((html) => {
    console.log(html);
    return "testing";
  });
}

module.exports = RequestHTML;
