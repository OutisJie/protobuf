<script setup lang="ts">
// @ts-ignore
import { bilibili } from '@pb/protos/static'
import { request } from './util'

const sendRequest = () => {
  const params: bilibili.IRequest = {
    page: 1,
    size: 15,
  }
  request(params, bilibili.Request, bilibili.Response)
}
</script>

<template>
  <div class="row">
    <div class="text">请求数据格式转换：</div>
    <Button @click="sendRequest">发送请求</Button>
  </div>
</template>
