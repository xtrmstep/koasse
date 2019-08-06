/*
https://github.com/grpc/grpc-web
sample https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld
info https://grpc.io/blog/state-of-grpc-web/
chrome extension ui https://github.com/SafetyCulture/grpc-web-devtools

*/

const {Empty, CustomText} = require('./protos/home_pb.js');
const {HomeServiceClient} = require('./protos/home_grpc_web_pb.js');

var client = new HomeServiceClient('http://localhost:8080');

var request = new Empty();

client.list(request, {}, (err, response) => {
  console.log(response.getMessage());
});