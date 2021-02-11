<template>
  <v-app id="app">
    <Nav></Nav>
    <v-main class="main">
      <v-container fluid id="container">
        <router-view/>
      </v-container>
    </v-main>

    <v-footer>
      页脚
    </v-footer>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: 'Home',
  components: {
    Nav
  },
}
</script>
<style lang="sass" scoped>
//.main
//background: url("https://gitee.com/lluuiq/static/raw/master/img/avatar/lin1.png")

#container
  max-width: 1283px
  text-align: center
</style>
