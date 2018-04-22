var fs = require('fs');   //load the fs module which allows you to perform a
                          //filesystem operation

var contents = fs.readFileSync(process.argv[2]);    //to read the file, run
                                                     // fs.readFileSync with process.argv[2](which is the path to the file) as its argument
                                                     //fs.readFileSync will return a buffer object

var lines = contents.toString().split('\n').length - 1; //to turn buffer object into a string use .toString(); then use .split to separate the string into an array using '\n' as its separator; then find the length of the array and subtract one from that number because the final line doesn't end with '\n'

console.log(lines);//log the variable lines to the console

// OFFICIAL SOLUTION:
//
//     var fs = require('fs')
//
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
//
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
