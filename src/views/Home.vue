<template>
  <!-- 为app绑定样式,用于更换背景图片 -->
  <v-app id="app" :style="appStyle">
    <!-- 中间 -->
    <v-main>
      <v-container class="main pt-0">
        <Nav></Nav>
        <router-view/>
      </v-container>
    </v-main>

    <!-- 页脚 -->
    <Footer></Footer>
    <!-- 加载一些vue配置 -->
    <Config></Config>
  </v-app>
</template>

<script>
import Nav from "@/components/public/Nav";
import Side from "@/components/public/Side";
import Footer from "@/components/public/Footer";
import Config from "@/components/Config";

export default {
  name: 'Home',
  components: {
    Config,
    Nav,
    Side,
    Footer
  },
  created() {
    this.getBackImg()
  },
  data() {
    return {
      back: '',
      appStyle: {
        width: '100%',
        height: '100%',
        background: '',
        backgroundSize: 'cover',
      },
    }
  },
  methods: {
    getBackImg() {
      // 如果配置里有url则使用配置
      if (this.$config.backImg) {
        this.appStyle.background = `url(${this.$config.backImg}) fixed`
      } else {
        // 没有配置则用static下的background
        const url = require('../static/img/background/background.jpg')
        this.appStyle.background = `url(${url}) fixed`
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.main {
  max-width: 1283px;
}
</style>
