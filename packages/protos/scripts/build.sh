protos='proto/*.proto'

# 即有 static module 也有 json module，通过 index.ts 将两者拼在一起，包的体积会大不少，看你想怎么用了
target='src/both'
rm -rf $target
mkdir $target

pbjs -t json $protos > $target/proto.json
pbjs -t static-module -w es6 -r root -o $target/index.js $protos
pbts -o $target/index.d.ts $target/index.js