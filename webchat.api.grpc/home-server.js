var grpc = require('grpc');

var sampleProto = grpc.load('./protos/home.proto');

var server = new grpc.Server();

server.addService(sampleProto.sample.HomeService.service, {
    list: function(call, callback) {
        callback(null, {text: 'sample text'});
    }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();