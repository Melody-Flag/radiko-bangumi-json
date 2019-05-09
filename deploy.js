const fs = require("fs");
const ghpages = require("gh-pages");

// fs.writeFileSync("./dist/CNAME", "radiko-bangumi-json.mmf.moe", {
//   encoding: "utf-8"
// });

console.log(
  `Update triggered automatically.\n\nAt ${Date.now()}(${new Date()}) [ci skip]`
);
ghpages.publish(
  "dist",
  {
    repo: `https://${
      process.env.GH_TOKEN
    }@github.com/mmf-moe/radiko-bangumi-json.git`,
    silent: true,
    message: `Update triggered automatically.\n\nAt ${Date.now()}(${new Date()}) [ci skip]`,
    user: {
      name: "Yesterday17",
      email: "t@yesterday17.cn"
    }
  },
  err => {
    if (err) console.error(err);
  }
);
