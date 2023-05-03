/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.root || ($protobuf.roots.root = {});

export const bilibili = $root.bilibili = (() => {

    /**
     * Namespace bilibili.
     * @exports bilibili
     * @namespace
     */
    const bilibili = {};

    bilibili.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof bilibili
         * @interface IRequest
         * @property {number|null} [page] Request page
         * @property {number|null} [size] Request size
         */

        /**
         * Constructs a new Request.
         * @memberof bilibili
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {bilibili.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request page.
         * @member {number} page
         * @memberof bilibili.Request
         * @instance
         */
        Request.prototype.page = 0;

        /**
         * Request size.
         * @member {number} size
         * @memberof bilibili.Request
         * @instance
         */
        Request.prototype.size = 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof bilibili.Request
         * @static
         * @param {bilibili.IRequest=} [properties] Properties to set
         * @returns {bilibili.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link bilibili.Request.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Request
         * @static
         * @param {bilibili.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.size);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link bilibili.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Request
         * @static
         * @param {bilibili.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Request();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = reader.int32();
                    break;
                case 2:
                    message.size = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof bilibili.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Request)
                return object;
            let message = new $root.bilibili.Request();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.size != null)
                message.size = object.size | 0;
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Request
         * @static
         * @param {bilibili.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.page = 0;
                object.size = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof bilibili.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof bilibili.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Request";
        };

        return Request;
    })();

    bilibili.TableData = (function() {

        /**
         * Properties of a TableData.
         * @memberof bilibili
         * @interface ITableData
         * @property {string|null} [id] TableData id
         */

        /**
         * Constructs a new TableData.
         * @memberof bilibili
         * @classdesc Represents a TableData.
         * @implements ITableData
         * @constructor
         * @param {bilibili.ITableData=} [properties] Properties to set
         */
        function TableData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableData id.
         * @member {string} id
         * @memberof bilibili.TableData
         * @instance
         */
        TableData.prototype.id = "";

        /**
         * Creates a new TableData instance using the specified properties.
         * @function create
         * @memberof bilibili.TableData
         * @static
         * @param {bilibili.ITableData=} [properties] Properties to set
         * @returns {bilibili.TableData} TableData instance
         */
        TableData.create = function create(properties) {
            return new TableData(properties);
        };

        /**
         * Encodes the specified TableData message. Does not implicitly {@link bilibili.TableData.verify|verify} messages.
         * @function encode
         * @memberof bilibili.TableData
         * @static
         * @param {bilibili.ITableData} message TableData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified TableData message, length delimited. Does not implicitly {@link bilibili.TableData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.TableData
         * @static
         * @param {bilibili.ITableData} message TableData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableData message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.TableData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.TableData} TableData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.TableData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.TableData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.TableData} TableData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableData message.
         * @function verify
         * @memberof bilibili.TableData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a TableData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.TableData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.TableData} TableData
         */
        TableData.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.TableData)
                return object;
            let message = new $root.bilibili.TableData();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a TableData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.TableData
         * @static
         * @param {bilibili.TableData} message TableData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this TableData to JSON.
         * @function toJSON
         * @memberof bilibili.TableData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TableData
         * @function getTypeUrl
         * @memberof bilibili.TableData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TableData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.TableData";
        };

        return TableData;
    })();

    bilibili.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof bilibili
         * @interface IResponse
         * @property {Array.<bilibili.ITableData>|null} [data] Response data
         * @property {number|null} [status] Response status
         */

        /**
         * Constructs a new Response.
         * @memberof bilibili
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {bilibili.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            this.data = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response data.
         * @member {Array.<bilibili.ITableData>} data
         * @memberof bilibili.Response
         * @instance
         */
        Response.prototype.data = $util.emptyArray;

        /**
         * Response status.
         * @member {number} status
         * @memberof bilibili.Response
         * @instance
         */
        Response.prototype.status = 0;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof bilibili.Response
         * @static
         * @param {bilibili.IResponse=} [properties] Properties to set
         * @returns {bilibili.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link bilibili.Response.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Response
         * @static
         * @param {bilibili.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (let i = 0; i < message.data.length; ++i)
                    $root.bilibili.TableData.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link bilibili.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Response
         * @static
         * @param {bilibili.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.bilibili.TableData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof bilibili.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (let i = 0; i < message.data.length; ++i) {
                    let error = $root.bilibili.TableData.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Response)
                return object;
            let message = new $root.bilibili.Response();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".bilibili.Response.data: array expected");
                message.data = [];
                for (let i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".bilibili.Response.data: object expected");
                    message.data[i] = $root.bilibili.TableData.fromObject(object.data[i]);
                }
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Response
         * @static
         * @param {bilibili.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.status = 0;
            if (message.data && message.data.length) {
                object.data = [];
                for (let j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.bilibili.TableData.toObject(message.data[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof bilibili.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof bilibili.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Response";
        };

        return Response;
    })();

    bilibili.Department = (function() {

        /**
         * Properties of a Department.
         * @memberof bilibili
         * @interface IDepartment
         * @property {number|null} [id] Department id
         * @property {string|null} [name] Department name
         */

        /**
         * Constructs a new Department.
         * @memberof bilibili
         * @classdesc Represents a Department.
         * @implements IDepartment
         * @constructor
         * @param {bilibili.IDepartment=} [properties] Properties to set
         */
        function Department(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Department id.
         * @member {number} id
         * @memberof bilibili.Department
         * @instance
         */
        Department.prototype.id = 0;

        /**
         * Department name.
         * @member {string} name
         * @memberof bilibili.Department
         * @instance
         */
        Department.prototype.name = "";

        /**
         * Creates a new Department instance using the specified properties.
         * @function create
         * @memberof bilibili.Department
         * @static
         * @param {bilibili.IDepartment=} [properties] Properties to set
         * @returns {bilibili.Department} Department instance
         */
        Department.create = function create(properties) {
            return new Department(properties);
        };

        /**
         * Encodes the specified Department message. Does not implicitly {@link bilibili.Department.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Department
         * @static
         * @param {bilibili.IDepartment} message Department message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Department.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Department message, length delimited. Does not implicitly {@link bilibili.Department.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Department
         * @static
         * @param {bilibili.IDepartment} message Department message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Department.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Department message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Department
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Department} Department
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Department.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Department();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Department message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Department
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Department} Department
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Department.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Department message.
         * @function verify
         * @memberof bilibili.Department
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Department.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Department message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Department
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Department} Department
         */
        Department.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Department)
                return object;
            let message = new $root.bilibili.Department();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Department message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Department
         * @static
         * @param {bilibili.Department} message Department
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Department.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Department to JSON.
         * @function toJSON
         * @memberof bilibili.Department
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Department.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Department
         * @function getTypeUrl
         * @memberof bilibili.Department
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Department.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Department";
        };

        return Department;
    })();

    bilibili.Front = (function() {

        /**
         * Properties of a Front.
         * @memberof bilibili
         * @interface IFront
         * @property {string|null} [work] Front work
         * @property {number|null} [people] Front people
         */

        /**
         * Constructs a new Front.
         * @memberof bilibili
         * @classdesc Represents a Front.
         * @implements IFront
         * @constructor
         * @param {bilibili.IFront=} [properties] Properties to set
         */
        function Front(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Front work.
         * @member {string} work
         * @memberof bilibili.Front
         * @instance
         */
        Front.prototype.work = "";

        /**
         * Front people.
         * @member {number} people
         * @memberof bilibili.Front
         * @instance
         */
        Front.prototype.people = 0;

        /**
         * Creates a new Front instance using the specified properties.
         * @function create
         * @memberof bilibili.Front
         * @static
         * @param {bilibili.IFront=} [properties] Properties to set
         * @returns {bilibili.Front} Front instance
         */
        Front.create = function create(properties) {
            return new Front(properties);
        };

        /**
         * Encodes the specified Front message. Does not implicitly {@link bilibili.Front.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Front
         * @static
         * @param {bilibili.IFront} message Front message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Front.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.work != null && Object.hasOwnProperty.call(message, "work"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.work);
            if (message.people != null && Object.hasOwnProperty.call(message, "people"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.people);
            return writer;
        };

        /**
         * Encodes the specified Front message, length delimited. Does not implicitly {@link bilibili.Front.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Front
         * @static
         * @param {bilibili.IFront} message Front message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Front.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Front message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Front
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Front} Front
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Front.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Front();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.work = reader.string();
                    break;
                case 2:
                    message.people = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Front message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Front
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Front} Front
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Front.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Front message.
         * @function verify
         * @memberof bilibili.Front
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Front.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.work != null && message.hasOwnProperty("work"))
                if (!$util.isString(message.work))
                    return "work: string expected";
            if (message.people != null && message.hasOwnProperty("people"))
                if (!$util.isInteger(message.people))
                    return "people: integer expected";
            return null;
        };

        /**
         * Creates a Front message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Front
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Front} Front
         */
        Front.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Front)
                return object;
            let message = new $root.bilibili.Front();
            if (object.work != null)
                message.work = String(object.work);
            if (object.people != null)
                message.people = object.people | 0;
            return message;
        };

        /**
         * Creates a plain object from a Front message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Front
         * @static
         * @param {bilibili.Front} message Front
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Front.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.work = "";
                object.people = 0;
            }
            if (message.work != null && message.hasOwnProperty("work"))
                object.work = message.work;
            if (message.people != null && message.hasOwnProperty("people"))
                object.people = message.people;
            return object;
        };

        /**
         * Converts this Front to JSON.
         * @function toJSON
         * @memberof bilibili.Front
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Front.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Front
         * @function getTypeUrl
         * @memberof bilibili.Front
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Front.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Front";
        };

        return Front;
    })();

    bilibili.Backend = (function() {

        /**
         * Properties of a Backend.
         * @memberof bilibili
         * @interface IBackend
         * @property {string|null} [work] Backend work
         * @property {number|null} [people] Backend people
         */

        /**
         * Constructs a new Backend.
         * @memberof bilibili
         * @classdesc Represents a Backend.
         * @implements IBackend
         * @constructor
         * @param {bilibili.IBackend=} [properties] Properties to set
         */
        function Backend(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Backend work.
         * @member {string} work
         * @memberof bilibili.Backend
         * @instance
         */
        Backend.prototype.work = "";

        /**
         * Backend people.
         * @member {number} people
         * @memberof bilibili.Backend
         * @instance
         */
        Backend.prototype.people = 0;

        /**
         * Creates a new Backend instance using the specified properties.
         * @function create
         * @memberof bilibili.Backend
         * @static
         * @param {bilibili.IBackend=} [properties] Properties to set
         * @returns {bilibili.Backend} Backend instance
         */
        Backend.create = function create(properties) {
            return new Backend(properties);
        };

        /**
         * Encodes the specified Backend message. Does not implicitly {@link bilibili.Backend.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Backend
         * @static
         * @param {bilibili.IBackend} message Backend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.work != null && Object.hasOwnProperty.call(message, "work"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.work);
            if (message.people != null && Object.hasOwnProperty.call(message, "people"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.people);
            return writer;
        };

        /**
         * Encodes the specified Backend message, length delimited. Does not implicitly {@link bilibili.Backend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Backend
         * @static
         * @param {bilibili.IBackend} message Backend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Backend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Backend message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Backend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Backend} Backend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Backend();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.work = reader.string();
                    break;
                case 3:
                    message.people = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Backend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Backend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Backend} Backend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Backend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Backend message.
         * @function verify
         * @memberof bilibili.Backend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Backend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.work != null && message.hasOwnProperty("work"))
                if (!$util.isString(message.work))
                    return "work: string expected";
            if (message.people != null && message.hasOwnProperty("people"))
                if (!$util.isInteger(message.people))
                    return "people: integer expected";
            return null;
        };

        /**
         * Creates a Backend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Backend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Backend} Backend
         */
        Backend.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Backend)
                return object;
            let message = new $root.bilibili.Backend();
            if (object.work != null)
                message.work = String(object.work);
            if (object.people != null)
                message.people = object.people | 0;
            return message;
        };

        /**
         * Creates a plain object from a Backend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Backend
         * @static
         * @param {bilibili.Backend} message Backend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Backend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.work = "";
                object.people = 0;
            }
            if (message.work != null && message.hasOwnProperty("work"))
                object.work = message.work;
            if (message.people != null && message.hasOwnProperty("people"))
                object.people = message.people;
            return object;
        };

        /**
         * Converts this Backend to JSON.
         * @function toJSON
         * @memberof bilibili.Backend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Backend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Backend
         * @function getTypeUrl
         * @memberof bilibili.Backend
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Backend.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Backend";
        };

        return Backend;
    })();

    bilibili.PointCloud = (function() {

        /**
         * Properties of a PointCloud.
         * @memberof bilibili
         * @interface IPointCloud
         * @property {Array.<bilibili.IPoint>|null} [points] PointCloud points
         * @property {number|null} [size] PointCloud size
         */

        /**
         * Constructs a new PointCloud.
         * @memberof bilibili
         * @classdesc Represents a PointCloud.
         * @implements IPointCloud
         * @constructor
         * @param {bilibili.IPointCloud=} [properties] Properties to set
         */
        function PointCloud(properties) {
            this.points = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointCloud points.
         * @member {Array.<bilibili.IPoint>} points
         * @memberof bilibili.PointCloud
         * @instance
         */
        PointCloud.prototype.points = $util.emptyArray;

        /**
         * PointCloud size.
         * @member {number} size
         * @memberof bilibili.PointCloud
         * @instance
         */
        PointCloud.prototype.size = 0;

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @function create
         * @memberof bilibili.PointCloud
         * @static
         * @param {bilibili.IPointCloud=} [properties] Properties to set
         * @returns {bilibili.PointCloud} PointCloud instance
         */
        PointCloud.create = function create(properties) {
            return new PointCloud(properties);
        };

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link bilibili.PointCloud.verify|verify} messages.
         * @function encode
         * @memberof bilibili.PointCloud
         * @static
         * @param {bilibili.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.points != null && message.points.length)
                for (let i = 0; i < message.points.length; ++i)
                    $root.bilibili.Point.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.size);
            return writer;
        };

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link bilibili.PointCloud.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.PointCloud
         * @static
         * @param {bilibili.IPointCloud} message PointCloud message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointCloud.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.PointCloud} PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointCloud.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.PointCloud();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.bilibili.Point.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.size = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PointCloud message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.PointCloud
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.PointCloud} PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointCloud.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointCloud message.
         * @function verify
         * @memberof bilibili.PointCloud
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointCloud.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (let i = 0; i < message.points.length; ++i) {
                    let error = $root.bilibili.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            return null;
        };

        /**
         * Creates a PointCloud message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.PointCloud
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.PointCloud} PointCloud
         */
        PointCloud.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.PointCloud)
                return object;
            let message = new $root.bilibili.PointCloud();
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".bilibili.PointCloud.points: array expected");
                message.points = [];
                for (let i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".bilibili.PointCloud.points: object expected");
                    message.points[i] = $root.bilibili.Point.fromObject(object.points[i]);
                }
            }
            if (object.size != null)
                message.size = object.size | 0;
            return message;
        };

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.PointCloud
         * @static
         * @param {bilibili.PointCloud} message PointCloud
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointCloud.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (options.defaults)
                object.size = 0;
            if (message.points && message.points.length) {
                object.points = [];
                for (let j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.bilibili.Point.toObject(message.points[j], options);
            }
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            return object;
        };

        /**
         * Converts this PointCloud to JSON.
         * @function toJSON
         * @memberof bilibili.PointCloud
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointCloud.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointCloud
         * @function getTypeUrl
         * @memberof bilibili.PointCloud
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointCloud.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.PointCloud";
        };

        return PointCloud;
    })();

    bilibili.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof bilibili
         * @interface IPoint
         * @property {number|null} [x] Point x
         * @property {number|null} [y] Point y
         * @property {number|null} [z] Point z
         */

        /**
         * Constructs a new Point.
         * @memberof bilibili
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {bilibili.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof bilibili.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof bilibili.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Point z.
         * @member {number} z
         * @memberof bilibili.Point
         * @instance
         */
        Point.prototype.z = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof bilibili.Point
         * @static
         * @param {bilibili.IPoint=} [properties] Properties to set
         * @returns {bilibili.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link bilibili.Point.verify|verify} messages.
         * @function encode
         * @memberof bilibili.Point
         * @static
         * @param {bilibili.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link bilibili.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bilibili.Point
         * @static
         * @param {bilibili.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof bilibili.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bilibili.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bilibili.Point();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.z = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bilibili.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bilibili.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof bilibili.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bilibili.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bilibili.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.bilibili.Point)
                return object;
            let message = new $root.bilibili.Point();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.z != null)
                message.z = object.z | 0;
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bilibili.Point
         * @static
         * @param {bilibili.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof bilibili.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Point
         * @function getTypeUrl
         * @memberof bilibili.Point
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Point.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/bilibili.Point";
        };

        return Point;
    })();

    return bilibili;
})();

export { $root as default };
