<template>
  <div>
    <v-card class="mb-1 pb-1 text-center progressLinear">
      <!-- 进度条 -->
      <PostProgressLinear></PostProgressLinear>
      <p class="mt-1 mb-0">当前已读20%</p>
    </v-card>
    <!-- 文章目录 -->
    <v-card color="#383C4A">
      <v-card-text>
        <p class="toc">{{ toc }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PostProgressLinear from "@/components/plugins/PostProgressLinear";

export default {
  name: "Toc",
  components: {PostProgressLinear},
  props: [
    "toc"
  ],
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/variables.scss";

.progressLinear {
  background-color: $card-color;
  color: $font-color;
}

.toc {
  color: $title-color;
}
</style>
