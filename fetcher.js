const request = require('request');
const fs = require('fs');
const { argv } = require('process');

console.log(argv.slice(2))
let url = argv[2];
let localFilePath = argv[3];

// /home/labber/lighthouse/w2/d3/page-fetcher/index.html

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err)
    }
    //file written successfully
    const stats = fs.statSync(localFilePath);
    // console.log(stats);
    const sizeInBytes = stats.size;
    console.log (`Downloaded and saved ${sizeInBytes} bytes to ${localFilePath}`);
  })
});

