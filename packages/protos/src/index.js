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

    return bilibili;
})();

export { $root as default };
