// @ts-ignore
import _ from 'lodash'
import { Enum, Field, MapField, Message } from 'protobufjs'

interface IEncodeConfig {
  indent?: string
  removeFieldRegExp?: RegExp
}

function encodeString(metadata: any, value: string, { indent }: IEncodeConfig) {
  return `${indent}${metadata.name}: "${value}"`
}

function encodeNumber(metadata: any, value: number, { indent }: IEncodeConfig) {
  return `${indent}${metadata.name}: ${value}`
}

function encodeBoolean(
  metadata: any,
  value: boolean,
  { indent }: IEncodeConfig
) {
  return `${indent}${metadata.name}: ${value ? 'true' : 'false'}`
}

function encodeEnum(metadata: any, value: any, { indent }: IEncodeConfig) {
  const { values } = metadata.resolvedType

  const enum_text = values[value]
  return `${indent}${metadata.name}: ${enum_text || value}`
}

function encodeMessage<T extends Message>(
  metadata: any,
  message: T,
  configs?: IEncodeConfig
) {
  const { indent: _indent, removeFieldRegExp } = configs || {}

  const children = _.flattenDeep(
    // @ts-ignore
    _.map(message.$type.fields, (metachild) => {
      if (
        metachild &&
        removeFieldRegExp &&
        removeFieldRegExp.test(metachild.name)
      ) {
        return []
      }
      // 这里不去 message 的原型链中寻找默认值，如果未填则直接跳过

      let values = Object.hasOwnProperty.call(message, metachild.name)
        ? // @ts-ignore
          message[metachild.name]
        : null

      if (values !== null && !metachild.repeated) {
        values = [values]
      }
      if (values) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return encodeValues(values, metachild, configs || {})
      }
      return []
    })
  )
  const indent = _indent || ''

  if (metadata && children.length > 0) {
    return [`${indent}${metadata.name} {`, children, `${indent}}`]
  }
  return children
}
// @ts-ignore
function encodeMap<T extends Message>(
  metadata: MapField,
  value: T,
  { indent }: IEncodeConfig
) {
  // @ts-ignore
  const items = Object.entries(value).map(([k, v]) => {
    // @ts-ignore
    const keyEncoder = ENCODERS[metadata.keyType || 'string']
    // @ts-ignore
    const valueEncoder = ENCODERS[metadata.type || 'string']
    return [
      `${indent}${metadata.name} {`,
      keyEncoder({ name: 'key' }, k, { indent: `${indent} ` }),
      valueEncoder({ name: 'value' }, v, { indent: `${indent} ` }),
      `${indent}}`,
    ]
  })
  return items
}

const ENCODERS = {
  message: encodeMessage,
  group: encodeMessage,
  enum: encodeEnum,

  string: encodeString,
  bytes: encodeString,

  float: encodeNumber,
  double: encodeNumber,

  bool: encodeBoolean,

  int32: encodeNumber,
  sint32: encodeNumber,
  sfixed32: encodeNumber,
  uint32: encodeNumber,
  fixed32: encodeNumber,

  int64: encodeNumber,
  sint64: encodeNumber,
  sfixed64: encodeNumber,
  uint64: encodeNumber,
  fixed64: encodeNumber,
  map: encodeMap,
}

function encodeValues<T extends Message>(
  values: T[],
  metadata: Field | MapField,
  configs: IEncodeConfig
) {
  const { indent, removeFieldRegExp } = configs

  // @ts-ignore
  let encoder = ENCODERS[metadata.type]
  if ((metadata as MapField).keyType && metadata.map) {
    encoder = encodeMap
  }
  if (!encoder) {
    if (metadata.resolvedType && metadata.resolvedType instanceof Enum) {
      encoder = encodeEnum
    } else {
      encoder = encodeMessage
    }
  }
  if (encoder) {
    return values.map((value) => {
      if (
        metadata &&
        removeFieldRegExp &&
        removeFieldRegExp.test(metadata.name)
      ) {
        return []
      }
      return encoder(metadata, value, {
        indent: indent !== undefined ? indent + '  ' : '',
        removeFieldRegExp,
      })
    })
  }
  console.error('No encoder for', metadata.type)
  return []
}

export const encode = <T extends Message>(
  message: T,
  configs?: IEncodeConfig
): string => {
  const lines = _.flattenDeep(encodeMessage(null, message, configs))
  return lines.join('\n')
}
