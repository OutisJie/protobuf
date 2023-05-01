<script setup lang="ts">
import { ref } from 'vue'
import { bilibili } from '@pb/protos'
import { Input, Button, Upload } from 'view-ui-plus'

const length = ref<number>(1000000)

// 慢的要死，真的慢，真的吓我一跳
// const slowData = ref<bilibili.IPointCloud | null>(null);

const generateData = () => {
  return {
    points: new Array(length.value).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
    })),
    size: 100
  }
}

const exportFile = (type: 'json' | 'pb') => {
  const data: bilibili.IPointCloud = generateData();

  // const s = performance.now()
  // slowData.value = generateData()
  // console.log("[cost ref]: create data:", (performance.now() - s) / 1000)

  const a = document.createElement('a');

  let url = '';
  let result = '';

  if (type === 'pb') {
    // encode
    const start = performance.now();
    // const encodedData = bilibili.PointCloud.encode(slowData.value).finish();
    const encodedData = bilibili.PointCloud.encode(data).finish();

    console.log("[cost encode]: pb,", (performance.now() - start) / 1000);

    const blob = new Blob([encodedData], { type: 'application/octet-stream' })

    url = URL.createObjectURL(blob);
    result = 'pointcloud.pb';
  } else {
    const start = performance.now();
    // const jsonData = bilibili.PointCloud.fromObject(slowData.value).toJSON();
    const jsonData = bilibili.PointCloud.fromObject(data).toJSON();

    console.log("[cost encode]: json,", (performance.now() - start) / 1000);

    url = `data:text/plain, ${JSON.stringify(jsonData)}`
    result = 'pointcloud.json';
  }

  a.href = url;

  a.download = result;

  a.click()

  URL.revokeObjectURL(url);
}

const uploadFile = (file: File) => {
  const reader = new FileReader();

  const start = performance.now();


  reader.onload = (event: any) => {
    const row = event.target.result;

    if (typeof row === 'string') {
      const data = bilibili.PointCloud.fromObject(JSON.parse(row));
      console.log("[cost decode]:  json ,", (performance.now() - start) / 1000);


    } else {
      const unitArray = new Uint8Array(row);

      const data = bilibili.PointCloud.decode(unitArray)

      console.log("[cost decode]:  pb ,", (performance.now() - start) / 1000);

    }


  }
  if (file.name.includes("json")) {
    reader.readAsText(file)
  } else {
    reader.readAsArrayBuffer(file)
  }

}

</script>

<template>
  <div class="row">
    <div class="text">随机生成点云数据并导出：</div>
    <Input v-model="length" placeholder="请输入点的数量" />
    <Button @click="() => exportFile('json')">导出 json</Button>
    <Button @click="() => exportFile('pb')">导出 pb</Button>
    <Upload action="" :before-upload="uploadFile">
      <Button>加载 pb 或 json 文件</Button>
    </Upload>
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