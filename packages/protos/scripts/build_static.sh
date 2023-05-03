protos='proto/*.proto'

# 只打包出 static module，不能使用 lookupType、typed fields 等类型反射功能，包体积小
# d.ts 类型声明完整
target='src/static'
rm -rf $target
mkdir $target
pbjs -t static-module -w es6 -r root -o $target/index.js $protos
pbts -o $target/index.d.ts $target/index.js