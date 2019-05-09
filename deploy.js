const fs = require("fs");
const GithubPages = require("github-pages");
const config = require("./package.json")["github-pages"];

fs.writeFileSync("./dist/CNAME", "radiko-bangumi-json.mmf.moe", {
  encoding: "utf-8"
});

const pages = new GithubPages(config);
pages
  .publish()
  .then(res => {
    console.log("published");
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.error("error while publishing!");
    console.error(JSON.stringify(err, null, 2));
  });
