<template>
  <!-- 进度条,提示当前阅读进度 -->
  <v-progress-linear
      height="6"
      color="teal"
      buffer-value="0"
      :value="process"
      stream
  ></v-progress-linear>
</template>

<script>
export default {
  name: "PostProgressLinear",
  props: ['process']
}
</script>

<style lang="scss" scoped>

</style>
