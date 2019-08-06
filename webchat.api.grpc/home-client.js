var grpc = require('grpc');

var sampleProto = grpc.load('./protos/home.proto');

var client = new sampleProto.sample.HomeService('0.0.0.0:50051', grpc.credentials.createInsecure());

function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log(response);
}

function listBooks() {
    client.list({}, function(error, books) {
        printResponse(error, books);
    });
}

listBooks();