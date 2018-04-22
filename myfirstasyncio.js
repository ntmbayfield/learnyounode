var fs = require('fs');
var numOfLines=undefined;


function findNumOfLines(callback) {
  fs.readFile(process.argv[2], function doneReading(error, fileContents){
    numOfLines = fileContents.toString().split('\n').length-1;
    callback();
  });
}

function logNumberOfLines() {
  console.log(numOfLines);
}

findNumOfLines(logNumberOfLines);


//OFFICIAL SOLUTION:

    // var fs = require('fs')
    // var file = process.argv[2]
    //
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })
