<template>
  <div>
    <!-- 修改网站标题 -->
    <div v-title :data-title="this.config.siteTitle"/>
  </div>
</template>

<script>
export default {
  name: "Config"
}
</script>

<style scoped>

</style>
