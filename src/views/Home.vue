<template>
  <v-app id="app">
    <Nav></Nav>
    <v-main class="main">
      <v-container fluid id="container">
        首页
        <button @click="getInfo">获取数据</button>
        {{ msg }}
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      页脚
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';
import Nav from "@/components/Nav";

export default {
  name: 'Home',
  components: {
    Nav
  },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    getInfo() {
      axios.get('https://service-gswrzvv0-1259669520.gz.apigw.tencentcs.com/release/test').then(res => {
        console.log(res)
        this.msg = res.data
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.main
//background: url("https://gitee.com/lluuiq/static/raw/master/img/avatar/lin1.png")

#container
  max-width: 1283px
  text-align: center
</style>
