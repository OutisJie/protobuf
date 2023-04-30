import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bilibili. */
export namespace bilibili {

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
}
