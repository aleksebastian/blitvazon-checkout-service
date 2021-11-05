const s3 = require("../deploy/s3.js");
const fs = require("fs");
const path = require("path");

const uploadBuild = async (file, encoding = "", cacheAge = "300") => {
  await s3.createBucket();
  const buildFile = fs.createReadStream(file);
  buildFile.on("error", (err) => {
    console.log(`File error: ${err}`);
  });
  const fileParts = file.split("/");
  const fileName = fileParts[fileParts.length - 1];
  s3.uploadToS3(
    `js/${fileName}`,
    buildFile,
    "text/javascript",
    encoding,
    "public-read",
    cacheAge
  );
};

const run = async () => {
  await uploadBuild(
    path.join(__dirname, "../public/checkout_bundle.js"),
    "",
    "31536000"
  );
  await uploadBuild(
    path.join(__dirname, "../public/checkout_bundle.js.gz"),
    "gzip",
    "31536000"
  );
  await uploadBuild(
    path.join(__dirname, "../public/checkout_bundle.js.br"),
    "br",
    "31536000"
  );
  process.exit;
};

run();
