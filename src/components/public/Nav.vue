<template>
  <v-app-bar
      id="nav"
      class="mb-3"
      height="50"
      dense
      color="#383C4A"
  >
    <!-- 用了java图标 -->
    <v-app-bar-nav-icon>
      <v-btn icon to="/">
        <v-icon large color="#9FBC82">mdi-language-java</v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

    <!-- 导航栏上的标题 -->
    <v-toolbar-title class="ml-3 mr-5 pa-0 font-weight-bold" style="color: #9FBC82;">
      {{ this.$config.navTitle }}
    </v-toolbar-title>

    <!-- 导航栏中间部分,用作链接 -->
    <v-spacer>
      <v-tabs
          align-with-title
          color="blue"
          background-color="#383C4A"
      >
        <v-tab class="ma-0" style="color: #9FBC82;font-size: 1em;" to="/blogs">博文列表</v-tab>
        <v-tab class="ma-0" style="color: #9FBC82;font-size: 1em;" to="/archive">归档</v-tab>
        <v-tab class="ma-0" style="color: #9FBC82;font-size: 1em;" to="/time-line">时间线</v-tab>
        <v-tab class="ma-0" style="color: #9FBC82;font-size: 1em;" to="/friends">友人帐</v-tab>
      </v-tabs>
    </v-spacer>

    <!-- 最右边的搜索按钮 -->
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

</template>

<script>
export default {
  name: "Nav",
}
</script>

<style lang="scss" scoped>

</style>
