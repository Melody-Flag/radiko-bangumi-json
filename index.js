const axios = require("axios");
const parser = require("xml-js");
const fs = require("fs");

const stations = {
  TBSラジオ: "TBS",
  ニッポン放送: "LFR",
  InterFM897: "INT",
  "TOKYO FM": "FMT",
  "J-WAVE": "FMJ",
  bayfm78: "BAYFM78",
  NACK5: "NACK5",
  ＦＭヨコハマ: "YFM",
  文化放送: "QRR",
  ラジオNIKKEI第1: "RN1",
  ラジオNIKKEI第2: "RN2",
  // NHKラジオ第2: "JOAB",
  "NHK-FM（東京）": "JOAK-FM",
  "NHKラジオ第１(東京)": "JOAK",
  放送大学: "HOUSOU-DAIGAKU"
};

if (!fs.existsSync("./dist")) fs.mkdirSync("./dist");

async function toJSON(name) {
  try {
    const res = await axios.get(
      `http://radiko.jp/v3/program/station/weekly/${name}.xml`
    );
    const json = parser.xml2json(res.data, {
      compact: true,
      // spaces: 2,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      ignoreComment: true
    });
    fs.writeFileSync(`./dist/${name}.json`, json, { encoding: "utf-8" });
  } catch (e) {
    console.error(e);
  }
}

function toJSONs(arr) {
  return Promise.all(arr.map(name => toJSON(name)));
}

toJSONs(Object.values(stations));
