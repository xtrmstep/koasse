var pbjs = require("protobufjs/cli/pbjs");
// generate JS
pbjs.main([ "--target", "static-module", "messages.proto", "-w","commonjs","-o","bundle.js"], function(err, output) {
    if (err)
        throw err;
    console.log("finished");
});