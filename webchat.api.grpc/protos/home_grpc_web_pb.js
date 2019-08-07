/**
 * @fileoverview gRPC-Web generated client stub for sample
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sample = require('./home_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sample.HomeServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sample.HomeServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.sample.Empty,
 *   !proto.sample.CustomText>}
 */
const methodDescriptor_HomeService_List = new grpc.web.MethodDescriptor(
  '/sample.HomeService/List',
  grpc.web.MethodType.UNARY,
  proto.sample.Empty,
  proto.sample.CustomText,
  /** @param {!proto.sample.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sample.CustomText.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sample.Empty,
 *   !proto.sample.CustomText>}
 */
const methodInfo_HomeService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sample.CustomText,
  /** @param {!proto.sample.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sample.CustomText.deserializeBinary
);


/**
 * @param {!proto.sample.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sample.CustomText)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sample.CustomText>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sample.HomeServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sample.HomeService/List',
      request,
      metadata || {},
      methodDescriptor_HomeService_List,
      callback);
};


/**
 * @param {!proto.sample.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sample.CustomText>}
 *     A native promise that resolves to the response
 */
proto.sample.HomeServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sample.HomeService/List',
      request,
      metadata || {},
      methodDescriptor_HomeService_List);
};


module.exports = proto.sample;

