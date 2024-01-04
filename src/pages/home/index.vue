<template>
  <div class="banner">
    <el-carousel :interval="0" type="card" height="400px">
      <el-carousel-item v-for="item in bannerList" :key="item.url">
        <img
          @click="showBigImg(item.url)"
          :src="getAssetsFile(item.url + '.jpg')"
          class="imgTab"
          draggable="false"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="menu">
    <div
      class="menu_item"
      :class="{ select_menu_item: item.path == selectMenuPath }"
      v-for="item in menu"
      @click="handleSelect(item.path)"
      :key="item.path"
    >
      {{ item.title }}
    </div>
  </div>
  <router-view></router-view>
  <div v-if="selectMenuPath == '/'">
    <info />
  </div>
  <div class="home_footer">

  </div>
  <big-img :show="showImg" :url="imgUrl" @close="closeImgDialog" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils'
import bigImg from '@/components/bigImg.vue'
import info from './components/info.vue'
import { useRouter } from 'vue-router'

let imgUrl = ref('')
let showImg = ref(false)
let selectMenuPath = ref('/')

const router = useRouter()
const menu = [
  { title: '个人信息', id: '1', path: '/' },
  { title: '项目介绍', id: '2', path: '/project' },
  { title: '学习笔记', id: '3', path: '/note' },
  { title: '生活分享', id: '4', path: '/share' },
]

const bannerList = [
  { url: 'banner/1' },
  { url: 'banner/2' },
  { url: 'banner/3' },
  { url: 'banner/4' },
  { url: 'banner/5' },
  { url: 'banner/6' },
  { url: 'banner/7' }
]

const showBigImg = (url: string) => {
  imgUrl.value = getAssetsFile(url + '.jpg')
  showImg.value = true
}

const handleSelect = (key: string) => {
  selectMenuPath.value = key
  router.push(key)
}

const closeImgDialog = () => {
  showImg.value = false
}
</script>
<style lang="less" scoped>
@import url(./index.less);
</style>
