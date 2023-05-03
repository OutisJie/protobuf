protos='proto/*.proto'

# 只打包出 json module，每次使用都需要先 lookupType 找到数据类之后，再使用
# d.ts 声明只包含 static 的部分，所以需要每次 lookupType 之后手动赋类型
target='src/json'
rm -rf $target
mkdir $target
pbjs -t json-module -w es6 -r root -o $target/index.js $protos
pbjs -t static-module $protos | pbts -o $target/index.d.ts -