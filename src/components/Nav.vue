<template>
  <div class="nav">
    <v-app-bar
        dense
        color="#fff"
    >
      <!-- 导航栏图标 TODO:换成回到首页 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <!-- 导航栏上的标题 -->
      <v-toolbar-title>{{ siteTitle }}</v-toolbar-title>

      <!-- 导航栏中间部分 -->
      <v-spacer>
        <v-tabs
            align-with-title
            color="blue"
            background-color="#fff"
        >
          <v-tab to="/blogs">博文列表</v-tab>
          <v-tab to="/archive">归档</v-tab>
          <v-tab to="/time-line">时间线</v-tab>
          <v-tab to="/friends">友人帐</v-tab>
        </v-tabs>
      </v-spacer>

      <!-- 最右边的两个按钮 -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-avatar tile>
        <img :src="avatarUrl">
      </v-avatar>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      siteTitle: this.config.siteTitle,
      avatarUrl: this.config.avatar
    }
  }
}
</script>

<style scoped>
.nav {
  padding: 0;
}
</style>
