/* eslint-disable no-param-reassign */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

import Parsimmon from 'parsimmon'
import { Enum, Field, Message, Root, Type } from 'protobufjs'
import parse_txt from './parse/parsetxt'

function buildMessageFromAST(message: Message, MessageClass: Type, ast: any) {
  // eslint-disable-next-line array-callback-return
  ast.map(
    (
      entry: {
        name: string
        type: string
        value: string | number
        values: any[]
      },
      index: any
    ) => {
      var value
      var field = MessageClass.get(entry.name) as Field
      if (!field) {
        console.log('bug', entry, index)
        return
      }
      if (entry.type === 'pair') {
        if (field.resolvedType && field.resolvedType instanceof Enum) {
          value = field.resolvedType.values[entry.value]
        } else {
          value = entry.value
        }
      } else if (entry.type === 'message' && !field.map) {
        var ChildMessageClass = MessageClass.lookupType(field.type)
        value = ChildMessageClass.create()
        buildMessageFromAST(value, ChildMessageClass, entry.values)
      } else if (entry.type === 'message' && field.map) {
        const k = entry.values.find(
          (p: { name: string }) => p.name === 'key'
        ).value
        const v = entry.values.find(
          (p: { name: string }) => p.name === 'value'
        ).value
        value = { [k]: v }
      }

      if (field.repeated) {
        // @ts-ignore
        if (!message[entry.name]) {
          // @ts-ignore
          message[entry.name] = [value]
        } else {
          // @ts-ignore
          message[entry.name].push(value)
        }
      } else if (field.map) {
        // @ts-ignore
        message[entry.name] = {
          // @ts-ignore
          ...(message[entry.name] || {}),
          ...(value as Message),
        }
      } else {
        // @ts-ignore
        message[entry.name] = value
      }
    }
  )
}

interface IParseResult {
  status: boolean
  data: Message | undefined
  message: string
}
export const parse = (root: Root, fqn: string, input: string) => {
  const MessageClass = root.lookupType(fqn)
  const message = root.lookupType(fqn).create()

  const temp = parse_txt(input)

  const result: IParseResult = {
    status: temp.status,
    data: undefined,
    message: '',
  }
  if (result.status) {
    buildMessageFromAST(
      message,
      MessageClass,
      (temp as Parsimmon.Success<any>).value
    )
    const verify = root.lookupType(fqn).verify(message)
    if (!verify) {
      result.data = root.lookupType(fqn).fromObject(message.toJSON())
    } else {
      result.data = undefined
      result.message = verify
    }
  } else {
    result.data = undefined
    result.message = (temp as Parsimmon.Failure).expected.join(',')
  }

  return result
}
