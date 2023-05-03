import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bilibili. */
export namespace bilibili {

    /** Properties of a Request. */
    interface IRequest {

        /** Request page */
        page?: (number|null);

        /** Request size */
        size?: (number|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IRequest);

        /** Request page. */
        public page: number;

        /** Request size. */
        public size: number;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: bilibili.IRequest): bilibili.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link bilibili.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link bilibili.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Request
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TableData. */
    interface ITableData {

        /** TableData id */
        id?: (string|null);
    }

    /** Represents a TableData. */
    class TableData implements ITableData {

        /**
         * Constructs a new TableData.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.ITableData);

        /** TableData id. */
        public id: string;

        /**
         * Creates a new TableData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableData instance
         */
        public static create(properties?: bilibili.ITableData): bilibili.TableData;

        /**
         * Encodes the specified TableData message. Does not implicitly {@link bilibili.TableData.verify|verify} messages.
         * @param message TableData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableData message, length delimited. Does not implicitly {@link bilibili.TableData.verify|verify} messages.
         * @param message TableData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.TableData;

        /**
         * Decodes a TableData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.TableData;

        /**
         * Verifies a TableData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableData
         */
        public static fromObject(object: { [k: string]: any }): bilibili.TableData;

        /**
         * Creates a plain object from a TableData message. Also converts values to other types if specified.
         * @param message TableData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.TableData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TableData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response data */
        data?: (bilibili.ITableData[]|null);

        /** Response status */
        status?: (number|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IResponse);

        /** Response data. */
        public data: bilibili.ITableData[];

        /** Response status. */
        public status: number;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: bilibili.IResponse): bilibili.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link bilibili.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link bilibili.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Department. */
    interface IDepartment {

        /** Department id */
        id?: (number|null);

        /** Department name */
        name?: (string|null);
    }

    /** Represents a Department. */
    class Department implements IDepartment {

        /**
         * Constructs a new Department.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IDepartment);

        /** Department id. */
        public id: number;

        /** Department name. */
        public name: string;

        /**
         * Creates a new Department instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Department instance
         */
        public static create(properties?: bilibili.IDepartment): bilibili.Department;

        /**
         * Encodes the specified Department message. Does not implicitly {@link bilibili.Department.verify|verify} messages.
         * @param message Department message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IDepartment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Department message, length delimited. Does not implicitly {@link bilibili.Department.verify|verify} messages.
         * @param message Department message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IDepartment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Department message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Department
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Department;

        /**
         * Decodes a Department message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Department
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Department;

        /**
         * Verifies a Department message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Department message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Department
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Department;

        /**
         * Creates a plain object from a Department message. Also converts values to other types if specified.
         * @param message Department
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Department, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Department to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Department
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Front. */
    interface IFront {

        /** Front work */
        work?: (string|null);

        /** Front people */
        people?: (number|null);
    }

    /** Represents a Front. */
    class Front implements IFront {

        /**
         * Constructs a new Front.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IFront);

        /** Front work. */
        public work: string;

        /** Front people. */
        public people: number;

        /**
         * Creates a new Front instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Front instance
         */
        public static create(properties?: bilibili.IFront): bilibili.Front;

        /**
         * Encodes the specified Front message. Does not implicitly {@link bilibili.Front.verify|verify} messages.
         * @param message Front message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IFront, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Front message, length delimited. Does not implicitly {@link bilibili.Front.verify|verify} messages.
         * @param message Front message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IFront, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Front message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Front
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Front;

        /**
         * Decodes a Front message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Front
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Front;

        /**
         * Verifies a Front message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Front message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Front
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Front;

        /**
         * Creates a plain object from a Front message. Also converts values to other types if specified.
         * @param message Front
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Front, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Front to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Front
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Backend. */
    interface IBackend {

        /** Backend work */
        work?: (string|null);

        /** Backend people */
        people?: (number|null);
    }

    /** Represents a Backend. */
    class Backend implements IBackend {

        /**
         * Constructs a new Backend.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IBackend);

        /** Backend work. */
        public work: string;

        /** Backend people. */
        public people: number;

        /**
         * Creates a new Backend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Backend instance
         */
        public static create(properties?: bilibili.IBackend): bilibili.Backend;

        /**
         * Encodes the specified Backend message. Does not implicitly {@link bilibili.Backend.verify|verify} messages.
         * @param message Backend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IBackend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Backend message, length delimited. Does not implicitly {@link bilibili.Backend.verify|verify} messages.
         * @param message Backend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IBackend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Backend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Backend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Backend;

        /**
         * Decodes a Backend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Backend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Backend;

        /**
         * Verifies a Backend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Backend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Backend
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Backend;

        /**
         * Creates a plain object from a Backend message. Also converts values to other types if specified.
         * @param message Backend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Backend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Backend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Backend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PointCloud. */
    interface IPointCloud {

        /** PointCloud points */
        points?: (bilibili.IPoint[]|null);

        /** PointCloud size */
        size?: (number|null);
    }

    /** Represents a PointCloud. */
    class PointCloud implements IPointCloud {

        /**
         * Constructs a new PointCloud.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IPointCloud);

        /** PointCloud points. */
        public points: bilibili.IPoint[];

        /** PointCloud size. */
        public size: number;

        /**
         * Creates a new PointCloud instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PointCloud instance
         */
        public static create(properties?: bilibili.IPointCloud): bilibili.PointCloud;

        /**
         * Encodes the specified PointCloud message. Does not implicitly {@link bilibili.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PointCloud message, length delimited. Does not implicitly {@link bilibili.PointCloud.verify|verify} messages.
         * @param message PointCloud message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IPointCloud, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PointCloud message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.PointCloud;

        /**
         * Decodes a PointCloud message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PointCloud
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.PointCloud;

        /**
         * Verifies a PointCloud message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PointCloud message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PointCloud
         */
        public static fromObject(object: { [k: string]: any }): bilibili.PointCloud;

        /**
         * Creates a plain object from a PointCloud message. Also converts values to other types if specified.
         * @param message PointCloud
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.PointCloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PointCloud to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PointCloud
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);

        /** Point z */
        z?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: bilibili.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /** Point z. */
        public z: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: bilibili.IPoint): bilibili.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link bilibili.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bilibili.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link bilibili.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bilibili.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): bilibili.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bilibili.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Point
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
