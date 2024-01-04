<template>
  <el-dialog v-model="showImg" title="图片查看" top="15vh" width="80%" :before-close="closeDia">
    <img class="img_big" :src="url" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let showImg = ref(false)
const props = defineProps(['show', 'url'])

const emits = defineEmits(['close'])

const closeDia = () => {
  emits('close')
}

watch(
  () => props.show,
  (value: boolean) => {
    showImg.value = value
  }
)
</script>
<style lang="less">
.el-dialog__body{
  height: 80vh;
}
.img_big {
  width: 98%;
  height: 100%;
}
</style>
