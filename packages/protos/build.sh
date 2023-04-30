protos='proto/*.proto'
target='src'

rm -rf src
mkdir src
pbjs -t static-module -w es6 -r root -o $target/index.js $protos
pbts -o $target/index.d.ts $target/index.js
