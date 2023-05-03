import * as $protobuf from 'protobufjs/light'
import json from './both/proto.json'
import { bilibili } from './both'

export const root = new $protobuf.Root().addJSON(json.nested)

export { bilibili }
