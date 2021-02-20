<template>
  <!-- 进度条,提示当前阅读进度 -->
  <v-progress-linear
      height="6"
      color="teal"
      buffer-value="0"
      value="20"
      stream
  ></v-progress-linear>
</template>

<script>
export default {
  name: "PostProgressLinear"
}
</script>

<style lang="scss" scoped>

</style>
