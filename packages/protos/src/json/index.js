/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots.root || ($protobuf.roots.root = new $protobuf.Root()))
.addJSON({
  bilibili: {
    nested: {
      Request: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          size: {
            type: "int32",
            id: 2
          }
        }
      },
      TableData: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      Response: {
        fields: {
          data: {
            rule: "repeated",
            type: "TableData",
            id: 1
          },
          status: {
            type: "int32",
            id: 2
          }
        }
      },
      Department: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      Front: {
        fields: {
          work: {
            type: "string",
            id: 1
          },
          people: {
            type: "int32",
            id: 2
          }
        }
      },
      Backend: {
        fields: {
          work: {
            type: "string",
            id: 1
          },
          people: {
            type: "int32",
            id: 3
          }
        }
      },
      PointCloud: {
        fields: {
          points: {
            rule: "repeated",
            type: "Point",
            id: 1
          },
          size: {
            type: "int32",
            id: 2
          }
        }
      },
      Point: {
        fields: {
          x: {
            type: "int32",
            id: 1
          },
          y: {
            type: "int32",
            id: 2
          },
          z: {
            type: "int32",
            id: 3
          }
        }
      }
    }
  }
});

export { $root as default };
