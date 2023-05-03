<script setup lang="ts">
import { root, bilibili } from '@pb/protos'
import { Button } from 'view-ui-plus'
import { encode, parse } from '@pb/txt-format' // 分别对应 decode 和 encode

const PointCloud = root.lookupType('bilibili.PointCloud')
console.log('json-module class', PointCloud)
console.log('json-module instance', PointCloud.create())

console.log('static-module class', bilibili.PointCloud)
console.log('static-module instance', bilibili.PointCloud.create())

const exportFile = () => {
  const data: bilibili.IPointCloud = generateData()
  const a = document.createElement('a')

  let str = encode(PointCloud.fromObject(data), { indent: '  ' })

  let url = `data:text/plain, ${str}`
  let result = 'pointcloud.txt'

  a.href = url

  a.download = result

  a.click()

  URL.revokeObjectURL(url)
}

const generateData = () => {
  return {
    points: new Array(100).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
    })),
    size: 100,
  }
}
</script>

<template>
  <div class="row">
    <div class="text">随机生成 pointcloud 并导出txt:</div>
    <Button @click="exportFile">导出 txt</Button>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.text {
  white-space: nowrap;
}
</style>
