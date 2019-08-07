/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SampleMessage = (function() {

    /**
     * Properties of a SampleMessage.
     * @exports ISampleMessage
     * @interface ISampleMessage
     * @property {string|null} [text] SampleMessage text
     */

    /**
     * Constructs a new SampleMessage.
     * @exports SampleMessage
     * @classdesc Represents a SampleMessage.
     * @implements ISampleMessage
     * @constructor
     * @param {ISampleMessage=} [properties] Properties to set
     */
    function SampleMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SampleMessage text.
     * @member {string} text
     * @memberof SampleMessage
     * @instance
     */
    SampleMessage.prototype.text = "";

    /**
     * Creates a new SampleMessage instance using the specified properties.
     * @function create
     * @memberof SampleMessage
     * @static
     * @param {ISampleMessage=} [properties] Properties to set
     * @returns {SampleMessage} SampleMessage instance
     */
    SampleMessage.create = function create(properties) {
        return new SampleMessage(properties);
    };

    /**
     * Encodes the specified SampleMessage message. Does not implicitly {@link SampleMessage.verify|verify} messages.
     * @function encode
     * @memberof SampleMessage
     * @static
     * @param {ISampleMessage} message SampleMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SampleMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && message.hasOwnProperty("text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified SampleMessage message, length delimited. Does not implicitly {@link SampleMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SampleMessage
     * @static
     * @param {ISampleMessage} message SampleMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SampleMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SampleMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SampleMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SampleMessage} SampleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SampleMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SampleMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SampleMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SampleMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SampleMessage} SampleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SampleMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SampleMessage message.
     * @function verify
     * @memberof SampleMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SampleMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a SampleMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SampleMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SampleMessage} SampleMessage
     */
    SampleMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SampleMessage)
            return object;
        var message = new $root.SampleMessage();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a SampleMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SampleMessage
     * @static
     * @param {SampleMessage} message SampleMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SampleMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this SampleMessage to JSON.
     * @function toJSON
     * @memberof SampleMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SampleMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SampleMessage;
})();

module.exports = $root;
